package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage {

    private WebDriver driver;
    public static final String URL_HOME = "https://stage.storied.co/auth/login";

    @FindBy(id= "login")
    private WebElement email;
    @FindBy(id="password")
    private WebElement password;
    @FindBy(xpath= ".//button[text()='Sign in']")
    private WebElement signInButton;

    public SignInPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public SignInPage openSinInPage() {
        driver.get(URL_HOME);
        return this;
    }

    public SignInPage fillSignInForm(String userEmail, String userPassword) {
        email.clear();
        email.sendKeys(userEmail);
        password.clear();
        password.sendKeys(userPassword);
        return this;
    }

    public StudioHomePage clickSignInButton () {
        signInButton.click();
        return new StudioHomePage(driver);
    }
}
