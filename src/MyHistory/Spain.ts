
import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";
import  Calification from "../assets/윤일로_DELE_B1_자격증명서.pdf"

let spain = new AffiliationHistory("20200831", "20210201", "Spainish", "Go to Spain", "Return to Korea");
const studySpainish = new AffiliationExperience("Study Spainsh", "20200401", "20200831");
studySpainish.addDescription("I was planning to leave for Spain right after leaving the company, but due to the coronavirus issue, I ended up studying Spanish in Korea for a few months.");
spain.pushExperience(studySpainish);

const dele = new AffiliationExperience("DELE B1", "20200915");
dele.addReferenceUrl("DELE B1 자격 증명", Calification);
spain.pushExperience(dele);

export default spain;