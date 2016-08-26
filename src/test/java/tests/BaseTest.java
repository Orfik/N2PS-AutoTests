package tests;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import ru.stqa.selenium.factory.WebDriverFactory;
import ru.stqa.selenium.factory.WebDriverFactoryMode;
import webDriver.PrepareDrivers;

import java.util.logging.Logger;

import static java.util.concurrent.TimeUnit.SECONDS;


public class BaseTest {
    protected WebDriver driver;
    private PrepareDrivers prepareDrivers;
    private static final Logger LOG = Logger.getLogger("MyWebDriverFactory");

    @Parameters("browser")
    @BeforeClass(alwaysRun = true)
    public void openBrowser(@Optional String browser) {
        prepareDrivers = new PrepareDrivers();
        WebDriverFactory.setMode(WebDriverFactoryMode.THREADLOCAL_SINGLETON);
        if (browser == null)
            browser = "UNKNOWN BROWSER INPUT";
        switch (browser.toUpperCase()) {
            case "FIREFOX":
                driver = WebDriverFactory.getDriver(PrepareDrivers.prepareFirefox());
                break;
            case "CHROME":
                driver = WebDriverFactory.getDriver(PrepareDrivers.prepareChrome());
                break;
            default:
                LOG.info("MyWebDriverFactory: browser unknown. Default option - Firefox");
                driver = WebDriverFactory.getDriver(PrepareDrivers.prepareFirefox());
                break;
        }
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, SECONDS);
    }

    @AfterClass(alwaysRun = true)
    public void closeBrowser() {
        WebDriverFactory.dismissAll();
    }

}
