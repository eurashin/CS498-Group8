/*
// import org.openqa.selenium.By;     
// import org.openqa.selenium.WebDriver;      
// import org.openqa.selenium.chrome.ChromeDriver;    
// import org.openqa.selenium.*;      
 
public class Form {            
    public static void main(String[] args) {                                   
           
        // declaration and instantiation of objects/variables      
        System.setProperty("webdriver.chrome.driver","G:\\chromedriver.exe");                  
        WebDriver driver = new ChromeDriver();                 
               
        String baseUrl = "http://128.163.232.240/";                 
        driver.get(baseUrl);  

        WebElement button_1 = driver.findElement(By.name("Click here to start!"));
        button_1.click();

 
        // // Get the WebElement corresponding to the Email Address(TextField)    
        // // WebElement email = driver.findElement(By.id("email"));                         
 
        // // Get the WebElement corresponding to the Password Field      
        // // WebElement password = driver.findElement(By.name("passwd"));                           
 
        // // email.sendKeys("abcd@gmail.com");                  
        // // password.sendKeys("abcdefghlkjl");                 
        // // System.out.println("Text Field Set");                  
         
        // // // Deleting values in the text box     
        // // email.clear();         
        // // password.clear();          
        // // System.out.println("Text Field Cleared");                  
 
        // // // Find the submit button      
        // // WebElement login = driver.findElement(By.id("SubmitLogin"));                           
                           
        // // Using click method to submit form       
        // email.sendKeys("abcd@gmail.com");                  
        // password.sendKeys("abcdefghlkjl");                 
        // login.click();         
        // System.out.println("Login Done with Click");                   
               
        // //using submit method to submit the form. Submit used on password field    
        // driver.get(baseUrl);                   
        // driver.findElement(By.id("email")).sendKeys("abcd@gmail.com");                         
        // driver.findElement(By.name("passwd")).sendKeys("abcdefghlkjl");                        
        // driver.findElement(By.id("SubmitLogin")).submit();                 
        // System.out.println("Login Done with Submit");                  
         
        driver.close();      
               
    }      
}*/


var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('ChromeDriver')
    .usingServer("http://128.163.232.240/")
    .build();
               
    
// driver.get("http://128.163.232.240/"); 

// WebElement button_1 = driver.findElement(By.name("Click here to start!"));

driver.findElement(By.name("start")).click();

// button_1.click();

driver.sleep(200).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'webdriver - http://128.163.232.240/pages/interview.html') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
  });
});







