package software.bytepushers.bpweb.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.utils.ModelUtils;

/**
 * The test case implementation for the Quote repository layer
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class QuoteRepositoryTest {

    @Autowired
    private QuoteRepository quoteRepository;

    /**
     * The test case implementation is responsible for validating the save operation for the quote.
     */
    @Test
    public void testSave() {
        Quote quote = ModelUtils.quoteEntity();
        Quote createdQuote = this.quoteRepository.save(quote);
        assert createdQuote.getId() != null : "Quote must be created";
    }

}
