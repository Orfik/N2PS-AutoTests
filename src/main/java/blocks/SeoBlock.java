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

    public SeoBlock(WebDriver driver) {
        super(driver);
    }

    public SeoBlock setDescription(String value) {
        js.executeScript("$('.CodeMirror')[0].CodeMirror.setValue('" + value + "')");
        return this;
    }

    public SeoBlock setH1(String value) {
        js.executeScript("$('.CodeMirror')[1].CodeMirror.setValue('" + value + "')");
        return this;
    }

    public SeoBlock setH2(String value) {
        js.executeScript("$('.CodeMirror')[2].CodeMirror.setValue('" + value + "')");
        return this;
    }

    public SeoBlock setBaseUrl(String value) {
        js.executeScript("document.getElementById('" + IDBASEURL + "').scrollIntoView(true)");
        baseUrl.clear();
        baseUrl.sendKeys(value);
        return this;
    }

    public SeoBlock setSeoGoogleCode(String value) {
        js.executeScript("document.getElementById('" + IDGOOGLECODE + "').scrollIntoView(true)");
        seoGoogleCode.clear();
        seoGoogleCode.sendKeys(value);
        return this;
    }

    public SeoBlock setSeoBingCode(String value) {
        js.executeScript("document.getElementById('" + IDBINGCODE + "').scrollIntoView(true)");
        seoBingCode.clear();
        seoBingCode.sendKeys(value);
        return this;
    }

    public SeoBlock clickSave() {
        js.executeScript("document.getElementById('" + IDSAVEBTN + "').scrollIntoView(true)");
        saveButton.click();
        return this;
    }
}
