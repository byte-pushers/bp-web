package software.bytepushers.prospect.resource.server.model;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class Prospect {
    private String email; // Email remains the unique identifier
    private Map<String, Object> fields; // Dynamic fields storage

    public Prospect(String email) {
        this.email = email;
        this.fields = new HashMap<>();
    }

    public Prospect(String email, Map<String, Object> fields) {
        this.email = email;
        this.fields = new HashMap<>(fields);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Map<String, Object> getFields() {
        return new HashMap<>(fields);
    }

    public void setFields(Map<String, Object> fields) {
        this.fields = new HashMap<>(fields);
    }

    public Object getField(String fieldName) {
        return fields.get(fieldName);
    }

    public void setField(String fieldName, Object value) {
        fields.put(fieldName, value);
    }

    public boolean hasField(String fieldName) {
        return fields.containsKey(fieldName);
    }

    // Convenience methods for common fields (backwards compatibility)
    public String getName() {
        return (String) fields.get("Name");
    }

    public void setName(String name) {
        fields.put("Name", name);
    }

    public Boolean isDecisionMaker() {
        Object value = fields.get("Decision Maker");
        if (value instanceof Boolean) {
            return (Boolean) value;
        } else if (value instanceof String) {
            return Boolean.parseBoolean((String) value);
        }
        return false;
    }

    public void setDecisionMaker(boolean decisionMaker) {
        fields.put("Decision Maker", decisionMaker);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Prospect)) return false;
        Prospect prospect = (Prospect) o;
        return email.equalsIgnoreCase(prospect.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email.toLowerCase());
    }

    @Override
    public String toString() {
        return "Prospect{" +
                "email='" + email + '\'' +
                ", fields=" + fields +
                '}';
    }
}