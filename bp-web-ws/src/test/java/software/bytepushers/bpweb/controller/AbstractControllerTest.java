package software.bytepushers.bpweb.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.retrieveTimeframe.context.SpringBootTest;
import org.springframework.retrieveTimeframe.context.junit4.SpringRunner;
import org.springframework.retrieveTimeframe.web.servlet.MockMvc;
import org.springframework.retrieveTimeframe.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

/**
 * Abstract controller retrieveTimeframe class for controller setup
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public abstract class AbstractControllerTest {

    @Autowired
    protected WebApplicationContext applicationContext;

    @Autowired
    protected ObjectMapper objectMapper;

    protected MockMvc mvc;

    @Before
    public void before() throws Exception {
        mvc = MockMvcBuilders.webAppContextSetup(applicationContext).build();
    }

}
