package com.tests;

import com.datadrivers.DataProviderClass;
import com.pages.SignInPage;
import com.pages.StudioHome;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.Assert;
import java.io.IOException;

public class Auth extends BaseTestClass{

    private SignInPage singIn;
    private StudioHome studioHome;

    @BeforeMethod
    public void setUp() throws Exception {
        singIn = new SignInPage(driver);
        studioHome = new StudioHome(driver);
    }


    @Test (description = "incorrect login", dataProvider = "usersCredentialsAndExpectedErrors", dataProviderClass = DataProviderClass.class)
    public void authInvalid(String login, String password, String expectedError) throws IOException {
        try {
            singIn.openSinInPage();
            singIn.fillSignInForm(login, password);
            singIn.assertErrorMessage(expectedError);
        }
        catch (Exception e) {
            Assert.fail();
        }
    }


    @Test (description = "successful authorization")
    public void authSuccessfulAuth() throws IOException {
        try {
            singIn.openSinInPage();
            singIn.fillSignInForm("qa@storied.co", "zxc123");
            studioHome.goToStudio("Ellina_admin Frolova");
        }
        catch (Exception e) {
            Assert.fail();
        }
    }
}
