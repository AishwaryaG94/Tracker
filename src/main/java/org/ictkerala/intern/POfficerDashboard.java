package org.ictkerala.intern;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class POfficerDashboard {
	WebDriver driver;
	@FindBy(xpath="//input[@name = \"username\"]")
	private WebElement username;
	@FindBy(xpath="//input[@name = \"password\"]")
	private WebElement password;
	@FindBy(xpath="//button[text() = 'Login']")
	private WebElement lgbutton;
	@FindBy(xpath="//button[@type ='button' and @class = 'btn btn-success btn btn-primary']")
	private WebElement updtbutton;
	@FindBy(xpath="//h3[text()=\"Learner's form\"]")
	private WebElement uptext;
	@FindBy(xpath="//button[text()='Back to Dashboard']")
	private WebElement back2dash;
	@FindBy(xpath="//select[@name='pstatus']")
	private WebElement status;
	@FindBy(xpath="//select/option[contains(text(),\"Placed\")]")
	private WebElement opt1;
	@FindBy(xpath="//select/option[contains(text(),\"Job\")]")
	private WebElement opt2;
	@FindBy(xpath="//select/option[contains(text(),\"Not\")]")
	private WebElement opt3;
	@FindBy(xpath="//button[text()='Submit']")
	private WebElement sbmt;
	@FindBy(xpath="//td[text()='Placed']")
	private WebElement opt1text;
	@FindBy(xpath="//td[text()='Job seeking']")
	private WebElement opt2text;
	@FindBy(xpath="//td[text()='Not Interested']")
	private WebElement opt3text;
	@FindBy(xpath="//span[text() = 'Placement']")
	private WebElement textpoff;
	@FindBy(xpath="//a[@id='basic-nav-dropdown']")
	private WebElement lgomenu;
	@FindBy(xpath="//a[@class='dropdown-item'][2]")
	private WebElement lgout;
	
	public POfficerDashboard(WebDriver driver)
	{
	this.driver = driver;
	PageFactory.initElements(driver, this);
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
	public void updatebtn()
	{
		updtbutton.click();
	}
	public String textedit()
	{
	String actl46 = uptext.getText();
	return(actl46);
	}
	public void backdash()
	{
		back2dash.click();
	}
	public void statusp()
	{
		status.click();
	}
	public void option1()
	{
		opt1.click();
	}
	public void option2()
	{
		opt2.click();
	}
	public void option3()
	{
		opt3.click();
	}
	public void submit()
	{
		sbmt.click();
	}
	public String textopt1()
	{
	String actl51 = opt1text.getText();
	return(actl51);
	}
	public String textopt2()
	{
	String actl52 = opt2text.getText();
	return(actl52);
	}
	public String textopt3()
	{
	String actl53 = opt3text.getText();
	return(actl53);
	}
	public String lgpofftext()
	{
	String actl2 = textpoff.getText();
	return(actl2);
	}
	public void lgo1()
	{
		lgomenu.click();
		lgout.click();
	}

}
