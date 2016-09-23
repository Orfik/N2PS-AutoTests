package blocks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SeoBlock extends BaseBlock {

    private static final String IDBASEURL = "base";
    private static final String IDGOOGLECODE = "seo_googlecode";
    private static final String IDBINGCODE = "seo_bingcode";

    @FindBy(id = IDBASEURL)
    private WebElement baseUrl;
    @FindBy(id = IDGOOGLECODE)
    private WebElement seoGoogleCode;
    @FindBy(id = IDBINGCODE)
    private WebElement seoBingCode;
    @FindBy(id = "seo_crawl_id")
    private WebElement toggle;

    public SeoBlock(WebDriver driver) {
        super(driver);
    }

    public String getTogglePosition() {
        return toggle.getAttribute("class").replace("itoggle iT", "");
    }

    public SeoBlock turnToggle(String value) {
        String actualPositionOfToogle = getTogglePosition();
        if (actualPositionOfToogle != value)
            toggle.click();
        return this;
    }

    public SeoBlock setDescription(String value) {
        setValueToCodeMirror("0", value);
        return this;
    }

    public SeoBlock setH1(String value) {
        setValueToCodeMirror("1", value);
        return this;
    }

    public SeoBlock setH2(String value) {
        setValueToCodeMirror("2", value);
        return this;
    }

    public SeoBlock setAdditionalHtmlHeaders(String value) {
        setValueToCodeMirror("3", value);
        return this;
    }

    public SeoBlock setBaseUrl(String value) {
        setValueToElement(baseUrl, IDBASEURL, value);
        return this;
    }

    public SeoBlock setSeoGoogleCode(String value) {
        setValueToElement(seoGoogleCode, IDGOOGLECODE, value);
        return this;
    }

    public SeoBlock setSeoBingCode(String value) {
        setValueToElement(seoBingCode, IDBINGCODE, value);
        return this;
    }

    public String getDescription() {
        return getActualValueOfCodeMirror("0");
    }

    public String getH1() {
        return getActualValueOfCodeMirror("1");
    }

    public String getH2() {
        return getActualValueOfCodeMirror("2");
    }

    public String getAdditionalHtmlHeaders() { return getActualValueOfCodeMirror("3"); }

    public String getBaseUrl() {
        return getActualValueOfElement(baseUrl, IDBASEURL);
    }

    public String getSeoGoogleCode() {
        return getActualValueOfElement(seoGoogleCode, IDGOOGLECODE);
    }

    public String getBingGoogleCode() {
        return getActualValueOfElement(seoBingCode, IDBINGCODE);
    }
}
