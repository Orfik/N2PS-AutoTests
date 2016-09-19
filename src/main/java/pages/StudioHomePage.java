package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ru.yandex.qatools.allure.annotations.Step;


public class StudioHomePage {
    private WebDriver driver;

    @FindBy(css = "a.menu_page_item.studio")
    private WebElement studioLink;

    public StudioHomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @Step
    public ProjectBoardPage openStudioPage() {
        studioLink.click();
        return new ProjectBoardPage(driver);
    }
}
