package blocks;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class BaseBlock {
    protected JavascriptExecutor js;
    protected WebDriver driver;

    public BaseBlock(WebDriver driver) {
        this.driver = driver;
        js = (JavascriptExecutor) driver;
    }
}
