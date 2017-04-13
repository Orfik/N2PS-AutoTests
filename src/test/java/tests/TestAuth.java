package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import pages.ProjectBoardPage;
import pages.SignInPage;
import pages.StudioHomePage;
import ru.yandex.qatools.allure.annotations.Description;
import ru.yandex.qatools.allure.annotations.Features;
import ru.yandex.qatools.allure.annotations.Stories;
import ru.yandex.qatools.allure.annotations.TestCaseId;

import java.io.IOException;

@Listeners(value = AllureTestListener.class)

public class TestAuth extends TestBaseTest {

    private SignInPage singIn;
    private StudioHomePage studioHome;
    private ProjectBoardPage projectBoard;

    @BeforeMethod
    public void setUp() throws Exception {
        PageFactory.initElements(driver, this);
        singIn = new SignInPage(driver);
        studioHome = new StudioHomePage(driver);
        projectBoard = new ProjectBoardPage(driver);
    }

    @TestCaseId("1")
    @Features("Authorozation")
    @Stories("Incorrect login")
    @Test(description = "incorrect login", dataProvider = "usersCredentialsAndExpectedErrors", dataProviderClass = DataProviderClass.class)
    public void authInvalid(String login, String password, String expectedError) throws IOException {
        singIn.openSinInPage().fillSignInForm(login, password).clickSignInButton();
        String actualError = singIn.getErrorMessage();
        Assert.assertEquals(actualError, expectedError);
    }

    @TestCaseId("2")
    @Features("Authorozation")
    @Stories("Successful authorization")
    @Description("successful authorization")
    @Test(description = "successful authorization", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void authSuccessfulAuth(String login, String password, String expectedUserName) throws IOException {
        auth(login, password);
        Assert.assertTrue(projectBoard.getUserName().contains(expectedUserName));
    }
}
