package pages;

import blocks.SeoBlock;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProjectSettingsPage extends BasePage {

    private SeoBlock seoBlock;

    private static final String SETTINGHEADRELOCATOR = "//span[@title = 'Untitled']";

    @FindBy(xpath = SETTINGHEADRELOCATOR)
    private WebElement settingsHeader;
    @FindBy(xpath = "//*[text()='SEO']")
    private WebElement seoLink;
    @FindBy(xpath = ".//*[text()='Sharing options']")
    private WebElement sharingOptionLink;
    @FindBy(xpath = ".//*[text()='Typography']")
    private WebElement typographyLink;
    @FindBy(xpath = ".//*[text()='Analytics']")
    private WebElement analyticsLink;
    @FindBy(xpath = ".//*[text()='CSS']")
    private WebElement cssLink;
    @FindBy(xpath = ".//*[text()='JavaScript']")
    private WebElement javascriptLink;
    @FindBy(xpath = ".//*[text()='Custom configuration']")
    private WebElement customConfigurationLink;


    public ProjectSettingsPage(WebDriver driver) {
        super(driver);
        seoBlock = PageFactory.initElements(driver, SeoBlock.class);
    }

    public static String getSettingsHeaderLocator() {
        return SETTINGHEADRELOCATOR;
    }

    public SeoBlock openSeoTab() {
        seoLink.click();
        return new SeoBlock();
    }
}