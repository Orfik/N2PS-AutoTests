package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ru.yandex.qatools.allure.annotations.Step;

public class DetailProjectPage extends BasePage {

    private static final String DEFAULTPROJECTNAME = "//span[@title = 'Untitled']";

    private ProjectSettingsPage projectSettingsPage;
    @FindBy(xpath = "//a[@title='Project Settings']")
    private WebElement projectSettingsLink;
    @FindBy(xpath = DEFAULTPROJECTNAME)
    private WebElement labelDefaultProjectName;
    @FindBy(css = ".add.big.alone.popup.pick")
    private WebElement addArticleBigIcon;
    @FindBy(xpath = "//li[@title='Storied Beta']")
    private WebElement storiedBetaGroupLink;
    @FindBy(xpath = ".//div[@data-filter='2']/div[@data-layout_id='143']/span")
    private WebElement blankLayoutTemplate;
    @FindBy(xpath = "//li[@class='project']/figure/figcaption")
    private WebElement articleDefaultTitle;

    public DetailProjectPage(WebDriver driver) {
        super(driver);
        projectSettingsPage = PageFactory.initElements(driver, ProjectSettingsPage.class);
    }
    @Step
    public ProjectSettingsPage openProjectSettings() {
        projectSettingsLink.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[text()='Project photo']")));
        return new ProjectSettingsPage(driver);
    }
    public static String getDEFAULTPROJECTNAME() {
        return DEFAULTPROJECTNAME;
    }
    @Step
    public DetailProjectPage createFirstArticle() {
        addArticleBigIcon.click();
        storiedBetaGroupLink.click();
        builder.click(blankLayoutTemplate).doubleClick(blankLayoutTemplate).perform();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(articleDefaultTitle, "Blank Layout: Untitled"));
        return this;
    }
}
