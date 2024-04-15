package org.ictkerala.intern;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login {
	WebDriver driver;
	@FindBy(xpath="//p[text() = 'ICTAK - Learner Tracker']")
	private WebElement landtext;
	@FindBy(xpath="//input[@name = \"username\"]")
	private WebElement username;
	@FindBy(xpath="//input[@name = \"password\"]")
	private WebElement password;
	@FindBy(xpath="//button[text() = 'Login']")
	private WebElement lgbutton;
	@FindBy(xpath="//span[text() = 'Learners']")
	private WebElement texttrainer;
	@FindBy(xpath="//a[@id='basic-nav-dropdown']")
	private WebElement lgomenu;
	@FindBy(xpath="//a[@class='dropdown-item'][2]")
	private WebElement lgout;
	@FindBy(xpath="//span[text()='Placement']")
	private WebElement pofftext;
	@FindBy(xpath="//div[text()='Login Failed!!']")
	private WebElement alrt;
	@FindBy(xpath="//small[text()='Password is required.']")
	private WebElement msgps;
	@FindBy(xpath="//small[text()='Username is required.']")
	private WebElement msgusr;
	
	public Login(WebDriver driver)
	{
	this.driver = driver;
	PageFactory.initElements(driver, this);
	}
public String landingtext()
	{
	String actl1 = landtext.getText();
	return(actl1);
	}
public void setusername(String nme)
{
	username.clear();
	username.sendKeys(nme);

}
public void setpass(String nme)
{
	password.clear();
	password.sendKeys(nme);

}
public void lgbtn()
{
	lgbutton.click();
}
public String lg1text()
{
String actl2 = texttrainer.getText();
return(actl2);
}
public void lgo1()
{
	lgomenu.click();
	lgout.click();
}
public String ptext()
{
String actl3 = pofftext.getText();
return(actl3);
}
public boolean alrtadmin()
{
	return alrt.getText().toString().contains("Login Failed!!");
}
public String ermsgp()
{

String actl4 =msgps.getText();
return(actl4);
}
public String ermsgus()
{

String actl5 =msgusr.getText();
return(actl5);
}
}

