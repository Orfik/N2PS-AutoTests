package tests;

import dataproviders.DataProviderClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pages.DetailProjectPage;
import pages.ProjectBoardPage;

import java.io.IOException;

public class CreationProject extends BaseTest {

    private ProjectBoardPage projectBoard;
    private DetailProjectPage detailProjectPage;


    @BeforeMethod
    public void setUp() throws Exception {
        PageFactory.initElements(driver, this);
        projectBoard = new ProjectBoardPage(driver);
        detailProjectPage = new DetailProjectPage(driver);
    }

    @Test(description = "creation new project", dataProvider = "validUserData", dataProviderClass = DataProviderClass.class)
    public void creationProject(String login, String password, String expectedUserName) throws IOException {
        String expectedTitle = "Untitled - Pages - Storied.co";
        auth(login, password);
        projectBoard.createNewProject();
        fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(detailProjectPage.getDEFAULTPROJECTNAME())));
        String actualTitle = driver.getTitle();
        Assert.assertEquals(expectedTitle, actualTitle);
    }
}
