
import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";
import  Calification from "../assets/윤일로_DELE_B1_자격증명서.pdf"

import spain1 from "../assets/spain1.jpeg"
import spain2 from "../assets/spain2.jpeg"

let spain = new AffiliationHistory("20200401", "20210201", "Study Spainish", "Study Spainish", "Return to Korea");

const studySpainish = new AffiliationExperience("스페인어 공부", "20200401", "20200831");
studySpainish.addDescription("코로나 이슈로 한국에서 스페인어 공부함");
spain.pushExperience(studySpainish);

const dele = new AffiliationExperience("DELE B1", "20200915");
dele.addReferenceUrl("DELE B1 자격 증명", Calification);
spain.pushExperience(dele);

const gotoSpain = new AffiliationExperience("스페인 생활", "20200901", "20210201");
gotoSpain.addImage(spain1);
gotoSpain.addImage(spain2);
gotoSpain.addDescription("스페인 워킹홀리데이 비자로 스페인 가서 5개월 거주");
gotoSpain.addDescription("2021년 2월 한국 복귀");
spain.pushExperience(gotoSpain);

export default spain;