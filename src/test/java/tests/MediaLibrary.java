package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.SystemClock;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;
import pages.DetailProjectPage;
import pages.ProjectBoardPage;
import pages.MediaLibraryPage;
import ru.yandex.qatools.allure.annotations.Features;
import ru.yandex.qatools.allure.annotations.Stories;
import ru.yandex.qatools.allure.annotations.TestCaseId;

import java.io.IOException;

@Listeners(value = AllureTestListener.class)
public class MediaLibrary extends BaseTest {

    private DetailProjectPage detailProjectPage;
    private ProjectBoardPage projectBoardPage;
    private MediaLibraryPage mediaLibraryPage;


    @BeforeMethod
    public void setUp() throws Exception {
        PageFactory.initElements(driver, this);
        projectBoardPage = new ProjectBoardPage(driver);
        mediaLibraryPage = new MediaLibraryPage(driver);
        detailProjectPage = new DetailProjectPage(driver);
    }


    @TestCaseId("7")
    @Features("Open Library")
    @Stories("Open Library")
    @Test(description = "open media library", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void openMediaLibrary(String login, String password, String expectedUserName) throws IOException, InterruptedException {
        auth(login, password);
        projectBoardPage.createNewProject();
        detailProjectPage.createFirstArticle();
        detailProjectPage.openMediaLibrary();
    }


    @TestCaseId("8")
    @Features("UploadImage")
    @Stories("UploadImage")
    @Test(description = "UploadImage", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadImage(String login, String password, String expectedUserName)throws IOException, InterruptedException {
        //auth(login, password);
        //projectBoardPage.createNewProject();
        //detailProjectPage.createFirstArticle();
        //detailProjectPage.openMediaLibrary();
        mediaLibraryPage.selectAssetsTypeImage();
        mediaLibraryPage.uploadFirstImage(System.getProperty("user.dir") + "\\src\\test\\resources\\test.jpg");
        mediaLibraryPage.uploadSecondImage(System.getProperty("user.dir") + "\\src\\test\\resources\\test3.jpg");
        mediaLibraryPage.deleteAsset();
        //softAssert.assertEquals();
}
        /*@TestCaseId("9")
        @Features("DeleteImage")
        @Stories("DeleteImage")
        @Test(description = "DeleteFonts", dataProviderClass = DataProviderClass.class)
        public void deleteImage () throws IOException, InstantiationException{
        //Case steps
    }*/

    @TestCaseId("10")
    @Features("UploadFonts")
    @Stories("UploadFonts")
    @Test(description = "UploadFonts",  dataProviderClass = DataProviderClass.class)
    public void uploadFonts ()throws IOException, InterruptedException {
        //auth("qa@storied.co", "zxc123");
        //projectBoardPage.createNewProject();
       // detailProjectPage.createFirstArticle();
       // detailProjectPage.openMediaLibrary();
        mediaLibraryPage.selectAssetsTypeFonts();
        mediaLibraryPage.uploadFonts(System.getProperty("user.dir") + "\\src\\test\\resources\\FontWOFF.woff");
        //softAssert.assertEquals();
    }
    /*@TestCaseId("11")
    @Features("DeleteFonts")
    @Stories("DeleteFonts")
    @Test(description = "DeleteFonts", dataProviderClass = DataProviderClass.class)
    public void deleteFonts() throws IOException, InstantiationException{
        //Case steps
    }*/
    @TestCaseId("12")
    @Features("UploadAudio")
    @Stories("UploadAudio")
    @Test(description = "UploadAudio", dataProviderClass = DataProviderClass.class)
    public void uploadAudio () throws IOException, InstantiationException{
        //auth("qa@storied.co", "zxc123");
       // projectBoardPage.createNewProject();
        //detailProjectPage.createFirstArticle();
        //detailProjectPage.openMediaLibrary();
        mediaLibraryPage.selectAssetsTypeAudio();
        mediaLibraryPage.uploadAudio(System.getProperty("user.dir") + "\\src\\test\\resources\\Audio1.mp3");
    }
    /*@TestCaseId("13")
    @Features("DeleteAudio")
    @Stories("DeleteAudio")
    @Test(description = "DeleteAudio", dataProviderClass = DataProviderClass.class)
    public void deleteAudio () throws IOException, InstantiationException{
        //Case steps
    }*/

    @TestCaseId("14")
    @Features("UploadVideo")
    @Stories("UploadVideo")
    @Test(description = "UploadVideo", dataProviderClass = DataProviderClass.class)
    public void uploadVideo () throws IOException, InstantiationException{
        //auth("qa@storied.co", "zxc123");
        //projectBoardPage.createNewProject();
       // detailProjectPage.createFirstArticle();
       // detailProjectPage.openMediaLibrary();
        mediaLibraryPage.selectAssetsTypeVideo();
        mediaLibraryPage.uploadVideo(System.getProperty("user.dir") + "\\src\\test\\resources\\Video1.mp4");
    }
    /*@TestCaseId("15")
    @Features("DeleteVideo")
    @Stories("DeleteVideo")
    @Test(description = "DeleteVideo", dataProviderClass = DataProviderClass.class)
    public void deleteVideo () throws IOException, InstantiationException{
        //Case steps
    }*/
    @TestCaseId("16")
    @Features("UploadJs")
    @Stories("UploadJs")
    @Test(description = "UploadJs", dataProviderClass = DataProviderClass.class)
    public void uploadJs() throws IOException, InstantiationException{
        //auth("qa@storied.co", "zxc123");
        //projectBoardPage.createNewProject();
       // detailProjectPage.createFirstArticle();
       // detailProjectPage.openMediaLibrary();
        mediaLibraryPage.selectAssetsTypeJs();
        mediaLibraryPage.uploadJs(System.getProperty("user.dir") + "\\src\\test\\resources\\JS1.js");
    }
    /*@TestCaseId("17")
    @Features("DeleteJs")
    @Stories("DeleteJs")
    @Test(description = "DeleteJs", dataProviderClass = DataProviderClass.class)
    public void deleteJs () throws IOException, InstantiationException{
        //Case steps
    }*/
    @TestCaseId("18")
    @Features("UploadGIF")
    @Stories("UploadGIF")
    @Test(description = "UploadGIF", dataProviderClass = DataProviderClass.class)
    public void uploadGIF () throws IOException, InstantiationException{
        //auth("qa@storied.co", "zxc123");
        // projectBoardPage.createNewProject();
        // detailProjectPage.createFirstArticle();
        // detailProjectPage.openMediaLibrary();
        mediaLibraryPage.selectAssetsTypeGif();
        mediaLibraryPage.uploadGif(System.getProperty("user.dir") + "\\src\\test\\resources\\GIF1.gif");
    }
    /*@TestCaseId("19")
    @Features("DeleteGif")
    @Stories("DeleteGif")
    @Test(description = "DeleteGif", dataProviderClass = DataProviderClass.class)
    public void deleteGif () throws IOException, InstantiationException{
        //Case steps
    }*/

}
