package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pages.DetailProjectPage;
import pages.ProjectBoardPage;
import pages.SignInPage;
import pages.StudioHomePage;

import java.io.IOException;

public class CreationProject extends BaseTest {

    private SignInPage singIn;
    private StudioHomePage studioHome;
    private ProjectBoardPage projectBoard;
    private DetailProjectPage detailProjectPage;

    private static final String DEFAULTPROJECTNAME = "//span[@title = 'Untitled']";

    @FindBy(xpath = DEFAULTPROJECTNAME)
    private WebElement labelDefaultProjectName;

    @BeforeMethod
    public void setUp() throws Exception {
        PageFactory.initElements(driver, this);
        singIn = new SignInPage(driver);
        studioHome = new StudioHomePage(driver);
        projectBoard = new ProjectBoardPage(driver);
        detailProjectPage = new DetailProjectPage(driver);

    }

    @Test(description = "creation new project", /*groups = {"create and use this project"},*/ dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void creationProject(String login, String password, String expectedUserName) throws IOException {
        String expectedTitle = "Untitled - Pages - Storied.co";
        singIn.openSinInPage().fillSignInForm(login, password).clickSignInButton();
        studioHome.openStudioPage();
        projectBoard.createNewProject();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(DEFAULTPROJECTNAME)));
        String actualTitle = driver.getTitle();
        Assert.assertEquals(expectedTitle, actualTitle);
    }

    @Test
    public void openProjectSettingsModal() {
        detailProjectPage.openProjectSettingsHint();
        detailProjectPage.openProjectSettings();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='modal4']//div[@class='project_settings_header']")));
        Assert.assertEquals("Untitled", driver.findElement(By.xpath("//div[@id='modal4']//span[@class='project_title']")).getText());
    }
}
