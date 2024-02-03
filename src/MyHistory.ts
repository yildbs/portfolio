import { AffiliationExperience } from "./components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "./components/contents/affiliation/AffiliationHistory";

let uos= new AffiliationHistory(
  "20110301",
  "20161031",
  "Univ. of Seoul",
  "Univ. of Seoul",
  ""
);
let danusys = new AffiliationHistory("20161101", "20200331", "Danusys", "Danusys", "");
let spain = new AffiliationHistory("20200831", "20210201", "Spain", "Go to Spain", "Return to Korea");
let innodep = new AffiliationHistory("20210322", "20211007", "Innodep", "Innodep", "");
let deepixel = new AffiliationHistory("20211018", "0", "Deepixel", "Deepixel", "ing..");

// uos_bachelor.pushExperience(new AffiliationExperience("20110301", "20110301", "Admission to University of Seoul"))
// uos_bachelor.pushExperience(new AffiliationExperience("20120301", "20120301", "uos1"))
// uos_master.pushExperience(new AffiliationExperience("20150301", "20170228", "master"))

uos.pushExperience(new AffiliationExperience("UOS Bachelor's Degree", "20150214"))
uos.pushExperience(new AffiliationExperience("UOS Master's Degree", "20170214")) 

danusys.pushExperience(new AffiliationExperience("Tempaa", "20180214"))

const testExperience = new AffiliationExperience("Test Title", "20170101", "20181231");
testExperience.addDescription("Test Description 1");
testExperience.addDescription("Test Description 2");
testExperience.addDescription("Test Description 3");

import temp1 from "./assets/temp2.png"
import temp2 from "./assets/temp2.png"
import temp3 from "./assets/temp2.png"
import temp4 from "./assets/temp2.png"
testExperience.addImage(temp1);
testExperience.addImage(temp2);
testExperience.addImage(temp3);
testExperience.addImage(temp4);


danusys.pushExperience(testExperience);

// spain.pushExperience(new AffiliationExperience("20200401", "20210201", "Spain!! "))

// deepixel.pushExperience(new AffiliationExperience("20220101", "20220101", "Test1 "))
// deepixel.pushExperience(new AffiliationExperience("20220201", "20220301", "Test2 "))
// deepixel.pushExperience(new AffiliationExperience("20220301", "20220401", "Test3 "))

export default [uos, danusys, spain, innodep, deepixel];
