package org.ictkerala.test_intern;
import java.time.Duration;
import org.ictkerala.intern.Login;
import org.ictkerala.intern.POfficerDashboard;
import org.ictkerala.intern.TrainerDashboard;
import org.testng.Assert;
import org.testng.annotations.Test;

public class Test_Login extends Test_Base  {
	 Login lgobj;
	 TrainerDashboard trnobj;
	 POfficerDashboard poffobj;

	//Check the loading of the ICTAK Learner Tracker Website
	@Test(priority=1)
		public void TC_L11()
		{
			lgobj = new Login(driver);
			String expectedhome = "ICTAK - Learner Tracker";
			String actualres1 = lgobj.landingtext();
			Assert.assertEquals(actualres1,expectedhome);
		}
	@Test(priority=2)
	public void TC_L21()
	
	{
		lgobj = new Login(driver);
		lgobj.setusername("trainer");
		lgobj.setpass("trainer@123");
		lgobj.lgbtn();
		String exptrainer = "Learners";
		String actualres2 = lgobj.lg1text();
		Assert.assertEquals(actualres2,exptrainer);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
		lgobj.lgo1();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	}
	@Test(priority=3)
	public void TC_L22()
	
	{
		lgobj = new Login(driver);
		lgobj.setusername("pofficer");
		lgobj.setpass("pofficer@123");
		lgobj.lgbtn();
		String exptpoff = "Placement";
		String actualres2 = lgobj.ptext();
		Assert.assertEquals(actualres2,exptpoff);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		lgobj.lgo1();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	}
	@Test(priority=4)
	public void TC_L23()
	
	{
		driver.navigate().refresh();
		lgobj = new Login(driver);
		lgobj.setusername("admin");
		lgobj.setpass("admin@123");
		lgobj.lgbtn();
		Assert.assertTrue(lgobj.alrtadmin());
	}
	@Test(priority=5)
	public void TC_L31()
	
	{   
		driver.navigate().refresh();
		lgobj = new Login(driver);
		lgobj.setusername("");
		lgobj.setpass("");
		lgobj.lgbtn();
		String msg32= lgobj.ermsgp();
		String msgpass = "Password is required.";
		Assert.assertEquals(msg32,msgpass);
		
	

}
@Test(priority=6)
	public void TC_L32()
	
	{	
		driver.navigate().refresh();
		lgobj = new Login(driver);
		lgobj.setusername("trainer");
		lgobj.setpass("");
		lgobj.lgbtn();
		String msg32= lgobj.ermsgp();
		String msgpass = "Password is required.";
		Assert.assertEquals(msg32,msgpass);
}
@Test(priority=7)
public void TC_L33()

{	
	driver.navigate().refresh();
	lgobj = new Login(driver);
	lgobj.setusername("");
	lgobj.setpass("trainer@123");
	lgobj.lgbtn();
	String msg33= lgobj.ermsgus();
	String msguser = "Username is required.";
	Assert.assertEquals(msg33,msguser);
}
@Test(priority=8)
public void TC_L34()

{
	driver.navigate().refresh();
	lgobj = new Login(driver);
	lgobj.setusername("");
	lgobj.setpass("");
	lgobj.lgbtn();
	String msg32= lgobj.ermsgp();
	String msgpass = "Password is required.";
	Assert.assertEquals(msg32,msgpass);
	


}
@Test(priority=9)
public void TC_L35()

{
	driver.navigate().refresh();
	lgobj = new Login(driver);
	lgobj.setusername("pofficer");
	lgobj.setpass("");
	lgobj.lgbtn();
	String msg32= lgobj.ermsgp();
	String msgpass = "Password is required.";
	Assert.assertEquals(msg32,msgpass);
}
@Test(priority=10)
public void TC_L36()

	{
	driver.navigate().refresh();
	lgobj = new Login(driver);
	lgobj.setusername("");
	lgobj.setpass("pofficer@123");
	lgobj.lgbtn();
	String msg33= lgobj.ermsgus();
	String msguser = "Username is required.";
	Assert.assertEquals(msg33,msguser);
	}

@Test(priority=11)
public void TC_TD41()

	{
	driver.navigate().refresh();
	trnobj = new TrainerDashboard(driver);
	trnobj.setusername("trainer");
	trnobj.setpass("trainer@123");
	trnobj.lgbtn();
	trnobj.logo1();
	String text = trnobj.landingtext();
	String expectedhome = "ICTAK - Learner Tracker";
	Assert.assertEquals(text,expectedhome);
	
	}
@Test(priority=12)
public void TC_TD42()

