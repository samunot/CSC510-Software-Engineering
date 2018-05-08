package selenium.tests;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.ChromeDriverManager;

public class WebTest
{
	private static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws Exception 
	{
		//driver = new HtmlUnitDriver();
		ChromeDriverManager.getInstance().setup();
		driver = new ChromeDriver();
	}
	
	@AfterClass
	public static void  tearDown() throws Exception
	{
		driver.close();
		driver.quit();
	}

	
	@Test
	public void googleExists() throws Exception
	{
		driver.get("http://www.google.com");
        assertEquals("Google", driver.getTitle());		
	}
	

	
	
	
	@Test
	public void firstTest() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='span8']//span[.='Frustration of Software Developers']")));
		
		WebElement check = driver.findElement(By.xpath("//div[@class='span8']//span[.='Frustration of Software Developers']/../../../div[@class='span4']//span[@class='backers']"));
		System.out.println(check.getText());
		
		assertEquals("Matched","55", check.getText());
	}
	
	
	
	
	@Test
	public void secondTest() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='CLOSED']")));
		List<WebElement> status = driver.findElements(By.xpath("//a[@class='status']/span[.='CLOSED']"));

		assertNotNull(status);
		assertEquals(5, status.size());
	}
	
	
	@Test
	public void thirdTest() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='OPEN']/ancestor::a/following-sibling::p/following-sibling::div/button[.='Participate']")));
		
		List<WebElement> status = driver.findElements(By.xpath("//a[@class='status']/span[.='OPEN']/ancestor::a/following-sibling::p/following-sibling::div/button[.='Participate']"));
		Boolean check = true;
		for(int i=0;i<status.size();i++) {
			Boolean temp=status.get(i).isEnabled();
			if(!temp) {
				check=false;
			}
			assertNotNull(status.get(i));
		}
		
		assertEquals("Matched", true, check);	
	}
	
	@Test
	public void fourthTest() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='span8']//span[.='Software Changes Survey']/../../div[@class='award']//img")));
		
		WebElement image = driver.findElement(By.xpath("//div[@class='span8']//span[.='Software Changes Survey']/../../div[@class='award']//img"));
		Boolean isImagePresent = (Boolean) ((JavascriptExecutor)driver).executeScript("return arguments[0].complete && typeof arguments[0].naturalWidth != \"undefined\" && arguments[0].naturalWidth > 0", image);
		if (!isImagePresent){
			System.out.println("Image not displayed.");
		}
	    else {
	    	System.out.println("Image displayed.");
	    }
	}

}