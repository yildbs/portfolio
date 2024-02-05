import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";

let danusys = new AffiliationHistory("20161101", "20200331", "Danusys", "Danusys", "");
danusys.pushExperience(new AffiliationExperience("Tempaa", "20180214"))
const testExperience = new AffiliationExperience("Test Title", "20170101", "20181231");
testExperience.addDescription("Test Description 1");
testExperience.addDescription("Test Description 2");
testExperience.addDescription("Test Description 3");
testExperience.setFeatured(true);

import temp1 from "../assets/temp2.png"
import temp2 from "../assets/temp2.png"
import temp3 from "../assets/temp2.png"
import temp4 from "../assets/temp2.png"
testExperience.addImage(temp1);
testExperience.addImage(temp2);
testExperience.addImage(temp3);
testExperience.addImage(temp4);
danusys.pushExperience(testExperience);

export default danusys;