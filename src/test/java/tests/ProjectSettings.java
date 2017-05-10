package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;
import pages.DetailProjectPage;
import pages.ProjectBoardPage;
import pages.ProjectSettingsPage;
import ru.yandex.qatools.allure.annotations.Features;
import ru.yandex.qatools.allure.annotations.Stories;
import ru.yandex.qatools.allure.annotations.TestCaseId;

import java.io.IOException;

@Listeners(value = AllureTestListener.class)
public class ProjectSettings extends BaseTest {

    private DetailProjectPage detailProjectPage;
    private ProjectSettingsPage projectSettingsPage;
    private ProjectBoardPage projectBoardPage;

    @BeforeMethod
    public void setUp() throws Exception {
        detailProjectPage = new DetailProjectPage(driver);
        projectSettingsPage = new ProjectSettingsPage(driver);
        projectBoardPage = new ProjectBoardPage(driver);
        softAssert = new SoftAssert();
    }

    @TestCaseId("5")
    @Features("Project Settings")
    @Stories("Project Settings: Cover Image")
    @Test(priority=1, description = "Project Settings: Cover Image",dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadCoverImage(String login, String password, String expectedUserName) throws IOException, InterruptedException{
        auth("qa@storied.co", "zxc123");
        projectBoardPage.openProject();
        detailProjectPage.openProjectSettings();
        projectSettingsPage.uploadCoverImage(System.getProperty("user.dir")+"/src/test/resources/test.jpg", System.getProperty("user.dir")+"/src/test/resources/test3.jpg");
        ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='projectSettingsCoverPhoto']/div[1]/div[1]/div/div/img"));
    }
    @TestCaseId("6")
    @Features("Project Settings")
    @Stories("Project Settings: Logo Image")
    @Test(priority=3, description = "ProjectSettings:LogoImage",dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadLogoImage(String login, String password, String expectedUserName) throws IOException, InterruptedException{
        //auth("qa@storied.co", "zxc123");
        //projectBoardPage.openProject();
        //detailProjectPage.openProjectSettings();
        projectSettingsPage.uploadLogoImage(System.getProperty("user.dir")+"/src/test/resources/test.jpg");
        ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='projectSettingsLogo']/div[1]/div[1]/div/div/img"));

    }

    @TestCaseId("7")
    @Features("Project Settings")
    @Stories("Project Settings:Cover Video")
    @Test(priority=2, description = "ProjectSettings:CoverVideo",dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadVideoCover(String login, String password, String expectedUserName) throws IOException, InterruptedException {
        //auth("qa@storied.co", "zxc123");
        //projectBoardPage.openProject();
        //detailProjectPage.openProjectSettings();
        projectSettingsPage.uploadVideoCover(System.getProperty("user.dir")+"/src/test/resources/Video1.mp4");
        ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='projectSettingsCoverVideo']/div[1]/div[1]/div/div/img"));
    }

    @TestCaseId("8")
    @Features("Project Settings")
    @Stories("Project Settings: SEO")
    @Test(priority=5, dataProvider = "SEO", dataProviderClass = DataProviderClass.class)
    public void fillSeoFields(String toggle, String description, String h1, String h2, String baseUrl, String googleCode, String bingCode, String additionalHtmlHeaders) throws IOException, InterruptedException {
        projectSettingsPage.openSeoTab();
        //projectSettingsPage.saveChanges();
        Thread.sleep(2000);
        projectSettingsPage.turnToggle(toggle).setSeoValues(description, h1, h2, baseUrl, googleCode, bingCode, additionalHtmlHeaders);
        Thread.sleep(2000);
        projectSettingsPage.saveSeo();
        String actualTogglePosition = projectSettingsPage.getTogglePosition();
        String actualDescription = projectSettingsPage.getDesctiption();
        String actualH1 = projectSettingsPage.getH1();
        String actualH2 = projectSettingsPage.getH2();
        String actualBaseUrl = projectSettingsPage.getBaseUrl();
        String actualGoogleCode = projectSettingsPage.getGoogleCode();
        String actualBingCode = projectSettingsPage.getBingCode();
        softAssert.assertEquals(actualTogglePosition, toggle, "toggle position isn't changed");
        softAssert.assertEquals(actualDescription, description, "descriptions don't math");
        softAssert.assertEquals(actualH1, h1, "H1s don't math");
        softAssert.assertEquals(actualH2, h2, "H2s don't math");
        softAssert.assertEquals(actualBaseUrl, baseUrl, "urls don't match");
        softAssert.assertEquals(actualGoogleCode, googleCode, "GoogleCode don't math");
        softAssert.assertEquals(actualBingCode, bingCode, "BingCode don't math");
        softAssert.assertEquals(projectSettingsPage.getAdditionalHtmlHeaders(), additionalHtmlHeaders, "additional html headers don't match");
        softAssert.assertAll();

        //Need to add click on save button
    }

    @TestCaseId("9")
    @Features("Project Settings")
    @Stories("Project Settings: Sharing Options")
    @Test(priority=9, dataProvider = "Sharing Options", dataProviderClass = DataProviderClass.class)
    public void fillSharingOptionsFields(String fbId, String graphTitle, String graphDescription, String graphSiteName, String graphUrl, String twitterMessage, String emailSubject, String emailBody) throws IOException, InterruptedException {
        //auth("qa@storied.co", "zxc123");
        //projectBoardPage.openProject();
        //detailProjectPage.openProjectSettings();
        projectSettingsPage.openSharingOptionsTab();
        Thread.sleep(300);
        projectSettingsPage.uploadSharingImage(System.getProperty("user.dir") + "/src/test/resources/test.jpg", System.getProperty("user.dir") + "/src/test/resources/test3.jpg")
                .setSharingOptions(fbId, graphTitle, graphDescription, graphSiteName, graphUrl, twitterMessage, emailSubject, emailBody);
        Thread.sleep(2000);
        projectSettingsPage.saveSharingOptions();
        softAssert.assertEquals(projectSettingsPage.getFbId(), fbId);
        softAssert.assertEquals(projectSettingsPage.getGraphTitle(), graphTitle);
        softAssert.assertEquals(projectSettingsPage.getGraphDescription(), graphDescription);
        softAssert.assertEquals(projectSettingsPage.getGraphSiteName(), graphSiteName);
        softAssert.assertEquals(projectSettingsPage.getGraphUrl(), graphSiteName);
        softAssert.assertEquals(projectSettingsPage.getTwitterMessage(), twitterMessage);
        softAssert.assertEquals(projectSettingsPage.getEmailSubject(), emailSubject);
        softAssert.assertEquals(projectSettingsPage.getEmailBody(), emailBody);
        softAssert.assertAll();

        //Need to add click on save button
    }
}
