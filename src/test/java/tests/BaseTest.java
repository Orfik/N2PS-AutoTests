package tests;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import ru.stqa.selenium.factory.WebDriverFactory;
import ru.stqa.selenium.factory.WebDriverFactoryMode;
import webDriver.PrepareDrivers;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import static java.util.concurrent.TimeUnit.SECONDS;


public class BaseTest {
    protected WebDriver driver;
    protected Wait fluentWait;
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

        fluentWait = new FluentWait(driver)
                .withTimeout(30, TimeUnit.SECONDS)
                .pollingEvery(2, TimeUnit.SECONDS)
                .ignoring(NoSuchElementException.class);
    }

    @AfterClass(alwaysRun = true)
    public void closeBrowser() {
        WebDriverFactory.dismissAll();
    }

}
