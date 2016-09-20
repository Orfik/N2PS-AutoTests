package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import ru.yandex.qatools.allure.annotations.Step;


public class StudioHomePage extends BasePage {

    @FindBy(css = "a.menu_page_item.studio")
    private WebElement studioLink;

    public StudioHomePage(WebDriver driver) {
        super(driver);
    }

    @Step
    public ProjectBoardPage openStudioPage() {
        studioLink.click();
        return new ProjectBoardPage(driver);
    }
}
