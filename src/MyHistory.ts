import { AffiliationExperience } from "./components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "./components/contents/affiliation/AffiliationHistory";

let uos= new AffiliationHistory(
  "20110301",
  "20161031",
  "Univ. of Seoul",
  "Univ. of Seoul",
  ""
);
let danusys = new AffiliationHistory("20161101", "20200331", "Danusys", "Join to Danusys", "");
let spain = new AffiliationHistory("20200831", "20210201", "Spain", "Go to Spain", "Return to Korea");
let innodep = new AffiliationHistory("20210322", "20211007", "Innodep", "Join to Innodep", "");
let deepixel = new AffiliationHistory("20211018", "0", "Deepixel", "Join to Deepixel", "ing..");

// uos_bachelor.pushExperience(new AffiliationExperience("20110301", "20110301", "Admission to University of Seoul"))
// uos_bachelor.pushExperience(new AffiliationExperience("20120301", "20120301", "uos1"))
// uos_master.pushExperience(new AffiliationExperience("20150301", "20170228", "master"))

uos.pushExperience(new AffiliationExperience("UOS Bachelor's Degree", "20150214"))
uos.pushExperience(new AffiliationExperience("UOS Master's Degree", "20170214")) 

danusys.pushExperience(new AffiliationExperience("Tempaa", "20180214"))

// spain.pushExperience(new AffiliationExperience("20200401", "20210201", "Spain!! "))

// deepixel.pushExperience(new AffiliationExperience("20220101", "20220101", "Test1 "))
// deepixel.pushExperience(new AffiliationExperience("20220201", "20220301", "Test2 "))
// deepixel.pushExperience(new AffiliationExperience("20220301", "20220401", "Test3 "))

export default [uos, danusys, spain, innodep, deepixel];
