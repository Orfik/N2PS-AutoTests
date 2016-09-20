package tests;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import pages.ProjectBoardPage;
import pages.SignInPage;
import pages.StudioHomePage;
import ru.stqa.selenium.factory.WebDriverFactory;
import ru.stqa.selenium.factory.WebDriverFactoryMode;
import webDriver.PrepareDrivers;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import static java.util.concurrent.TimeUnit.SECONDS;


public class BaseTest {
    protected WebDriver driver;
    protected Wait fluentWait;
    private PrepareDrivers prepareDrivers;
    private SignInPage signIn;
    private StudioHomePage studioHome;
    private ProjectBoardPage projectBoard;
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

    public void auth(String login, String password) throws IOException {
        signIn = new SignInPage(driver);
        studioHome = new StudioHomePage(driver);
        projectBoard = new ProjectBoardPage(driver);
        signIn.openSinInPage().fillSignInForm(login, password).clickSignInButton();
        studioHome.openStudioPage();
    }

}
