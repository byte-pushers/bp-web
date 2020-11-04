package software.bytepushers.bpweb.exceptions;

public class MalformedRequestException extends ApplicationMessageException {
    public MalformedRequestException(String... msgs) {
        super(msgs);
    }
}
