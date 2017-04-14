package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.support.PageFactory;
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
public class DeletionProject extends BaseTest {

    private DetailProjectPage detailProjectPage;
    private ProjectBoardPage projectBoardPage;


    @BeforeMethod
    public void setUp4() throws Exception {
        PageFactory.initElements(driver, this);
        detailProjectPage = new DetailProjectPage(driver);
        projectBoardPage = new ProjectBoardPage(driver);
    }

    @TestCaseId("20")
    @Features("Deletion Project")
    @Stories("Deletion Project")
    @Test(description = "Deletion project", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void createProject(String login, String password, String expectedUserName) throws IOException {
        auth("qa@storied.co", "zxc123");
        projectBoardPage.deleteProject();

}
}