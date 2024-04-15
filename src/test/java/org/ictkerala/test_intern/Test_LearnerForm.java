package org.ictkerala.test_intern;

import java.time.Duration;


import org.ictkerala.intern.TrainerDashboard;
import org.testng.Assert;
import org.testng.annotations.Test;

public class Test_LearnerForm extends Test_Base {
	TrainerDashboard trnobj;

@Test(priority=1)
public void TC_LF61()

{
	trnobj = new TrainerDashboard(driver);
	driver.navigate().refresh();
	trnobj.setusername("trainer");
	trnobj.setpass("trainer@123");
	trnobj.lgbtn();
	trnobj.addsingle();
	trnobj.setid("");
	trnobj.setname("");
	trnobj.setcrse("");
	trnobj.setpjt("");
	trnobj.setbatch("");
	trnobj.setstatus("");
	trnobj.submitbttn();
	String actlerror = trnobj.error1text();
	String experror = "Must contain letters,numbers and - only";
	Assert.assertEquals(actlerror,experror);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.backdash();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
}
@Test(priority=2)
public void TC_LF62()
{	driver.navigate().refresh();
	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("");
	trnobj.setcrse("");
	trnobj.setpjt("");
	trnobj.setbatch("");
	trnobj.setstatus("");
	trnobj.submitbttn();
	String actlerror = trnobj.error2text();
	String experror = "Must contain letters only";
	Assert.assertEquals(actlerror,experror);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.backdash();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=3)
public void TC_LF63()
{
	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("");
	trnobj.setpjt("");
	trnobj.setbatch("");
	trnobj.setstatus("");
	trnobj.submitbttn();
	String actlerror = trnobj.error3text();
	String experror = "Please select a course for the learner";
	Assert.assertEquals(actlerror,experror);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.backdash();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=4)
public void TC_LF64()
{
	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("FSD");
	trnobj.setpjt("");
	trnobj.setbatch("");
	trnobj.setstatus("");
	trnobj.submitbttn();
	String actlerror = trnobj.error4text();
	String experror = "Please select a project for the learner";
	Assert.assertEquals(actlerror,experror);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.backdash();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=5)
public void TC_LF65()
{
	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("DSA");
	trnobj.setpjt("ICTAK");
	trnobj.setbatch("");
	trnobj.setstatus("");
	trnobj.submitbttn();
	String actlerror = trnobj.error5text();
	String experror = "Please select a batch for the learner";
	Assert.assertEquals(actlerror,experror);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.backdash();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=6)
public void TC_LF66()
{

	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("DSA");
	trnobj.setpjt("ICTAK");
	trnobj.setbatch("May_22");
	trnobj.setstatus("");
	trnobj.submitbttn();
	String actlerror = trnobj.error6text();
	String experror = "Please select the course status of the learner";
	Assert.assertEquals(actlerror,experror);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.backdash();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=7)
public void TC_LF67()
{

	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("ML-AI");
	trnobj.setpjt("KKEM");
	trnobj.setbatch("June_22");
	trnobj.setstatus("Qualified");
	trnobj.submitbttn();
	String actlmsg = trnobj.submittext();
	String expmsg = "Posted successfully";
	Assert.assertEquals(actlmsg,expmsg);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.ok();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=8)
public void TC_LF68()
{

	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("RPA");
	trnobj.setpjt("NORKA");
	trnobj.setbatch("June_22");
	trnobj.setstatus("Incompetent");
	trnobj.submitbttn();
	String actlmsg = trnobj.submittext();
	String expmsg = "Posted successfully";
	Assert.assertEquals(actlmsg,expmsg);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.ok();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=9)
public void TC_LF69()
{

	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("ST");
	trnobj.setpjt("ABCD");
	trnobj.setbatch("August_22");
	trnobj.setstatus("Qualified");
	trnobj.submitbttn();
	String actlmsg = trnobj.submittext();
	String expmsg = "Posted successfully";
	Assert.assertEquals(actlmsg,expmsg);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.ok();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=10)
public void TC_LF610()
{

	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("CSA");
	trnobj.setpjt("KDISC");
	trnobj.setbatch("December_22");
	trnobj.setstatus("Qualified");
	trnobj.submitbttn();
	String actlmsg = trnobj.submittext();
	String expmsg = "Posted successfully";
	Assert.assertEquals(actlmsg,expmsg);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.ok();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=11)
public void TC_LF611()
{

	trnobj.addsingle();
	trnobj.setid("01");
	trnobj.setname("Aishwarya G");
	trnobj.setcrse("CSA");
	trnobj.setpjt("KDISC");
	trnobj.setbatch("March_22");
	trnobj.setstatus("Incompetent");
	trnobj.submitbttn();
	String actlmsg = trnobj.submittext();
	String expmsg = "Posted successfully";
	Assert.assertEquals(actlmsg,expmsg);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	trnobj.ok();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	
}
@Test(priority=12)
public void TC_LF612()
{

	trnobj.addsingle();
	trnobj.backdash();
	String actlmsg = trnobj.lg1text();
	String expmsg = "Learners";
	Assert.assertEquals(actlmsg,expmsg);
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	
}
}
