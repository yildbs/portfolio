import { AffiliationExperience } from "./components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "./components/contents/affiliation/AffiliationHistory";

let uos_bachelor = new AffiliationHistory(
  "20110301",
  "20150228",
  "Univ. of Seoul",
  "Bachelor's degree"
);
let uos_master = new AffiliationHistory(
  "20150301",
  "20170228",
  "Univ. of Seoul",
  "Master's degree"
);
let danusys = new AffiliationHistory("20161101", "20200331", "Danusys", "");
let spain = new AffiliationHistory("20200401", "20210201", "Spain", "");
let innodep = new AffiliationHistory("20210322", "20211007", "Innodep", "");
let deepixel = new AffiliationHistory("20211018", "0", "Deepixel", "ing..");

uos_bachelor.pushExperience(new AffiliationExperience("20110301", "20110301", "Admission to University of Seoul"))
uos_bachelor.pushExperience(new AffiliationExperience("20120301", "20120301", "uos1"))

uos_master.pushExperience(new AffiliationExperience("20150301", "20170228", "master"))

spain.pushExperience(new AffiliationExperience("20200401", "20210201", "Spain!! "))

deepixel.pushExperience(new AffiliationExperience("20220101", "20220101", "Test1 "))
deepixel.pushExperience(new AffiliationExperience("20220201", "20220301", "Test2 "))
deepixel.pushExperience(new AffiliationExperience("20220301", "20220401", "Test3 "))

export default [uos_bachelor, uos_master, danusys, spain, innodep, deepixel];
