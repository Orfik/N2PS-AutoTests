package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ru.yandex.qatools.allure.annotations.Step;

//import static pages.DetailProjectPage.MEDIALIBRARYTITLE;

public class DetailProjectPage extends BasePage {

    private static final String DEFAULTPROJECTNAME = "//span[@title = 'Untitled']";
    private static final String MEDIALIBRARYTITLE = "//*[text()='Media library']";

    private ProjectSettingsPage projectSettingsPage;
    @FindBy(xpath = "//a[@title='Project Settings']")
    private WebElement projectSettingsLink;
    @FindBy(xpath = DEFAULTPROJECTNAME)
    private WebElement labelDefaultProjectName;
    @FindBy(xpath = ".//*[text()='Add your first page']")
    private WebElement addArticleBigIcon;
    @FindBy(xpath = ".//*[@id='addNewPage']/div/div[1]/ul[1]/li[3]/span")
    private WebElement storiedBetaGroupLink;
    @FindBy(xpath = "//*[@id='designs']/div[3]/div[1]/span")
    private WebElement blankLayoutTemplate;
    @FindBy(xpath = "//li[@class='project']/figure/figcaption")
    private WebElement articleDefaultTitle;
    @FindBy(xpath = "/html/body/section/div[1]/div[1]/ul/li[4]/a")
    private WebElement mediaLibraryLink;
    @FindBy(xpath = MEDIALIBRARYTITLE)
    private WebElement labelMediaLibrary;

    public DetailProjectPage(WebDriver driver) {
        super(driver);
        projectSettingsPage = PageFactory.initElements(driver, ProjectSettingsPage.class);
    }
    @Step
    public ProjectSettingsPage openProjectSettings() {
        projectSettingsLink.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[text()='Cover image']")));
        return new ProjectSettingsPage(driver);
    }
    public static String getDEFAULTPROJECTNAME() {
        return DEFAULTPROJECTNAME;
    }
    @Step
    public DetailProjectPage createFirstArticle() {
        addArticleBigIcon.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='designs']/div[1]/div[1]/figure/div")));
        storiedBetaGroupLink.click();
        builder.click(blankLayoutTemplate).doubleClick(blankLayoutTemplate).perform();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(articleDefaultTitle, "Blank Layout: Untitled"));
        return this;
    }
    @Step
    public MediaLibraryPage openMediaLibrary(){
        mediaLibraryLink.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='assets_wrapper niceScroll']")));
        return new MediaLibraryPage(driver);
    }
    public  static String getMEDIALIBRARYTITLE() { return MEDIALIBRARYTITLE; }
}
