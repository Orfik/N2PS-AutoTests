package blocks;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BaseBlock {
    protected JavascriptExecutor js;
    protected WebDriver driver;
    protected static final String IDSAVEBTN = "save-changes-url";
    @FindBy(id = IDSAVEBTN)
    protected WebElement saveButton;

    public BaseBlock(WebDriver driver) {
        this.driver = driver;
        js = (JavascriptExecutor) driver;
    }
    public void scrollToElement(String idOfElement) {
        js.executeScript("document.getElementById('" + idOfElement + "').scrollIntoView(true)");
    }
    public void setValueToCodeMirror(String indexOfElement, String value) {
        js.executeScript("$('.CodeMirror')[" + indexOfElement + "].CodeMirror.setValue('" + value + "')");
    }

    public void setValueToElement(WebElement element, String idOfElement, String value) {
        scrollToElement(idOfElement);
        element.clear();
        element.sendKeys(value);
    }

    public String getActualValueOfCodeMirror(String indexOfElement) {
        return js.executeScript("return description = $('.CodeMirror')[" + indexOfElement + "].CodeMirror.getValue()").toString();
    }

    public String getActualValueOfElement(WebElement element, String idOfElement) {
        scrollToElement(idOfElement);
        return element.getAttribute("value");
    }
    public void clickSave() {
        scrollToElement(IDSAVEBTN);
        saveButton.click();
    }
}
