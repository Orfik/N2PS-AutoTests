package com.datadrivers;
import org.testng.annotations.DataProvider;

public class DataProviderClass {

    @DataProvider(name="usersCredentialsAndExpectedErrors")
    public static Object[][] userCredentionals () {

        String login = "qatestllc@gmail.com";
        String password = "123456";
        String error = "Username and password combination was not found.";

        String login1 = "dancalya+7896@gmail.com";
        String password1 = "zxc123";
        String error1 = "Your account has been removed.";

        return new Object[][] {{login,password, error}, {login1,password1, error1}};
    }



}
