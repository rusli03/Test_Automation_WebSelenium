const {By, Key, Builder, Browser, Until, linkText} = require("selenium-webdriver");
const { Name } = require("selenium-webdriver/lib/command");
require("geckodriver");

async function test_case(){
    let driver = await new Builder().forBrowser("firefox").build();

     await driver.get("https://google.com");

     await driver.findElement(By.name("q")).sendKeys("Elevenia", Key.RETURN);

     //1.Pergilah ke https://www.elevenia.co.id/ kemudian search “komputer”    
     driver.get("https://www.elevenia.co.id/");
     driver.findElement(By.xpath('//input[@id="AKCKwd"]')).sendKeys('Komputer' , Key.RETURN);
     await driver.sleep(10000);
   
     //2.Pilih “Produk terlaris”
     driver.findElement(By.xpath('//a[@code="SS"]')).sendKeys('Produk terlaris', Key.RETURN);
     await driver.sleep(10000);

     //3.Pilih produk paling pertama
     driver.get("http://www.elevenia.co.id/prd-joyseus-wireless-mouse-1800dpi-usb-computer-2-4ghz-mouse-ms0-28911164")
     await driver.sleep(10000);         

     //4.Isi dengan kuantitas 3 dan tambah ke keranjang 
     driver.findElement(By.xpath('//button[@class="ico_btnType incre"]')).sendKeys('ico_btnType incre' ,Key.RETURN);
     await driver.sleep(10000);

     driver.findElement(By.xpath('//a[@class="btnStyle btnFlat btnL btnOrangeW"]')).sendKeys('btnStyle btnFlat btnL btnOrangeW' ,Key.RETURN);
     await driver.sleep(10000);

     //5.Jika ada pertanyaan apakah anda ingin lihat keranjang pilih “ya” jika tidak ada popup maka bisa pilih ke keranjang
     driver.findElement(By.xpath('//a[@class="btnStyle btnS btnRed"]')).sendKeys('btnStyle btnS btnRed' ,Key.RETURN);
     await driver.sleep(10000);

     //6.Kemudian pilih ubah kurir
     driver.findElement(By.xpath('//a[@class="btnStyle btnS btnWGray"]')).sendKeys('btnStyle btnS btnWGray' ,Key.RETURN);
     await driver.sleep(10000);

     //7.Pilih “Batal”
     driver.findElement(By.xpath('//a[@class="btnStyle btnM btnWGray"]')).sendKeys('btnStyle btnM btnWGray' ,Key.RETURN);
     await driver.sleep(10000);

     //8.Kemudian pilih “Hapus” dan “Ok”
     driver.findElement(By.xpath('//a[@class="btnStyle btnS btnWGray"]')).sendKeys('btnStyle btnS btnWGray' ,Key.RETURN);
     await driver.sleep(10000);

     driver.findElement(By.xpath('//a[@class="btnStyle btnM btnGray btnC"]')).sendKeys('btnStyle btnM btnGray btnC' ,Key.RETURN);
     
     
     
    await driver.quit();

}

test_case();
