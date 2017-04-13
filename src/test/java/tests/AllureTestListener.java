package tests;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.TestListenerAdapter;
import ru.yandex.qatools.allure.annotations.Attachment;


public class AllureTestListener extends TestListenerAdapter {

    @Attachment(value = "{0}", type = "image/png")
    private byte[] makeScreenShot(String testName, WebDriver driver) {
        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    }

    public void onTestFailure(ITestResult result) {
        String testName = result.getName().concat(".png");
        Object currentClass = result.getInstance();
        WebDriver driver = ((TestBaseTest) currentClass).driver;
        makeScreenShot(testName, driver);
    }
}
