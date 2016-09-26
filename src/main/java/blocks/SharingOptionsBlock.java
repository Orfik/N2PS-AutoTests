package blocks;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class SharingOptionsBlock extends BaseBlock {
    private static final String FBID = "sharing_facebook_app_id";
    private static final String GRAPHTITLEID = "sharing_title";
    private static final String GRAPHSITENAMEID = "sharing_site_name";
    private static final String GRAPHURLID = "sharing_og_url";
    private static final String SHARINGEMAILSUBJECTID = "sharing_email_subject";
    private static final String JCROPAREA = ".jcrop-holder";

    @FindBy(id = FBID)
    private WebElement fbID;
    @FindBy(id = GRAPHTITLEID)
    private WebElement graphTitleID;
    @FindBy(id = GRAPHSITENAMEID)
    private WebElement graphSiteName;
    @FindBy(id = GRAPHURLID)
    private WebElement graphUrl;
    @FindBy(id = SHARINGEMAILSUBJECTID)
    private WebElement sharingEmailSubject;
    @FindBy(xpath = ".//div[@class='half_top uploadBlockOption uploadFromDisk']//input")
    private WebElement inputFile;
    @FindBy(xpath = ".//div[@class='filePreviewFocalWrapper']//img")
    private WebElement sharingImage;
    @FindBy(xpath = ".//*[@id='sharingImage']/div[1]/div[4]/a")
    private WebElement deleteImageIcon;
    @FindBy(xpath = "//div[@class='fileUploadBox']//div[@class='agreeButton btn']")
    private WebElement promptToDeleteImage;
    @FindBy(xpath = ".//*[@id='upload-button']/a[1]")
    private WebElement saveAreaForCroppingBtn;

    public SharingOptionsBlock(WebDriver driver) {
        super(driver);
    }

    public SharingOptionsBlock setFBId(String value) {
        setValueToElement(fbID, FBID, value);
        return this;
    }

    public SharingOptionsBlock setGraphTitle(String value) {
        setValueToElement(graphTitleID, GRAPHTITLEID, value);
        return this;
    }

    public SharingOptionsBlock setGraphSiteName(String value) {
        setValueToElement(graphSiteName, GRAPHSITENAMEID, value);
        return this;
    }

    public SharingOptionsBlock setGraphUrl(String value) {
        setValueToElement(graphUrl, GRAPHURLID, value);
        return this;
    }

    public SharingOptionsBlock setEmailSubject(String value) {
        setValueToElement(sharingEmailSubject, SHARINGEMAILSUBJECTID, value);
        return this;
    }

    public SharingOptionsBlock setGraphDescription(String value) {
        setValueToCodeMirror("0", value);
        return this;
    }

    public SharingOptionsBlock setTwitterMessage(String value) {
        setValueToCodeMirror("1", value);
        return this;
    }

    public SharingOptionsBlock setEmailBody(String value) {
        setValueToCodeMirror("2", value);
        return this;
    }

    public String getFbid() {
        return getActualValueOfElement(fbID, FBID);
    }

    public String getGraphTitle() {
        return getActualValueOfElement(graphTitleID, GRAPHTITLEID);
    }

    public String getGraphDescription() {
        return getActualValueOfCodeMirror("0");
    }

    public String getGraphSiteName() {
        return getActualValueOfElement(graphSiteName, GRAPHSITENAMEID);
    }

    public String getGraphUrl() {
        return getActualValueOfElement(graphUrl, GRAPHURLID);
    }

    public String getTwitterMessage() {
        return getActualValueOfCodeMirror("1");
    }

    public String getEmailSubject() {
        return getActualValueOfElement(sharingEmailSubject, SHARINGEMAILSUBJECTID);
    }

    public String getEmailBody() {
        return getActualValueOfCodeMirror("2");
    }

    public SharingOptionsBlock uploadSharingImage(String firstImage, String imageForChanging) {
        try {
            inputFile.sendKeys(firstImage);
        } catch (ElementNotVisibleException env) {
            Actions a = new Actions(driver);
            a.moveToElement(sharingImage)
                    .click(deleteImageIcon)
                    .click(promptToDeleteImage)
                    .perform();
            inputFile.sendKeys(imageForChanging);
        }

        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(JCROPAREA)));
        saveAreaForCroppingBtn.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.id(FBID)));
        return this;
    }
}
