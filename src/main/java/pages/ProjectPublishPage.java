package pages;


        import org.openqa.selenium.*;
        import org.openqa.selenium.interactions.Actions;
        import org.openqa.selenium.support.FindBy;
        import org.openqa.selenium.support.ui.ExpectedConditions;
        import ru.yandex.qatools.allure.annotations.Step;

public class ProjectPublishPage extends BasePage{


    private static final String JCROPAREA = ".jcrop-holder";

    @FindBy (xpath = "//div[@id='project_publish']/div/div/h3/span")
    private WebElement projectTitle;
    @FindBy (xpath = "//input[@id='name']")
    private WebElement projectTitleAfterClick;
    @FindBy (xpath = "//*[@id='projectPublishCoverPhoto']/div[1]/div[2]/div[1]/input")
    private WebElement coverImageInput;
    @FindBy (xpath = "//*[@id='upload-button']/a[1]")
    private WebElement saveAreaForCroppingBtn;
    @FindBy (xpath = "//*[@id='projectPublishCoverPhoto']/div[3]/div[1]/div[2]")
    private WebElement deleteProjectCoverimageBtn;
    @FindBy (xpath = "//*[@id='projectPublishCoverPhoto']/div[1]/div[6]/div[2]/div[2]/div[1]")
    private WebElement confirmDelete;
    @FindBy (xpath = ".//div[@class='filePreviewFocalWrapper']//img")
    private WebElement coverImage;
    @FindBy(xpath = "//*[@id='projectPublishCoverBlockWrapper']/div[2]/div[1]/div[2]")
    private WebElement selectVideoCover;
    @FindBy(css = "#projectPublishCoverVideo > div.fileUploadBox > div.fileUploadControls > div.half_top.uploadBlockOption.uploadFromDisk > input")
    private WebElement coverVideoInput;
    @FindBy(xpath = "//*[@id='coverVideoFocalStep']/div/div[2]/div[1]/button")
    private WebElement saveVideoCover;
    @FindBy (xpath = "//*[@id='projectPublishLogo']/div[1]/div[2]/div[1]/input")
    private WebElement projectLogo;
    @FindBy (xpath = "//*[@id='upload-button']/a[1]")
    private WebElement saveLogoImage;
    @FindBy (xpath = "//div[@id='project_publish']/div/div/h3")
    private WebElement closePublishPage;


    public ProjectPublishPage(WebDriver driver) {

        super(driver);
    }



    public ProjectPublishPage uploadProjectCoverImage (String firstImage, String imageForChanging){
        try {
                coverImageInput.sendKeys(firstImage);
            } catch (ElementNotVisibleException env) {
                Actions a = new Actions(driver);
                a.moveToElement(coverImage)
                        .click(deleteProjectCoverimageBtn)
                        .click(confirmDelete)
                        .perform();
                coverImageInput.sendKeys(imageForChanging);
            }
            fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(JCROPAREA)));
            saveAreaForCroppingBtn.click();
            fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='copy_publish_embed']/span[1]")));
            return this;
    }

    @Step
    public ProjectPublishPage uploadProjectLogo(String logoImage){
        projectLogo.sendKeys(logoImage);
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(JCROPAREA)));
        saveLogoImage.click();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='copy_publish_embed']/span[1]")));
        return this;
    }

    @Step
    public ProjectPublishPage selectVideoCover(){
        selectVideoCover.click();
        //fluentWait.until(ExpectedConditions.textToBePresentInElement(CoverVideoInput, "Browse project library"));
        return this;
    }

    @Step
    public ProjectPublishPage uploadProjectCoverVideo (String coverVideo){
        coverVideoInput.sendKeys(coverVideo);
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='coverVideoFocalStep']/div")));
        saveVideoCover.click();
        return this;
    }
    @Step
    public ProjectPublishPage changeProjectTitle(){
        projectTitle.click();
        projectTitleAfterClick.clear();
        projectTitleAfterClick.sendKeys("Test1");
        closePublishPage.click();
    return this;
    }


}


