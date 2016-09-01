package pages;

import blocks.ProjectSettingsBlock;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DetailProjectPage extends BasePage {

    private ProjectSettingsBlock projectSettingsBlock;
    @FindBy(xpath = "//div[@class='settings']/a")
    private WebElement projectSettingsIcon;
    @FindBy(xpath = "//a[@id='project_settings_link']")
    private WebElement projectSettingsLink;

    public DetailProjectPage(WebDriver driver) {
        super(driver);
        projectSettingsBlock = PageFactory.initElements(driver, ProjectSettingsBlock.class);
    }

    public DetailProjectPage openProjectSettingsHint() {
        projectSettingsIcon.click();
        return this;
    }

    public ProjectSettingsBlock openProjectSettings() {
        projectSettingsLink.click();
        return new ProjectSettingsBlock();
    }
}
