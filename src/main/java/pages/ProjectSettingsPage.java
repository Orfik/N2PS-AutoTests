package pages;

import blocks.SeoBlock;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ru.yandex.qatools.allure.annotations.Step;

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

    @Step
    public ProjectSettingsPage openSeoTab() {
        seoLink.click();
        fluentWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(".//*[@id='seo_crawl_id']")));
        return this;
    }

    @Step
    public ProjectSettingsPage turnToggle(String value) {
        seoBlock.turnToggle(value);
        return this;
    }

    @Step
    public ProjectSettingsPage setSeoValues(String description, String h1, String h2, String baseUrl, String googleCode, String bingCode) {
        seoBlock.setDescription(description).setH1(h1).setH2(h2).setBaseUrl(baseUrl).setSeoGoogleCode(googleCode).setSeoBingCode(bingCode);
        return this;
    }

    @Step
    public ProjectSettingsPage saveSeo() {
        seoBlock.clickSave();
        return this;
    }

    public String getTogglePosition() {
        return seoBlock.getTogglePosition();
    }

    public String getDesctiption() {
        return seoBlock.getDescription();
    }

    public String getH1() {
        return seoBlock.getH1();
    }

    public String getH2() {
        return seoBlock.getH2();
    }

    public String getBaseUrl() {
        return seoBlock.getBaseUrl();
    }

    public String getGoogleCode() {
        return seoBlock.getSeoGoogleCode();
    }

    public String getBingCode() {
        return seoBlock.getBingGoogleCode();
    }
}