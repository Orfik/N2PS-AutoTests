package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ru.yandex.qatools.allure.annotations.Step;

import static java.lang.Thread.sleep;


public class StudioHomePage extends BasePage {

    @FindBy(css = "a.menu_page_item.studio")
    private WebElement studioLink;
    @FindBy(css = "a.menu_page_item.analytics")
    private WebElement analyticsLink;

    public StudioHomePage(WebDriver driver) {
        super(driver);
    }
    @Step
    public ProjectBoardPage openStudioPage() {
        try {
            sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        studioLink.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='current_account_id_chosen']/a/span")));
        return new ProjectBoardPage(driver);
    }
}
