package tests;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.asserts.SoftAssert;
import pages.MediaLibraryPage;
import pages.ProjectBoardPage;
import pages.SignInPage;
import pages.StudioHomePage;
import ru.stqa.selenium.factory.WebDriverFactory;
import webDriver.Browser;

import java.io.IOException;
import java.util.logging.Logger;

import static java.util.concurrent.TimeUnit.SECONDS;


public class BaseTest {
    protected Browser browser;
    protected WebDriver driver;
    protected SoftAssert softAssert;
    private SignInPage signIn;
    private StudioHomePage studioHome;
    private ProjectBoardPage projectBoard;
    private MediaLibraryPage mediaLibraryPage;
    private static final Logger LOG = Logger.getLogger("MyWebDriverFactory");

    @Parameters("browser")
    @BeforeClass(alwaysRun = true)
    public void setUp(@Optional String browserName) {
        this.browser = new Browser();
        driver = this.browser.getDriver(browserName);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30L, SECONDS);

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
