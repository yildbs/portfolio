
import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";

let uos= new AffiliationHistory(
  "20110301",
  "20161031",
  "Univ. of Seoul",
  "Univ. of Seoul",
  ""
);

uos.pushExperience(new AffiliationExperience("UOS Bachelor's Degree", "20150214"))
uos.pushExperience(new AffiliationExperience("UOS Master's Degree", "20170214")) 

export default uos;