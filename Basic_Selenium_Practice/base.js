import { Browser, Builder } from "selenium-webdriver";

class Base {
    constructor() {
        this.driver = new Builder()
        .forBrowser(Browser.CHROME)
        .build();
    }

    //Browser open
    async browserOpen(url){
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }

    //Browser close
    async browserClose(){
        await this.driver.quit();
    }
}

const page = new Base();
await page.browserOpen('https://jsonplaceholder.typicode.com/');
await page.browserClose();