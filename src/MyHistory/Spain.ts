
import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";

let spain = new AffiliationHistory("20200831", "20210201", "Spainish", "Go to Spain", "Return to Korea");
const studySpainish = new AffiliationExperience("Study Spainsh", "20200401", "20200831");
studySpainish.addDescription("I was planning to leave for Spain right after leaving the company, but due to the coronavirus issue, I ended up studying Spanish in Korea for a few months.");
spain.pushExperience(studySpainish);

export default spain;