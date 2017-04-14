package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import pages.DetailProjectPage;
import pages.ProjectBoardPage;
import pages.ProjectPublishPage;
import ru.yandex.qatools.allure.annotations.Description;
import ru.yandex.qatools.allure.annotations.Features;
import ru.yandex.qatools.allure.annotations.Stories;
import ru.yandex.qatools.allure.annotations.TestCaseId;

import java.io.IOException;

@Listeners(value = AllureTestListener.class)

public class PublishProject extends BaseTest {
    private DetailProjectPage detailProjectPage;
    private ProjectBoardPage projectBoardPage;
    private ProjectPublishPage projectPublishPage;

    @BeforeMethod
    public void setUp7() throws Exception {
        PageFactory.initElements(driver, this);
        projectBoardPage = new ProjectBoardPage(driver);
        projectPublishPage = new ProjectPublishPage(driver);
        detailProjectPage = new DetailProjectPage(driver);
    }
    @TestCaseId("22")
    @Features("Upload Cover Image")
    @Stories("Upload Cover Image")
    @Test(description = "Upload Cover image", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadProjectCoverImage (String login, String password, String expectedUserName) throws IOException, InterruptedException {
        auth(login, password);
        projectBoardPage.createNewProject();
        detailProjectPage.createFirstArticle();
        detailProjectPage.openProjectPublish();
        projectPublishPage.uploadProjectCoverImage(System.getProperty("user.dir") + "\\src\\test\\resources\\test.jpg", System.getProperty("user.dir") + "\\src\\test\\resources\\test3.jpg");
}

    @TestCaseId("23")
    @Features("Upload Cover Video")
    @Stories("Upload Cover Video")
    @Test(description = "upload cover video", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadProjectCoverVideo (String login, String password,String expectedUserName) throws IOException, InterruptedException {
        //auth(login, password);
        //projectBoardPage.createNewProject();
        //detailProjectPage.createFirstArticle();
        //detailProjectPage.openProjectPublish();
        projectPublishPage.selectVideoCover();
        projectPublishPage.uploadProjectCoverVideo(System.getProperty("user.dir") + "\\src\\test\\resources\\Video1.mp4");

    }
}

