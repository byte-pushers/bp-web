package software.bytepushers.prospect.resource.server.service;

import software.bytepushers.prospect.resource.server.ProspectManager;
import software.bytepushers.prospect.resource.server.model.Prospect;

import java.io.File;
import java.io.IOException;
import java.util.*;


public class ProspectService {

    public static File compareAndUpdateProspects(File targetListFile, File datasourceFile) throws IOException {
        // Read both files with their dynamic structure
        ProspectManager.ProspectData datasourceData = ProspectManager.readProspectsFromExcel(datasourceFile);
        ProspectManager.ProspectData targetData = ProspectManager.readProspectsFromExcel(targetListFile);

        List<Prospect> oldProspects = datasourceData.getProspects();
        List<Prospect> newProspects = targetData.getProspects();

        // Use datasource headers as the master schema, but include any new headers from target
        Set<String> allHeaders = new LinkedHashSet<>(datasourceData.getHeaders());
        allHeaders.addAll(targetData.getHeaders());
        List<String> finalHeaders = new ArrayList<>(allHeaders);

        // Create a map for quick lookup of existing prospects by email
        Map<String, Prospect> existingProspectsMap = new HashMap<>();
        for (Prospect prospect : oldProspects) {
            existingProspectsMap.put(prospect.getEmail().toLowerCase(), prospect);
        }

        // Process new prospects
        for (Prospect newProspect : newProspects) {
            String emailKey = newProspect.getEmail().toLowerCase();
            Prospect existingProspect = existingProspectsMap.get(emailKey);

            if (existingProspect != null) {
                // Update existing prospect with new data
                updateProspectFields(existingProspect, newProspect, allHeaders);
            } else {
                // Add new prospect, ensuring it has all expected fields
                Prospect completeProspect = createCompleteProspect(newProspect, allHeaders);
                oldProspects.add(completeProspect);
                existingProspectsMap.put(emailKey, completeProspect);
            }
        }

        // Ensure all existing prospects have all fields (fill missing with empty values)
        for (Prospect prospect : oldProspects) {
            ensureAllFields(prospect, allHeaders);
        }

        // Create updated prospect data with final headers
        ProspectManager.ProspectData updatedData = new ProspectManager.ProspectData(
                oldProspects, finalHeaders, datasourceData.getEmailColumnIndex());

        // Write to output file
        File outputFile = new File("updated_prospects.xlsx");
        ProspectManager.writeProspectsToExcel(updatedData, outputFile);

        return outputFile;
    }

    private static void updateProspectFields(Prospect existing, Prospect newData, Set<String> allHeaders) {
        // Update all fields from the new prospect data
        for (String header : allHeaders) {
            Object newValue = newData.getField(header);
            if (newValue != null && !newValue.toString().trim().isEmpty()) {
                Object existingValue = existing.getField(header);

                // Update if the new value is different from existing
                if (!Objects.equals(existingValue, newValue)) {
                    existing.setField(header, newValue);
                }
            }
        }
    }

    private static Prospect createCompleteProspect(Prospect source, Set<String> allHeaders) {
        Prospect complete = new Prospect(source.getEmail());

        // Copy all existing fields from source
        Map<String, Object> sourceFields = source.getFields();
        for (String header : allHeaders) {
            Object value = sourceFields.get(header);
            complete.setField(header, value != null ? value : "");
        }

        return complete;
    }

    private static void ensureAllFields(Prospect prospect, Set<String> allHeaders) {
        for (String header : allHeaders) {
            if (!prospect.hasField(header)) {
                prospect.setField(header, "");
            }
        }
    }

    /**
     * Alternative method that preserves only datasource schema (ignores new columns from target)
     */
    public static File compareAndUpdateProspectsStrictSchema(File targetListFile, File datasourceFile) throws IOException {
        ProspectManager.ProspectData datasourceData = ProspectManager.readProspectsFromExcel(datasourceFile);
        ProspectManager.ProspectData targetData = ProspectManager.readProspectsFromExcel(targetListFile);

        List<Prospect> oldProspects = datasourceData.getProspects();
        List<Prospect> newProspects = targetData.getProspects();
        List<String> masterHeaders = datasourceData.getHeaders();

        Map<String, Prospect> existingProspectsMap = new HashMap<>();
        for (Prospect prospect : oldProspects) {
            existingProspectsMap.put(prospect.getEmail().toLowerCase(), prospect);
        }

        for (Prospect newProspect : newProspects) {
            String emailKey = newProspect.getEmail().toLowerCase();
            Prospect existingProspect = existingProspectsMap.get(emailKey);

            if (existingProspect != null) {
                // Update only fields that exist in the master schema
                for (String header : masterHeaders) {
                    Object newValue = newProspect.getField(header);
                    if (newValue != null && !newValue.toString().trim().isEmpty()) {
                        existingProspect.setField(header, newValue);
                    }
                }
            } else {
                // Add new prospect with only master schema fields
                Prospect newCompleteProspect = new Prospect(newProspect.getEmail());
                for (String header : masterHeaders) {
                    Object value = newProspect.getField(header);
                    newCompleteProspect.setField(header, value != null ? value : "");
                }
                oldProspects.add(newCompleteProspect);
                existingProspectsMap.put(emailKey, newCompleteProspect);
            }
        }

        File outputFile = new File("updated_prospects_strict.xlsx");
        ProspectManager.writeProspectsToExcel(datasourceData, outputFile);

        return outputFile;
    }
}