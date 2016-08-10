package com.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import static java.util.concurrent.TimeUnit.SECONDS;


public class BaseTestClass {
    protected WebDriver driver;

    @BeforeClass
    public  void openBrowser() {
        driver=new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(100, SECONDS);
    }

    @AfterClass
    public void closeBrowser() {
        driver.quit();
    }

}
