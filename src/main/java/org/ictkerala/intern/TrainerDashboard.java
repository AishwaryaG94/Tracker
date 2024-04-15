package org.ictkerala.intern;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TrainerDashboard {
	WebDriver driver;
	@FindBy(xpath="//input[@name = \"username\"]")
	private WebElement username;
	@FindBy(xpath="//input[@name = \"password\"]")
	private WebElement password;
	@FindBy(xpath="//button[text() = 'Login']")
	private WebElement lgbutton;
	@FindBy(xpath="//*[@name = 'person-add-outline']")
	private WebElement singlelrnr;
	@FindBy(xpath="//button[text()='Back to Dashboard']")
	private WebElement back2dash;
	@FindBy(xpath="//div[@class='head-div']")
	private WebElement toplogo;
	@FindBy(xpath="//p[text() = 'ICTAK - Learner Tracker']")
	private WebElement landtext;
	@FindBy(xpath="//span[text() = 'Learners']")
	private WebElement texttrainer;
	@FindBy(xpath="//a[@class='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1']")
	private WebElement bottmlogo;
	@FindBy(xpath="//a[@id='basic-nav-dropdown']")
	private WebElement lgomenu;
	@FindBy(xpath="//a[@class='dropdown-item'][2]")
	private WebElement lgout;
	@FindBy(xpath="//*[@name = 'cloud-upload']")
	private WebElement bulklrnrs;
	@FindBy(xpath="//button[@class = 'ui mini button']")
	private WebElement bulkcancel;
	@FindBy(xpath="//*[@name = 'create']")
	private WebElement edit;
	@FindBy(xpath="//h3[text()=\"Learner's form\"]")
	private WebElement edittext;
	@FindBy(xpath="//button[@class=\"btn btn-danger\"]")
	private WebElement delete;
	@FindBy(xpath="//i[@class='fa fa-bars fa-large']")
	private WebElement maximise;
	@FindBy(xpath="//input[@type='file']")
	private WebElement choose;
	@FindBy(xpath="//button[text() = 'Submit']")
	private WebElement submit;
	@FindBy(xpath="//h2[text() = 'Data added successfully..!']")
	private WebElement submitsuccessfulmsg;
	@FindBy(xpath="//button[text() = 'Return to Dashboard']")
	private WebElement back2dashboard;
	@FindBy(xpath="//button[text() = 'OK']")
	private WebElement OKbutton;
	@FindBy(xpath="//input[@id='learnerid']")
	private WebElement id;
	@FindBy(xpath="//input[@id='name']")
	private WebElement name;
	@FindBy(xpath="//select[@name='course']")
	private WebElement crse;
	@FindBy(xpath="//select[@name='project']")
	private WebElement pjt;
	@FindBy(xpath="//select[@name='batch']")
	private WebElement batch;
	@FindBy(xpath="//select[@name='cstatus']")
	private WebElement crsestatus;
	@FindBy(xpath="//p[text()='Must contain letters,numbers and - only']")
	private WebElement error1;
	@FindBy(xpath="//p[text()='Must contain letters only']")
	private WebElement error2;
	@FindBy(xpath="//p[text()='Please select a course for the learner']")
	private WebElement error3;
	@FindBy(xpath="//p[text()='Please select a project for the learner']")
	private WebElement error4;
	@FindBy(xpath="//p[text()='Please select a batch for the learner']")
	private WebElement error5;
	@FindBy(xpath="//p[text()='Please select the course status of the learner']")
	private WebElement error6;
	@FindBy(xpath="//div[text()='Posted successfully']")
	private WebElement submitsuccess;
	
	
	public TrainerDashboard(WebDriver driver)
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
	public void addsingle()
	{
		singlelrnr.click();
	}
	public void backdash()
	{
		back2dash.click();
	}
	public void logo1()
	{
		bottmlogo.click();
	}
	public void logo2()
	{
		toplogo.click();
	}
	public String landingtext()
	{
	String actl41 = landtext.getText();
	return(actl41);
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
	public void addbulk()
	{
		bulklrnrs.click();
	}
	public void cancelbulk()
	{
		bulkcancel.click();
	}
	public void editbtn()
	{
		edit.click();
	}
	public String textedit()
	{
	String actl46 = edittext.getText();
	return(actl46);
	}
	public void deletebtn()
	{
		delete.click();
	}
	public void maximisebtn()
	{
		maximise.click();
	}
	public void choosebtn()
	{
		
		choose.sendKeys("C:\\Users\\SONY\\Downloads\\SampleCSV - Sheet1.csv");
		
	}
	public void submitbttn()
	{
	submit.click();	
	}
	public String textsubmit()
	{
	String actl44 = submitsuccessfulmsg.getText();
	return(actl44);
	}
	public void backbutton()
	{
	back2dashboard.click();	
	}
	public void ok()
	{
	OKbutton.click();	
	}
	public void setid(String fld)
	{
		id.sendKeys(fld);
	}
	public void setname(String fld)
	{
		name.sendKeys(fld);
	}
	public void setcrse(String fld)
	{
		crse.sendKeys(fld);
	}
	public void setpjt(String fld)
	{
		pjt.sendKeys(fld);
	}
	public void setbatch(String fld)
	{
		batch.sendKeys(fld);
	}
	public void setstatus(String fld)
	{
		crsestatus.sendKeys(fld);
	}
	public String error1text()
	{
	String actl1 = error1.getText();
	return(actl1);
	}
	public String error2text()
	{
	String actl1 = error2.getText();
	return(actl1);
	}
	public String error3text()
	{
	String actl1 = error3.getText();
	return(actl1);
	}
	public String error4text()
	{
	String actl1 = error4.getText();
	return(actl1);
	}
	public String error5text()
	{
	String actl1 = error5.getText();
	return(actl1);
	}
	public String error6text()
	{
	String actl1 = error6.getText();
	return(actl1);
	}
	public String submittext()
	{
	String actl1 = submitsuccess.getText();
	return(actl1);
	}
	
}
