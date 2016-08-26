package webDriver;

import org.openqa.selenium.remote.DesiredCapabilities;

public class PrepareDrivers {
    public static DesiredCapabilities capabilities;

    public static DesiredCapabilities prepareFirefox() {
        System.setProperty("webdriver.chr.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\geckodriver.exe");
        capabilities = DesiredCapabilities.firefox();
        capabilities.setCapability("marionette", false);
        return capabilities;
    }

    public static DesiredCapabilities prepareChrome() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\chromedriver.exe");
        capabilities = DesiredCapabilities.chrome();
        return capabilities;
    }
}
