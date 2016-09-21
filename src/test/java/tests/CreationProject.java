package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import pages.DetailProjectPage;
import pages.ProjectBoardPage;
import ru.yandex.qatools.allure.annotations.Features;
import ru.yandex.qatools.allure.annotations.Stories;
import ru.yandex.qatools.allure.annotations.TestCaseId;

import java.io.IOException;
@Listeners(value = AllureTestListener.class)
public class CreationProject extends BaseTest {

    private ProjectBoardPage projectBoard;
    private DetailProjectPage detailProjectPage;


    @BeforeMethod
    public void setUp() throws Exception {
        PageFactory.initElements(driver, this);
        projectBoard = new ProjectBoardPage(driver);
        detailProjectPage = new DetailProjectPage(driver);
    }
    @TestCaseId("3")
    @Features("Creation projects")
    @Stories("Creation projects")
    @Test(description = "creation new project", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void creationProject(String login, String password, String expectedUserName) throws IOException {
        String expectedTitle = "Untitled - Pages - Storied.co";
        auth(login, password);
        projectBoard.createNewProject();
        detailProjectPage.createFirstArticle();
        String actualTitle = driver.getTitle();
        Assert.assertEquals(expectedTitle, actualTitle);
    }
}
