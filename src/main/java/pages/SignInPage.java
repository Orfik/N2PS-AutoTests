package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ru.yandex.qatools.allure.annotations.Step;

import java.io.IOException;
import java.util.List;

import static java.lang.Thread.sleep;
import static org.openqa.selenium.By.cssSelector;

public class SignInPage extends BasePage {

    private static final String URL_HOME = "https://stage.storied.co/auth/login";

    @FindBy(id = "login")
    private WebElement email;
    @FindBy(id = "password")
    private WebElement password;
    @FindBy(xpath = ".//button[text()='Sign in']")
    private WebElement signInButton;
    @FindBy(xpath = ".//div[@class='error']/p")
    private WebElement errorMessage;


    public SignInPage(WebDriver driver) {
        super(driver);
    }

    @Step
    public SignInPage openSinInPage() {
        driver.get(URL_HOME);
        return this;
    }

    @Step
    public SignInPage fillSignInForm(String userEmail, String userPassword) {
        email.clear();
        email.sendKeys(userEmail);
        password.clear();
        password.sendKeys(userPassword);
        return this;
    }

    @Step
    public StudioHomePage clickSignInButton()  {
        signInButton.click();
        return new StudioHomePage(driver);
    }

    public String getErrorMessage() {
        return errorMessage.getText();
    }
}
