package tests;

import dataproviders.DataProviderClass;
import pages.ProjectBoardPage;
import pages.SignInPage;
import pages.StudioHomePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.Assert;
import ru.yandex.qatools.allure.annotations.Description;
import ru.yandex.qatools.allure.annotations.Features;
import ru.yandex.qatools.allure.annotations.Stories;
import ru.yandex.qatools.allure.annotations.TestCaseId;


import java.io.IOException;

public class Auth extends BaseTest {

    private SignInPage singIn;
    private StudioHomePage studioHome;
    private ProjectBoardPage projectBoard;

    @FindBy(xpath = ".//div[@class='error']/p")
    private WebElement errorMessage;

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
        try {
            singIn.openSinInPage();
            singIn.fillSignInForm(login, password);
            singIn.clickSignInButton();
            String text = errorMessage.getText();
            Assert.assertEquals(text, expectedError);
        } catch (Exception e) {
            Assert.fail();
        }
    }

    @TestCaseId("2")
    @Features("Authorozation")
    @Stories("Successful authorization")
    @Description("successful authorization")
    @Test(description = "successful authorization", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void authSuccessfulAuth(String login, String password, String expectedUserName) throws IOException {
        try {
            singIn.openSinInPage();
            singIn.fillSignInForm(login, password);
            singIn.clickSignInButton();
            studioHome.openStudioPage();
            Assert.assertTrue(projectBoard.getUserName().contains(expectedUserName));
        } catch (Exception e) {
            Assert.fail();
        }
    }
}
