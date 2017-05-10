package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
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


    @TestCaseId("5")
    @Features("Open Library")
    @Stories("Open Library")
    @Test(priority=1, description = "open media library", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void openMediaLibrary(String login, String password, String expectedUserName) throws IOException, InterruptedException {
        auth(login, password);
        projectBoardPage.openProject();
        detailProjectPage.openMediaLibrary();
    }


    @TestCaseId("6")
    @Features("Upload Image")
    @Stories("Upload Image")
    @Test(priority=2, description = "Upload Image", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void uploadImage(String login, String password, String expectedUserName)throws IOException, InterruptedException {
        mediaLibraryPage.selectAssetsTypeImage();
        mediaLibraryPage.uploadFirstImage(System.getProperty("user.dir") + "/src/test/resources/test.jpg");
        mediaLibraryPage.uploadSecondImage(System.getProperty("user.dir") + "/src/test/resources/test3.jpg");

}
        /*@TestCaseId("9")
        @Features("DeleteImage")
        @Stories("DeleteImage")
        @Test(description = "DeleteFonts", dataProviderClass = DataProviderClass.class)
        public void deleteImage () throws IOException, InstantiationException{
        //Case steps
    }*/

    @TestCaseId("7")
    @Features("Upload Fonts")
    @Stories("Upload Fonts")
    @Test(priority=4, description = "Upload Fonts",  dataProviderClass = DataProviderClass.class)
    public void uploadFonts ()throws IOException, InterruptedException {
        mediaLibraryPage.selectAssetsTypeFonts();
        mediaLibraryPage.uploadFonts(System.getProperty("user.dir") + "/src/test/resources/FontWOFF.woff");
    }
    /*@TestCaseId("11")
    @Features("DeleteFonts")
    @Stories("DeleteFonts")
    @Test(description = "DeleteFonts", dataProviderClass = DataProviderClass.class)
    public void deleteFonts() throws IOException, InstantiationException{
        //Case steps
    }*/
    @TestCaseId("8")
    @Features("Upload Audio")
    @Stories("Upload Audio")
    @Test(priority=3, description = "Upload Audio", dataProviderClass = DataProviderClass.class)
    public void uploadAudio () throws IOException, InstantiationException{
        mediaLibraryPage.selectAssetsTypeAudio();
        mediaLibraryPage.uploadAudio(System.getProperty("user.dir") + "/src/test/resources/Audio1.mp3");
    }
    /*@TestCaseId("13")
    @Features("DeleteAudio")
    @Stories("DeleteAudio")
    @Test(description = "DeleteAudio", dataProviderClass = DataProviderClass.class)
    public void deleteAudio () throws IOException, InstantiationException{
        //Case steps
    }*/

    @TestCaseId("9")
    @Features("Upload Video")
    @Stories("Upload Video")
    @Test(priority=10, description = "Upload Video", dataProviderClass = DataProviderClass.class)
    public void uploadVideo () throws IOException, InstantiationException{
        mediaLibraryPage.selectAssetsTypeVideo();
        mediaLibraryPage.uploadVideo(System.getProperty("user.dir") + "/src/test/resources/Video1.mp4");
    }
    /*@TestCaseId("15")
    @Features("DeleteVideo")
    @Stories("DeleteVideo")
    @Test(description = "DeleteVideo", dataProviderClass = DataProviderClass.class)
    public void deleteVideo () throws IOException, InstantiationException{
        //Case steps
    }*/
    @TestCaseId("10")
    @Features("Upload Js")
    @Stories("Upload Js")
    @Test(priority=5, description = "Upload Js", dataProviderClass = DataProviderClass.class)
    public void uploadJs() throws IOException, InstantiationException{
       mediaLibraryPage.selectAssetsTypeJs();
       mediaLibraryPage.uploadJs(System.getProperty("user.dir") + "/src/test/resources/JS1.js");
    }
    /*@TestCaseId("17")
    @Features("DeleteJs")
    @Stories("DeleteJs")
    @Test(description = "DeleteJs", dataProviderClass = DataProviderClass.class)
    public void deleteJs () throws IOException, InstantiationException{
        //Case steps
    }*/
    @TestCaseId("11")
    @Features("Upload GIF")
    @Stories("Upload GIF")
    @Test(priority=6, description = "Upload GIF", dataProviderClass = DataProviderClass.class)
    public void uploadGIF () throws IOException, InstantiationException{
        mediaLibraryPage.selectAssetsTypeGif();
        mediaLibraryPage.uploadGif(System.getProperty("user.dir") + "/src/test/resources/GIF1.gif");
    }
    /*@TestCaseId("19")
    @Features("DeleteGif")
    @Stories("DeleteGif")
    @Test(description = "DeleteGif", dataProviderClass = DataProviderClass.class)
    public void deleteGif () throws IOException, InstantiationException{
        //Case steps
    }*/

}
