package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;


public class StudioHome {
    private WebDriver driver;

    public StudioHome(WebDriver driver) {
        this.driver = driver;
    }

    public void goToStudio(String expectedUserName) {
        driver.findElement(By.cssSelector("a.menu_page_item.studio")).click();
        Assert.assertTrue(driver.findElement(By.cssSelector("span.userName")).getText().contains(expectedUserName));
    }
}
