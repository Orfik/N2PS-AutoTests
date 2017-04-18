package webDriver;

import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

public class PrepareDrivers {
    private static DesiredCapabilities capabilities;

    public static DesiredCapabilities prepareFirefox() {
        System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "//src//test//resources//geckodriver");
        capabilities = DesiredCapabilities.firefox();
        capabilities.setCapability("marionette", true);
        return capabilities;
    }

    public static DesiredCapabilities prepareChrome() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "//src//test//resources//chromedriver");
        capabilities = DesiredCapabilities.chrome();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("no-sandbox");
        //options.setBinary("C:\\Users\\Owner\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe");
        capabilities.setCapability(ChromeOptions.CAPABILITY, options);
        return capabilities;
    }
}
