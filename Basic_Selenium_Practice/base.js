import { Browser, Builder, By } from "selenium-webdriver";

class Base {
    constructor() {
        this.driver = new Builder()
        .forBrowser(Browser.CHROME)
        .build();

        //locators

        // Login / Signup page locator
        this.loginLink = By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[4]/a");

        // Log in info locators
        this.newUserName = By.name("name");
        this.newUserMail = By.xpath("/html/body/section/div/div/div[3]/div/form/input[3]");
        this.signUP = By.xpath("/html/body/section/div/div/div[3]/div/form/button");

        // Information setup locators
        this.gender = By.id("id_gender2");
        this.setupPassword = By.id("password");
        this.name1 = By.id("first_name");
        this.name2 = By.id("last_name");
        this.address1 = By.id("address1");
        this.country = By.id("country");
        this.state = By.id("state");
        this.city = By.id("city");
        this.zipcode = By.id("zipcode");
        this.mobileNumber = By.id("mobile_number");
        this.createAccount = By.xpath("/html/body/section/div/div/div/div[1]/form/button");

        // Continue account setup locator
        this.continueLogin = By.xpath("/html/body/section/div/div/div/div/a");

        // Logout account locator
        this.logout = By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[4]/a");

        // Login account locators
        this.userMail = By.name("email");
        this.userPassword = By.name("password");
        this.login = By.xpath("/html/body/section/div/div/div[1]/div/form/button");

        // Delete account locators
        this.deleteAccount = By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[5]/a");
        this.continueDelete = By.xpath("/html/body/section/div/div/div/div/a");
    }

    //Browser open
    async browserOpen(url){
        // Open the URL
        await this.driver.get(url);

        // Maximize the size
        await this.driver.manage().window().maximize();
        
        // Go to the login / signup page
        await this.driver.findElement(this.loginLink).click();

        // Signup user account
        await this.driver.findElement(this.newUserName).sendKeys("SQA Tester");
        await this.driver.findElement(this.newUserMail).sendKeys("acbd@gmail.com");
        await this.driver.findElement(this.signUP).click();

        // Information setup
        await this.driver.findElement(this.gender).click();
        await this.driver.findElement(this.setupPassword).sendKeys("OstadSQA_Batch19");
        await this.driver.findElement(this.name1).sendKeys("SQA");
        await this.driver.findElement(this.name2).sendKeys("Tester");
        await this.driver.findElement(this.address1).sendKeys("Batch-19, SQA, Ostad.");
        await this.driver.findElement(this.country).sendKeys("United States");
        await this.driver.findElement(this.state).sendKeys("New York");
        await this.driver.findElement(this.city).sendKeys("Albany");
        await this.driver.findElement(this.zipcode).sendKeys("12222");
        await this.driver.findElement(this.mobileNumber).sendKeys("+15185550199");
        await this.driver.findElement(this.createAccount).click();

        await this.driver.findElement(this.continueLogin).click();

        // Logout account
        await this.driver.findElement(this.logout).click();

        // Log in account
        await this.driver.findElement(this.userMail).sendKeys("acbd@gmail.com");
        await this.driver.findElement(this.userPassword).sendKeys("OstadSQA_Batch19");
        await this.driver.findElement(this.login).click();

        // Delete account
        await this.driver.findElement(this.deleteAccount).click();
        await this.driver.findElement(this.continueDelete).click();
    }

    //Browser close
    async browserClose(){
        await this.driver.quit();
    }
}

const page = new Base();
await page.browserOpen('https://automationexercise.com/');
await page.browserClose();