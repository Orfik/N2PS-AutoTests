package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DetailProjectPage extends BasePage {

    private static final String DEFAULTPROJECTNAME = "//span[@title = 'Untitled']";

    private ProjectSettingsPage projectSettingsPage;
    @FindBy(xpath = "//div[@class='settings']/a")
    private WebElement projectSettingsIcon;
    @FindBy(xpath = "//a[@id='project_settings_link']")
    private WebElement projectSettingsLink;
    @FindBy(xpath = DEFAULTPROJECTNAME)
    private WebElement labelDefaultProjectName;

    public DetailProjectPage(WebDriver driver) {
        super(driver);
        projectSettingsPage = PageFactory.initElements(driver, ProjectSettingsPage.class);
    }

    public DetailProjectPage openProjectSettingsHint() {
        projectSettingsIcon.click();
        return this;
    }

    public ProjectSettingsPage openProjectSettings() {
        projectSettingsLink.click();
        return new ProjectSettingsPage(driver);
    }

    public static String getDEFAULTPROJECTNAME() {
        return DEFAULTPROJECTNAME;
    }
}
