package pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ru.yandex.qatools.allure.annotations.Step;


public class MediaLibraryPage extends BasePage {

    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/a")
    private WebElement assetsFilter;
    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div[1]/div[1]/div")
    private WebElement assetsFilterEverything;
    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div[1]/ul/li[3]")
    private WebElement assetsFilterImage;
    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div[1]/ul/li[2]")
    private WebElement assetsFilterFont;
    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div[1]/ul/li[1]")
    private WebElement assetsFilterAudio;
    @FindBy (xpath ="//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div[1]/ul/li[6]")
    private WebElement assetsFilterVideo;
    @FindBy (xpath ="//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div[1]/ul/li[4]")
    private WebElement assetsFilterJs;
    @FindBy (xpath ="//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div[1]/ul/li[5]")
    private WebElement assetsFilterGif;
    @FindBy(xpath = "//*[@id='libraryFooterUploadBlock']/input")
    private WebElement footerinputFileMediaLibrary;
    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/a/span/span")
    private WebElement selectedFilter;
    @FindBy (xpath = ".//*[@id='font_edit_save']")
    private WebElement fontBtnSave;
    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[3]/div/ul/li[1]/form/div/div[1]/div[1]/input")
    private WebElement inputBlock;
    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[3]/div/ul/li[2]/span[2]")
    private WebElement firstAssetInLibrary;
    @FindBy (xpath = "//*[@id='gritter-item-5']/div[2]/div[1]/span")
    private WebElement fontSuccessPopup;
    @FindBy (xpath ="//*[@id='library-popup']/div[1]/div[1]/div[1]/div[3]/div/ul/li[2]/span[1]" )
    private WebElement deleteAsset;
    @FindBy (xpath = "//*[@id='library-popup']/div[1]/div[1]/div[1]/div[3]/div/ul/li[2]/a/div/div[2]/div/div[1]")
    private WebElement confirmDeletionBtn;



    public MediaLibraryPage(WebDriver driver) {
        super(driver);
    }

   /*public String getMessage () {
        return fontSuccessPopup.getText();
    }*/
    @Step
    public MediaLibraryPage deleteAsset(){
        deleteAsset.click();
        confirmDeletionBtn.click();
        return this;
    }
    @Step
    public MediaLibraryPage  selectAssetsTypeImage(){
        assetsFilter.click();
        assetsFilterImage.click();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(selectedFilter, "Image"));
        return this;
        }
    @Step
    public MediaLibraryPage uploadFirstImage(String FirstImage) {
        footerinputFileMediaLibrary.sendKeys(FirstImage);
        fluentWait.until(ExpectedConditions.textToBePresentInElement(firstAssetInLibrary, "test.jpg"));
        return this;
    }
     @Step
     public MediaLibraryPage uploadSecondImage(String SecondImage){
         footerinputFileMediaLibrary.sendKeys(SecondImage);
         fluentWait.until(ExpectedConditions.textToBePresentInElement(firstAssetInLibrary, "test3.jpg"));
        //fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='library-popup']/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]")));
         return this;
        }

    @Step
    public MediaLibraryPage selectAssetsTypeFonts(){
        assetsFilter.click();
        assetsFilterFont.click();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(selectedFilter, "Font"));
        return this;
    }
    @Step
    public MediaLibraryPage uploadFonts(String firstFont) throws InterruptedException {
        footerinputFileMediaLibrary.sendKeys(firstFont);
        Thread.sleep(300);
        fontBtnSave.click();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(firstAssetInLibrary, "AGReverance Oblique"));
        return this;
    }

    @Step
    public MediaLibraryPage selectAssetsTypeAudio(){
        assetsFilter.click();
        assetsFilterAudio.click();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(selectedFilter, "Audio"));
        return this;
    }
    @Step
    public MediaLibraryPage uploadAudio(String firstAudio) {
        footerinputFileMediaLibrary.sendKeys(firstAudio);
        fluentWait.until(ExpectedConditions.textToBePresentInElement(firstAssetInLibrary, "1.mp3"));
        return this;
    }

    @Step
    public MediaLibraryPage selectAssetsTypeVideo(){
        assetsFilter.click();
        assetsFilterVideo.click();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(selectedFilter, "Video"));
        return this;
    }
    @Step
    public MediaLibraryPage uploadVideo(String firstVideo) {
        footerinputFileMediaLibrary.sendKeys(firstVideo);
        fluentWait.until(ExpectedConditions.textToBePresentInElement(firstAssetInLibrary, "Video1.mp4"));
        return this;
    }

    @Step
    public MediaLibraryPage selectAssetsTypeGif(){
        assetsFilter.click();
        assetsFilterGif.click();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(selectedFilter, "Scrollable Gif"));
        return this;
    }
    @Step
    public MediaLibraryPage uploadGif(String firstGif) {
        footerinputFileMediaLibrary.sendKeys(firstGif);
        fluentWait.until(ExpectedConditions.textToBePresentInElement(firstAssetInLibrary, "GIF1.gif"));
        return this;
    }
    @Step
    public MediaLibraryPage selectAssetsTypeJs(){
        assetsFilter.click();
        assetsFilterJs.click();
        fluentWait.until(ExpectedConditions.textToBePresentInElement(selectedFilter, "JavaScript"));
        return this;
    }
    @Step
    public MediaLibraryPage uploadJs(String firstJs) {
        footerinputFileMediaLibrary.sendKeys(firstJs);
        fluentWait.until(ExpectedConditions.textToBePresentInElement(firstAssetInLibrary, "JS1.js"));
        return this;
    }
    }
