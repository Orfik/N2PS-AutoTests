package blocks;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ProjectSettingsBlock {

    private static final String SETTINGHEADRELOCATOR = "//span[@title = 'Untitled']";

    @FindBy (xpath = SETTINGHEADRELOCATOR)
    private WebElement settingsHeader;

    public static String getSettingsHeaderLocator() {
        return SETTINGHEADRELOCATOR;
    }
}
