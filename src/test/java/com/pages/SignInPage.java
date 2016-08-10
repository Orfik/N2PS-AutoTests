package com.pages;

import com.map.UIMap;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

/**
 * Created by USER on 10.08.2016.
 */
public class SignInPage {


    private WebDriver driver;

    public SignInPage(WebDriver driver) {

        this.driver = driver;
    }

    public void openSinInPage() {
        driver.get(UIMap.URL_HOME);
    }

    public void fillSignInForm(String email, String password) {
        WebElement emailElement = driver.findElement(By.id(UIMap.HOME_EMAIL_ID));
        emailElement.clear();
        emailElement.sendKeys(email);
        WebElement passwordElement = driver.findElement(By.id(UIMap.HOME_PASSWORD_ID));
        passwordElement.clear();
        passwordElement.sendKeys(password);
        driver.findElement(By.xpath(UIMap.HOME_SIGNIN_XPath)).click();
    }

    public void assertErrorMessage(String expectedResult) {
        String text = driver.findElement(By.xpath(UIMap.HOME_ERROR_MESSAGE_XPath)).getText();
        Assert.assertEquals(text, expectedResult);
    }
}
