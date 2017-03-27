package tests;

import dataproviders.DataProviderClass;
import org.eclipse.jetty.util.IO;
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

    //private ProjectBoardPage projectBoard;
    private DetailProjectPage detailProjectPage;
    private ProjectBoardPage projectBoardPage;

    @BeforeMethod
    public void setUp() throws Exception {
        PageFactory.initElements(driver, this);
        //projectBoard = new ProjectBoardPage(driver);
        detailProjectPage = new DetailProjectPage(driver);
        projectBoardPage = new ProjectBoardPage(driver);
    }
    @TestCaseId("3")
    @Features("Creation projects")
    @Stories("Creation projects")
    @Test(description = "creation new project", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void createProject(String login, String password, String expectedUserName) throws IOException {
        auth("qa@storied.co", "zxc123");
        projectBoardPage.createNewProject();
        String expectedTitle = "Untitled - Pages - Storied.co";

    }
    @TestCaseId("4")
    @Features("CreationFirstArticle")
    @Stories("CreationFirstArticle")
    @Test(description = "creation first article", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void createFirstArticle(String login, String password, String expectedUserName) throws IOException{
        auth("qa@storied.co", "zxc123");
        projectBoardPage.createNewProject();
        detailProjectPage.createFirstArticle();



    }
}
