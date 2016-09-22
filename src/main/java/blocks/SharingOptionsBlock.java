package blocks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SharingOptionsBlock extends BaseBlock {
    private static final String FBID = "sharing_facebook_app_id";
    private static final String GRAPHTITLEID = "sharing_title";
    private static final String GRAPHSITENAMEID = "sharing_site_name";
    private static final String GRAPHURLID = "sharing_og_url";
    private static final String SHARINGEMAILSUBJECTID = "sharing_email_subject";

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
}