	{
	trnobj = new TrainerDashboard(driver);
	trnobj.setusername("trainer");
	trnobj.setpass("trainer@123");
	trnobj.lgbtn();
	trnobj.logo2();
	String text = trnobj.lg1text();
	String expectedhome = "ICTAK - Learner Tracker";
	Assert.assertNotEquals(text,expectedhome);
	trnobj.lgo1();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
	
	
	}
@Test(priority=13)
public void TC_TD43()

	{
	driver.navigate().refresh();
	trnobj = new TrainerDashboard(driver);
	trnobj.setusername("trainer");
	trnobj.setpass("trainer@123");
	trnobj.lgbtn();
	trnobj.addsingle();
	trnobj.backdash();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	}
@Test(priority=14)
public void TC_TD44()

	{
	/*driver.navigate().refresh();
	trnobj = new TrainerDashboard(driver);
	trnobj.setusername("trainer");
	trnobj.setpass("trainer@123");
	trnobj.lgbtn();*/
	trnobj.addbulk();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	trnobj.choosebtn();
	trnobj.submitbttn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	String actmsg = trnobj.textsubmit();
	String expmsg = "Data added successfully..!";
	Assert.assertEquals(actmsg,expmsg);
	trnobj.backbutton();
	trnobj.ok();
	}
@Test(priority=15)
public void TC_TD45()

	{
	driver.navigate().refresh();
	trnobj.addbulk();
	trnobj.cancelbulk();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	String text = trnobj.lg1text();
	String expectedhome = "Learners";
	Assert.assertEquals(text,expectedhome);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	
	}
@Test(priority=16)
public void TC_TD46()

	{
	driver.navigate().refresh();
	trnobj.editbtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	String text = trnobj.textedit();
	String expectedhome = "Learner's form";
	Assert.assertEquals(text,expectedhome);
	trnobj.backdash();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
	}
@Test(priority=17)
public void TC_TD47()

	{
	driver.navigate().refresh();
	trnobj.deletebtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	String text = trnobj.lg1text();
	String expectedhome = "Learners";
	Assert.assertEquals(text,expectedhome);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
	
	}
@Test(priority=18)
public void TC_TD48()

	{
	driver.navigate().refresh();
	trnobj.maximisebtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	String text = trnobj.lg1text();
	String expectedhome = "Learners";
	Assert.assertNotEquals(text,expectedhome);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	trnobj.lgo1();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
	
	
	}
@Test(priority=19)
public void TC_TPOD51()

	{
	driver.navigate().refresh();
	poffobj = new POfficerDashboard(driver);
	poffobj.setusername("pofficer");
	poffobj.setpass("pofficer@123");
	poffobj.lgbtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	poffobj.updatebtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	poffobj.statusp();
	poffobj.option1();
	poffobj.submit();
	String actltext = poffobj.textopt1();
	String exptext = "Placed";
	Assert.assertEquals(actltext,exptext);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	poffobj.lgo1();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
	
	}
@Test(priority=20)
public void TC_TPOD52()

	{
	driver.navigate().refresh();
	poffobj = new POfficerDashboard(driver);
	poffobj.setusername("pofficer");
	poffobj.setpass("pofficer@123");
	poffobj.lgbtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	poffobj.updatebtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	poffobj.statusp();
	poffobj.option2();
	poffobj.submit();
	String actltext = poffobj.textopt2();
	String exptext = "Job seeking";
	Assert.assertEquals(actltext,exptext);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	poffobj.lgo1();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
	}
@Test(priority=21)
public void TC_TPOD53()

	{
	driver.navigate().refresh();
	poffobj = new POfficerDashboard(driver);
	poffobj.setusername("pofficer");
	poffobj.setpass("pofficer@123");
	poffobj.lgbtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	poffobj.updatebtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	poffobj.statusp();
	poffobj.option3();
	poffobj.submit();
	String actltext = poffobj.textopt3();
	String exptext = "Not Interested";
	Assert.assertEquals(actltext,exptext);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	poffobj.lgo1();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
	}
@Test(priority=22)
public void TC_TPOD54()

	{
	driver.navigate().refresh();
	poffobj = new POfficerDashboard(driver);
	poffobj.setusername("pofficer");
	poffobj.setpass("pofficer@123");
	poffobj.lgbtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	poffobj.updatebtn();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	poffobj.backdash();
	String actltext = poffobj.lgpofftext();
	String exptext = "Placement";
	Assert.assertEquals(actltext,exptext);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	poffobj.lgo1();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(60));
	
	}
}
