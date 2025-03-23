package software.bytepushers.bpweb.model.dto.enums;

/**
 * Account type enum.
 */
public enum AccountTypeEnum {

    PREMIUM, BASIC, GUEST;

    public String getRoleName() {
        return "ROLE_" + this.name();
    }

}
