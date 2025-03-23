package software.bytepushers.bpweb.exceptions;

public class ApplicationMessageException extends RuntimeException {

    String[] messages;

    public ApplicationMessageException(String... messages) {
        super(messages != null && messages.length != 0 ? messages[0] : null);
        this.messages = messages;
    }
}
