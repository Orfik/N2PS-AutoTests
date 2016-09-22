package tests;

import dataproviders.DataProviderClass;
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

    @Test(dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void auth(String email, String password, String userName) throws IOException {
        auth(email, password);
    }

    @TestCaseId("4")
    @Features("Project Settings: SEO")
    @Stories("Project Settings: SEO")
    @Test(dataProvider = "SEO", dataProviderClass = DataProviderClass.class)
    public void fillSeoFields(String toggle, String description, String h1, String h2, String baseUrl, String googleCode, String bingCode) throws IOException, InterruptedException {
        projectBoardPage.openProject();
        detailProjectPage.openProjectSettings();
        projectSettingsPage.openSeoTab();
        Thread.sleep(2000);
        projectSettingsPage.turnToggle(toggle).setSeoValues(description, h1, h2, baseUrl, googleCode, bingCode).saveSeo();
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
        softAssert.assertAll();
    }

    @TestCaseId("5")
    @Features("Project Settings: Sharing Options")
    @Stories("Project Settings: Sharing Options")
    @Test(dataProvider = "Sharing Options", dataProviderClass = DataProviderClass.class)
    public void fillSharingOptionsFields(String fbId, String graphTitle, String graphDescription, String graphSiteName, String graphUrl, String twitterMessage, String emailSubject, String emailBody) throws IOException, InterruptedException {
        projectBoardPage.openProject();
        detailProjectPage.openProjectSettings();
        projectSettingsPage.openSharingOptionsTab();
        Thread.sleep(2000);
        projectSettingsPage.setSharingOptions(fbId, graphTitle, graphDescription, graphSiteName, graphUrl, twitterMessage, emailSubject, emailBody);
        projectSettingsPage.saveSharingOptions();
    }


}
