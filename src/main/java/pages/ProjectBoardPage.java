package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProjectBoardPage {

    private WebDriver driver;

    @FindBy(xpath = ".//span[@class='userName']")
    private WebElement userName;

    public ProjectBoardPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public String getUserName () {
        return userName.getText();
    }
}
