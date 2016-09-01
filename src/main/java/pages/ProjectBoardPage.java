package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ProjectBoardPage extends BasePage {

    private WebDriver driver;

    @FindBy(xpath = ".//span[@class='userName']")
    private WebElement userName;

    @FindBy(xpath = "//a[@href = '#choosedesign_popup']")
    private WebElement linkNewProject;

    public ProjectBoardPage(WebDriver driver) {
        super(driver);
    }

    public String getUserName() {
        return userName.getText();
    }

    public DetailProjectPage createNewProject() {
        linkNewProject.click();
        return new DetailProjectPage(driver);
    }
}
