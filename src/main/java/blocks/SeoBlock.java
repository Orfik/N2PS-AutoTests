package blocks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SeoBlock extends BaseBlock {

    private static final String IDBASEURL = "base";
    private static final String IDGOOGLECODE = "seo_googlecode";
    private static final String IDBINGCODE = "seo_bingcode";
    private static final String IDSAVEBTN = "save-changes-url";

    @FindBy(id = IDBASEURL)
    private WebElement baseUrl;
    @FindBy(id = IDGOOGLECODE)
    private WebElement seoGoogleCode;
    @FindBy(id = IDBINGCODE)
    private WebElement seoBingCode;
    @FindBy(id = IDSAVEBTN)
    private WebElement saveButton;
    @FindBy(id = "seo_crawl_id")
    private WebElement toggle;

    public SeoBlock(WebDriver driver) {
        super(driver);
    }

    private void scrollToElement(String idOfElement) {
        js.executeScript("document.getElementById('" + idOfElement + "').scrollIntoView(true)");
    }

    private void setValueToCodeMirror(String indexOfElement, String value) {
        js.executeScript("$('.CodeMirror')[" + indexOfElement + "].CodeMirror.setValue('" + value + "')");
    }

    private void setValueToElement(WebElement element, String idOfElement, String value) {
        scrollToElement(idOfElement);
        element.clear();
        element.sendKeys(value);
    }

    private String getActualValueOfCodeMirror(String indexOfElement) {
        return js.executeScript("return description = $('.CodeMirror')[" + indexOfElement + "].CodeMirror.getValue()").toString();
    }

    private String getActualValueOfElement(WebElement element, String idOfElement) {
        scrollToElement(idOfElement);
        return element.getAttribute("value");
    }

    public String getTogglePosition() {
        return toggle.getAttribute("class").replace("itoggle iT", "");
    }

    public SeoBlock turnToggle(String value) {
        String actualPositionOfToogle = getTogglePosition();
        if (value != actualPositionOfToogle)
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

    public SeoBlock clickSave() {
        scrollToElement(IDSAVEBTN);
        saveButton.click();
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
