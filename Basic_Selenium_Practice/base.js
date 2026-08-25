import { Browser, Builder, By } from "selenium-webdriver";

class Base {
    constructor() {
        this.driver = new Builder()
        .forBrowser(Browser.CHROME)
        .build();

        //locators

        // Login / Signup page locator
        this.loginLink = By.xpath("//a[contains(text(),'Signup / Login')]");

        // Log in info locators
        this.newUserName = By.name("name");
        this.newUserMail = By.xpath("//div[@class='signup-form']//input[@name='email']");
        this.signUP = By.xpath("//div[@class='signup-form']//button[@type='submit']");

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
        this.createAccount = By.xpath("//button[contains(text(),'Create Account')]");

        // Continue account setup locator
        this.continueLogin = By.xpath("//a[contains(text(),'Continue')]");

        // Logout account locator
        this.logout = By.xpath("//a[contains(text(),'Logout')]");

        // Login account locators
        this.userMail = By.name("email");
        this.userPassword = By.name("password");
        this.login = By.xpath("//div[@class='login-form']//button[@type='submit']");

        // Delete account locators
        this.deleteAccount = By.xpath("//a[contains(text(),'Delete Account')]");
        this.continueDelete = By.xpath("//a[contains(text(),'Continue')]");
    }

    //Browser open
    async browserOpen(url){
        // Open the URL
        await this.driver.get(url);

        // Maximize the size
        await this.driver.manage().window().maximize();
    }

    // Signup user account
    async signUpAccount(username, useremail){
        await this.driver.findElement(this.loginLink).click(); // Go to the login or signup page

        await this.driver.findElement(this.newUserName).sendKeys(username);
        await this.driver.findElement(this.newUserMail).sendKeys(useremail);
        await this.driver.findElement(this.signUP).click();
    }

    // Information setup
    async infoSetup(pass, fName, lNmae, address, countryName, stateName, cityName, zip, phoneNumber){
        await this.driver.findElement(this.gender).click();
        await this.driver.findElement(this.setupPassword).sendKeys(pass);
        await this.driver.findElement(this.name1).sendKeys(fName);
        await this.driver.findElement(this.name2).sendKeys(lNmae);
        await this.driver.findElement(this.address1).sendKeys(address);
        await this.driver.findElement(this.country).sendKeys(countryName);
        await this.driver.findElement(this.state).sendKeys(stateName);
        await this.driver.findElement(this.city).sendKeys(cityName);
        await this.driver.findElement(this.zipcode).sendKeys(zip);
        await this.driver.findElement(this.mobileNumber).sendKeys(phoneNumber);
        await this.driver.findElement(this.createAccount).click();

        await this.driver.findElement(this.continueLogin).click();
    }

    // Logout account
    async logoutAccount(){
        await this.driver.findElement(this.logout).click();
    }

    // Log in account
    async loginAccount(){
        await this.driver.findElement(this.userMail).sendKeys("acbd@gmail.com");
        await this.driver.findElement(this.userPassword).sendKeys("OstadSQA_Batch19");
        await this.driver.findElement(this.login).click();
    }

    // Delete account
    async DeleteUserAccount(){
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
await page.signUpAccount("SQA Tester", "acbd@gmail.com");
await page.infoSetup("OstadSQA_Batch19", "SQA", "Tester", "Batch-19, SQA, Ostad.", "United States", "New York", "Albany", "12222", "+15185550199");
await page.logoutAccount();
await page.loginAccount();
await page.DeleteUserAccount();
await page.browserClose();
