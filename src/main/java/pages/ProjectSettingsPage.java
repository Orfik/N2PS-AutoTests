package pages;

import blocks.SeoBlock;
import blocks.SharingOptionsBlock;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ru.yandex.qatools.allure.annotations.Step;

import java.io.IOException;

public class ProjectSettingsPage extends BasePage {

    private SeoBlock seoBlock;
    private SharingOptionsBlock sharingOptionsBlock;

    private static final String SETTINGHEADRELOCATOR = "//span[@title = 'Untitled']";
    private static final String SHARINGOPTIONSLINKXPATH = ".//*[text()='Sharing options']";

    @FindBy(xpath = SETTINGHEADRELOCATOR)
    private WebElement settingsHeader;
    @FindBy(xpath = "//*[text()='SEO']")
    private WebElement seoLink;
    @FindBy(xpath = SHARINGOPTIONSLINKXPATH)
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
    @FindBy(id = "article-save-popup-save")
    private WebElement saveBtnOfBasePrompt;


    public ProjectSettingsPage(WebDriver driver) {
        super(driver);
        seoBlock = PageFactory.initElements(driver, SeoBlock.class);
        sharingOptionsBlock = PageFactory.initElements(driver, SharingOptionsBlock.class);
    }

    public static String getSettingsHeaderLocator() {
        return SETTINGHEADRELOCATOR;
    }

    public ProjectSettingsPage saveAllChangesInPrompt() {
        saveBtnOfBasePrompt.click();
        return this;
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
    public ProjectSettingsPage setSeoValues(String description, String h1, String h2, String baseUrl, String googleCode, String bingCode, String additionalHtmlHeaders) {
        seoBlock
                .setDescription(description)
                .setH1(h1)
                .setH2(h2)
                .setBaseUrl(baseUrl)
                .setSeoGoogleCode(googleCode)
                .setSeoBingCode(bingCode)
                .setAdditionalHtmlHeaders(additionalHtmlHeaders);
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

    public String getAdditionalHtmlHeaders() { return  seoBlock.getAdditionalHtmlHeaders(); }

    @Step
    public ProjectSettingsPage openSharingOptionsTab() throws IOException, InterruptedException {
        try {
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("document.querySelectorAll('#properties>li>a')[0].scrollIntoView(true)");
            js.executeScript("document.querySelectorAll('#properties>li>a')[2].click()");
            driver.findElement(By.id("sharing_facebook_app_id"));
        }
        catch (WebDriverException e) {
            saveAllChangesInPrompt();
        }
        Thread.sleep(2000);
        return this;
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

    @Step
    public ProjectSettingsPage setSharingOptions(String fbId, String graphTitle, String graphDescription, String graphSiteName, String graphUrl, String twitterMessage, String emailSubject, String emailBody) {
        sharingOptionsBlock
                .setFBId(fbId)
                .setGraphTitle(graphTitle)
                .setGraphDescription(graphDescription)
                .setGraphSiteName(graphSiteName)
                .setGraphUrl(graphUrl)
                .setTwitterMessage(twitterMessage)
                .setEmailSubject(emailSubject)
                .setEmailBody(emailBody);
        return this;
    }

    @Step
    public ProjectSettingsPage saveSharingOptions() {
        sharingOptionsBlock.clickSave();
        return this;
    }

    public String getFbId() {
        return sharingOptionsBlock.getFbid();
    }


    public String getGraphTitle() {
        return sharingOptionsBlock.getGraphTitle();
    }

    public String getGraphDescription() {
        return sharingOptionsBlock.getGraphDescription();
    }

    public String getGraphSiteName() {
        return sharingOptionsBlock.getGraphSiteName();
    }

    public String getGraphUrl() {
        return sharingOptionsBlock.getGraphUrl();
    }

    public String getTwitterMessage() {
        return sharingOptionsBlock.getTwitterMessage();
    }

    public String getEmailSubject() {
        return sharingOptionsBlock.getEmailSubject();
    }

    public String getEmailBody() {
        return sharingOptionsBlock.getEmailBody();
    }

    @Step
    public ProjectSettingsPage uploadSharingImage(String firstImage, String imageForChanging) {
        sharingOptionsBlock.uploadSharingImage(firstImage, imageForChanging);
        return this;
    }
}