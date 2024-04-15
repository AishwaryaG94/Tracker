package org.ictkerala.test_intern;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.time.Duration;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
public class Test_Base {
	//Checking the browser compatibility with chrome and edge browsers
			public static Properties properties;

			public WebDriver driver;
			public Test_Base()
			{
				properties = new Properties();
				InputStream input = null;
				
				try {
					input = new FileInputStream("config.properties");
					properties.load(input);
				}
				
				catch (FileNotFoundException fie)
				{
				fie.printStackTrace();
				}
				catch(IOException e)
				{
				e.printStackTrace();
				}
			}

			
			@BeforeClass
			public void initialisation()
			{
				String browser = properties.getProperty("browser");
				if (browser.equalsIgnoreCase("chrome"))
				{
			    driver = new ChromeDriver();
				}
				if (browser.equalsIgnoreCase("edge"))
				{
			    driver = new EdgeDriver();
				}
				if (browser.equalsIgnoreCase("firefox"))
				{
			    driver = new FirefoxDriver();
				}
			
				driver.get("https://learnertracker.netlify.app/");
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
			}
			
		   @AfterClass
		 public void end()
		   {
			  
			   driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(100));
		  }
		  

}
