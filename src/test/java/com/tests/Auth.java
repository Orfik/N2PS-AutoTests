package com.tests;

import com.dataproviders.DataProviderClass;
import com.pages.ProjectBoardPage;
import com.pages.SignInPage;
import com.pages.StudioHomePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.Assert;


import java.io.IOException;

public class Auth extends BaseTestClass {

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
