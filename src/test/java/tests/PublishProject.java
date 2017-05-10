package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
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
    public void setUp() throws Exception {
        PageFactory.initElements(driver, this);
        projectBoardPage = new ProjectBoardPage(driver);
        projectPublishPage = new ProjectPublishPage(driver);
        detailProjectPage = new DetailProjectPage(driver);
    }
    @TestCaseId("17")
    @Features("Upload Cover Image")
    @Stories("Upload Cover Image")
    @Test(priority=1, description = "Upload Cover image", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadProjectCoverImage (String login, String password, String expectedUserName) throws IOException, InterruptedException {
        auth(login, password);
        projectBoardPage.createNewProject();
        detailProjectPage.createFirstArticle();
        detailProjectPage.openProjectPublish();
        projectPublishPage.uploadProjectCoverImage(System.getProperty("user.dir") + "/src/test/resources/test.jpg", System.getProperty("user.dir") + "\\src\\test\\resources\\test3.jpg");
        ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='projectPublishCoverPhoto']/div[1]/div[1]/div/div/img"));
}

    @TestCaseId("18")
    @Features("Upload Logo Image")
    @Stories("Upload Logo Image")
    @Test(priority=2, description = "Upload Logo Image", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadLogoImage (String login, String password,String expectedUserName) throws IOException, InterruptedException{
        projectPublishPage.uploadProjectLogo(System.getProperty("user.dir")+"/src/test/resources/test.jpg");
        ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='projectPublishLogo']/div[1]/div[1]/div/div/img"));
        }



    @TestCaseId("19")
    @Features("Upload Cover Video")
    @Stories("Upload Cover Video")
    @Test(priority=3, description = "upload cover video", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadProjectCoverVideo (String login, String password,String expectedUserName) throws IOException, InterruptedException {
        projectPublishPage.selectVideoCover();
        projectPublishPage.uploadProjectCoverVideo(System.getProperty("user.dir") + "/src/test/resources/Video1.mp4");
    }

    @TestCaseId("20")
    @Features("Change Project Title")
    @Stories("Change Project Title")
    @Test(priority =4,description = "Change Project Title", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void changeProjectTitle(String login, String password,String expectedUserName) throws IOException, InterruptedException {
        auth("qa@storied.co", "zxc123");
        projectBoardPage.openProject();
        detailProjectPage.openProjectPublish();
        projectPublishPage.changeProjectTitle();
        ExpectedConditions.textToBePresentInElementValue(By.xpath("/html/body/section/section/section/div[2]/span"), "Test1");
    }

}

