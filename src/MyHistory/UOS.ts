
import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";

let uos= new AffiliationHistory(
  "20110301",
  "20161031",
  "Univ. of Seoul",
  "Univ. of Seoul",
  ""
);

uos.pushExperience(new AffiliationExperience("UOS 전자전기컴퓨터공학 학사졸업", "20150214"))
uos.pushExperience(new AffiliationExperience("UOS 전자전기컴퓨터공학 석사졸업", "20170214")) 

export default uos;