package com.auth;

import com.map.UIMap;
import org.testng.annotations.Test;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.io.IOException;
import static java.util.concurrent.TimeUnit.SECONDS;

public class Auth {
    private WebDriver driver;


    @BeforeClass
    public  void setUP() {

        driver=new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(100, SECONDS);

    }


    @Test (description = "validation on incorrect values")
    public void authInvalid() throws IOException {
        try {
            driver.get(UIMap.URL_HOME);
            driver.findElement(By.id(UIMap.HOME_EMAIL_ID)).sendKeys("qatestllc@gmail.com");
            driver.findElement(By.id(UIMap.HOME_PASSWORD_ID)).sendKeys("123456");
            driver.findElement(By.xpath(UIMap.HOME_SIGNIN_XPath)).click();
            String text = driver.findElement(By.xpath(".//*[@id='signin_form']/fieldset/div[1]/div/p")).getText();
            Assert.assertEquals(text, "Username and password combination was not found.");
        }
        catch (Exception e) {
            Assert.fail();
        }
    }

    @Test (description = "removed user")
    public void authRemovedUser() throws IOException {
        try {
            driver.get(UIMap.URL_HOME);
            WebElement email = driver.findElement(By.id(UIMap.HOME_EMAIL_ID));
            email.clear();
            email.sendKeys("dancalya+7896@gmail.com");
            WebElement password = driver.findElement(By.id(UIMap.HOME_PASSWORD_ID));
            password.clear();
            password.sendKeys("zxc123");
            driver.findElement(By.xpath(UIMap.HOME_SIGNIN_XPath)).click();
            String text = driver.findElement(By.xpath(".//*[@id='signin_form']/fieldset/div[1]/div/p")).getText();
            Assert.assertEquals(text, "Your account has been removed.");
        }
        catch (Exception e) {
            Assert.fail();
        }
    }


    @Test (description = "successful authorization")
    public void authSuccessfulAuth() throws IOException {
        try {
            driver.get(UIMap.URL_HOME);
            WebElement email = driver.findElement(By.id(UIMap.HOME_EMAIL_ID));
            email.clear();
            email.sendKeys("qa@storied.co");
            WebElement password = driver.findElement(By.id(UIMap.HOME_PASSWORD_ID));
            password.clear();
            password.sendKeys("zxc123");
            driver.findElement(By.xpath(UIMap.HOME_SIGNIN_XPath)).click();
            driver.findElement(By.cssSelector("a.menu_page_item.studio")).click();
            Assert.assertTrue(driver.findElement(By.cssSelector("span.userName")).getText().contains("Ellina_admin Frolova"));
        }
        catch (Exception e) {
            Assert.fail();
        }
    }


    @AfterClass
    public void CloseDriver() {
        driver.quit();
    }
}
