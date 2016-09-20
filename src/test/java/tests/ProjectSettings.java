package tests;

import dataproviders.DataProviderClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pages.DetailProjectPage;
import pages.ProjectBoardPage;
import pages.ProjectSettingsPage;

import java.io.IOException;

public class ProjectSettings extends BaseTest {

    private DetailProjectPage detailProjectPage;
    private ProjectSettingsPage projectSettingsPage;
    private ProjectBoardPage projectBoardPage;

    @BeforeMethod
    public void setUp() throws Exception {
        detailProjectPage = new DetailProjectPage(driver);
        projectSettingsPage = new ProjectSettingsPage(driver);
        projectBoardPage = new ProjectBoardPage(driver);
    }

    @Test(dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void auth(String email, String password, String userName) throws IOException {
        auth(email, password);
    }

    @Test(dataProvider = "SEO", dataProviderClass = DataProviderClass.class)
    public void openProjectSettingsPage(String description, String h1, String h2, String baseUrl, String googleCode, String bingCode) throws IOException, InterruptedException {
        projectBoardPage.openProject();
        detailProjectPage.openProjectSettings();
        projectSettingsPage.openSeoTab();
        Thread.sleep(2000);
        projectSettingsPage.setSeoValues(description, h1, h2, baseUrl, googleCode, bingCode);
        projectSettingsPage.saveSeo();
    }
}
