package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import pages.DetailProjectPage;
import pages.ProjectBoardPage;
import pages.StudioHomePage;
import ru.yandex.qatools.allure.annotations.Features;
import ru.yandex.qatools.allure.annotations.Stories;
import ru.yandex.qatools.allure.annotations.TestCaseId;
import java.io.IOException;

@Listeners(value = AllureTestListener.class)

public class CreationProjectTest extends BaseTest {


    private DetailProjectPage detailProjectPage;
    private ProjectBoardPage projectBoardPage;
   private StudioHomePage studioHomePage;

    @BeforeMethod
    public void setUp() throws Exception {
        PageFactory.initElements(driver, this);
        projectBoardPage = new ProjectBoardPage(driver);
        detailProjectPage = new DetailProjectPage(driver);
        studioHomePage = new StudioHomePage(driver);

    }
    @TestCaseId("4")
    @Features("Creation projects")
    @Stories("Creation projects")
    @Test(priority=1, description = "creation new project", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void createFirstProject(String login, String password, String expectedUserName) throws IOException {
        auth("qa@storied.co", "zxc123");
        projectBoardPage.createNewProject();
        Assert.assertTrue(detailProjectPage.getProjectName().contains("Untitle"));

    }

    @TestCaseId("3")
    @Features("Creation projects")
    @Stories("Creation First Article")
    @Test(priority=2, description = "creation first article", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void createFirstArticle(String login, String password, String expectedUserName) throws IOException{
        auth("qa@storied.co", "zxc123");
        projectBoardPage.createNewProject();
        detailProjectPage.createFirstArticle();
        Assert.assertTrue(detailProjectPage.getArticleName().contains("Blank Layout: Untitled"));

    }
}
