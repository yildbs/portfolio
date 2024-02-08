import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";

let danusys = new AffiliationHistory("20161101", "20200331", "Danusys", "Danusys", "");

// danusys.pushExperience(new AffiliationExperience("Tempaa", "20180214"))
// const testExperience = new AffiliationExperience("Test Title", "20170101", "20181231");
// testExperience.addDescription("Test Description 1");
// testExperience.addDescription("Test Description 2");
// testExperience.addDescription("Test Description 3");
// testExperience.setFeatured(true);

const experienceArmy = new AffiliationExperience("병역특례 전문연구요원", "20170226", "20200227");
danusys.pushExperience(experienceArmy);

const experienceKisa = new AffiliationExperience("KISA 지능형 CCTV 인증", "20170801", "20180731");
experienceKisa.addDescription("KISA 지능형 CCTV 인증 획득");
experienceKisa.addReferenceUrl("KISA(배회,침입,유기)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1707&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4");
experienceKisa.addReferenceUrl("KISA(배회,침입,쓰러짐)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1725&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4");
experienceKisa.addReferenceUrl("KISA(배회,침투,유기,싸움)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1732&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4");
experienceKisa.addReferenceUrl("KISA(배회,침입,유기)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1786&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4");
danusys.pushExperience(experienceKisa);

const experienceDanuNet = new AffiliationExperience("DanuNet 개발", "20170101", "20180731");
experienceDanuNet.addDescription("딥러닝 영상 분석 라이브러리 개발");
experienceDanuNet.addDescription("TF 학습 웨이트가 C++에서 돌수 있도록 구현");
experienceDanuNet.addDescription("딥러닝 네트워크 C++(+CUDA +cuDNN) 으로 구현 (Tiny YOLO v2, LeNet 등)");
experienceDanuNet.addDescription("검출된 객체의 추적 및 행위 판단 알고리즘 구현");
experienceDanuNet.addDescription("언어: C++, CUDA, Python (Tensorflow)");
danusys.pushExperience(experienceDanuNet);

const experienceAinos = new AffiliationExperience("Ainos 개발", "20180801", "20200331");
experienceAinos.addDescription("Ainos: 다누시스 지능형 CCTV 영상 분석 서버");
experienceAinos.addDescription("32CH 동시 처리");
experienceAinos.addDescription("CCTV 영상 입력 받아서 분석하여 이벤트 알림");
experienceAinos.addReferenceUrl("다누시스 지능형 CCTV 서비스", "http://www.danusys.com/renew_solution/intel01.php")
danusys.pushExperience(experienceAinos);



// import temp1 from "../assets/temp2.png"
// import temp2 from "../assets/temp2.png"
// import temp3 from "../assets/temp2.png"
// import temp4 from "../assets/temp2.png"
// testExperience.addImage(temp1);
// testExperience.addImage(temp2);
// testExperience.addImage(temp3);
// testExperience.addImage(temp4);
// danusys.pushExperience(testExperience);

export default danusys;