package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ru.yandex.qatools.allure.annotations.Step;
import static java.lang.Thread.sleep;


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
    @FindBy(xpath = "//*[@id='projects']/ul/li[2]/a")
    private WebElement addArticleSmallIcon;
    @FindBy(xpath = "//*[@id='projects']/ul/li[1]/div[1]/ul/li[2]/a")
    private WebElement addChildArticleIcon;
    @FindBy(xpath = "//*[@id='addNewPage']/div[1]/div[1]/div[1]/ul[1]/li[2]")
    private WebElement storiedBetaGroupLink;
    @FindBy(css = "#designs > div:nth-child(2) > div:nth-child(1)")
    private WebElement blankLayoutTemplate;
    @FindBy(xpath = "//li[@class='project']/figure/figcaption")
    private WebElement articleDefaultTitle;
    @FindBy(xpath = "/html/body/section/div[1]/div[1]/ul/li[4]")
    private WebElement mediaLibraryLink;
    @FindBy(xpath = MEDIALIBRARYTITLE)
    private WebElement labelMediaLibrary;
    @FindBy(xpath = "//*[@id='project-navigation']/a")
    private WebElement navigationMenuLink;
    @FindBy(xpath = "/html/body/section/div[1]/div[1]/ul/li[6]/a")
    private WebElement publishProjectPage;
    @FindBy(xpath = "//*[@id='project-preloader']/a")
    private WebElement preloaderLink;
    @FindBy(xpath = "/html/body/section/section/section/div[3]/div/div/section")
    private WebElement projectPreviweLink;


    public DetailProjectPage(WebDriver driver) {
        super(driver);
        projectSettingsPage = PageFactory.initElements(driver, ProjectSettingsPage.class);
    }
    public String getProjectName() {
        return labelDefaultProjectName.getText();
    }
    public String getArticleName() {
        return articleDefaultTitle.getText();
    }
    @Step
    public ProjectSettingsPage openProjectSettings() {
        try {
            sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        projectSettingsLink.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[text()='Cover image']")));
        return new ProjectSettingsPage(driver);
    }
    public static String getDEFAULTPROJECTNAME() {
        return DEFAULTPROJECTNAME;
    }
    @Step
    public DetailProjectPage createFirstArticle() {
        try {
            sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        addArticleBigIcon.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='designs']/div[1]/div[1]/figure/div")));
        storiedBetaGroupLink.click();
        try {
            sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        blankLayoutTemplate.click();
        blankLayoutTemplate.click();
        try {
            sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        fluentWait.until(ExpectedConditions.textToBePresentInElement(articleDefaultTitle, "Blank Layout: Untitled"));
        return this;
    }
    @Step
    public MediaLibraryPage openMediaLibrary(){
        try {
            sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        mediaLibraryLink.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='assets_wrapper niceScroll']")));
        return new MediaLibraryPage(driver);
    }
    public  static String getMEDIALIBRARYTITLE() { return MEDIALIBRARYTITLE; }
    @Step
    public ProjectPublishPage openProjectPublish(){
        publishProjectPage.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='publish-form']/div[2]/div[1]")));
        return new ProjectPublishPage(driver);
    }
    /*@Step
    public NavigationMenuPage openNavigationMenu(){
        navigationMenuLink.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='navigationForm']/fieldset/div[2]")));
        return new NavigationMenuPage(driver);
    }*/
}
