package tests;

import utils.UtilRequests;
import org.testng.annotations.Test;
import java.io.IOException;

public class JsonTest {

    /* template for Post Request sending */
    @Test
    public void createCompany () throws IOException {
        UtilRequests.postRequest("https://stage.storied.co/api_company", "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\ncreation company qa test2\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"pc_first_name\"\r\n\r\ntest\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"pc_last_name\"\r\n\r\nlast\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\nqa@storied.co\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"phone\"\r\n\r\n123456\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"pc_title\"\r\n\r\ntitle\r\n-----011000010111000001101001--");
    }
}
