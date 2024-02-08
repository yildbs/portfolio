import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";

let danusys = new AffiliationHistory("20161101", "20200331", "Danusys", "Danusys", "");

// danusys.pushExperience(new AffiliationExperience("Tempaa", "20180214"))

const testExperience = new AffiliationExperience("Test Title", "20170101", "20181231");
testExperience.addDescription("Test Description 1");
testExperience.addDescription("Test Description 2");
testExperience.addDescription("Test Description 3");
testExperience.setFeatured(true);

const experienceKisa = new AffiliationExperience("KISA 지능형 CCTV 인증", "20170101", "20180731");
experienceKisa.addDescription("");
experienceKisa.addReferenceUrl("KISA(배회,침입,유기)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1707&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4");
experienceKisa.addReferenceUrl("KISA(배회,침입,쓰러짐)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1725&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4");
experienceKisa.addReferenceUrl("KISA(배회,침투,유기,싸움)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1732&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4");
experienceKisa.addReferenceUrl("KISA(배회,침입,유기)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1786&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4");


danusys.pushExperience(experienceKisa);


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