import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";


let innodep = new AffiliationHistory("20210322", "20211007", "Innodep", "Innodep", "");


const experienceKisa = new AffiliationExperience("KISA 지능형 CCTV 인증", "20210701", "20211007");
experienceKisa.addDescription("KISA 지능형 CCTV 인증 획득");
experienceKisa.addReferenceUrl("KISA(배회,침투,유기,싸움)", "https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1938&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EC%9D%B4%EB%85%B8%EB%8E%81");
innodep.pushExperience(experienceKisa);

const experienceIDL = new AffiliationExperience("IDL 개발", "20210401", "20211007");
experienceIDL.addDescription("IDL: 이노뎁 딥러닝 영상 분석 라이브러리");
experienceIDL.addDescription("C++, CUDA, PyTorch");
innodep.pushExperience(experienceIDL);

export default innodep;