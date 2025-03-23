package software.bytepushers.bpweb.constants;

public class HubspotApiConstants {

    public final static String HUBSPOT_DEFINED_CATEGORY = "HUBSPOT_DEFINED";

    public enum HubSpotAPI{
        CONTACT(69), COMPANY(71), DEAL(64), QUOTE(0);
        private Integer associationTypeId;

        HubSpotAPI(Integer associationTypeId){
            this.associationTypeId = associationTypeId;
        }

        public Integer getAssociationTypeId() {
            return associationTypeId;
        }
    }

}
