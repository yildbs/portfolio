import { AffiliationExperience } from "../components/contents/affiliation/AffiliationExperience";
import { AffiliationHistory } from "../components/contents/affiliation/AffiliationHistory";


let deepixel = new AffiliationHistory("20211018", "0", "Deepixel", "ing..");


const wasm = new AffiliationExperience("StyleAR Web Live SDK 개발", "20211101", "20220631");
wasm.addDescription("기존 C++ 소스코드가 웹에서 수행되도록 WASM 선행 개발");
wasm.addDescription("C++ 엔진의 추론 결과를 바탕으로 이미지(얼굴, 손목, 손가락 등)에 상품을 그리는 기능");
wasm.addDescription("귀걸이, 팔찌, 시계, 반지 등");
wasm.addDescription("ThreeJS, AmmoJS를 이용해 귀걸이 물리효과 적용");
wasm.addDescription("2023년에 출시한 StyleAR Seamless의 발판이 됨");
wasm.addReferenceUrl("골든듀 심리스", "https://stylearseamless.deepixel.xyz/goldendew?itemId=2&lang=ko");
wasm.addReferenceUrl("SUPRA 심리스", "https://stylearseamless.deepixel.xyz/supra");
deepixel.pushExperience(wasm);

const webannotator = new AffiliationExperience("웹 어노테이터 개발", "20220208", "20220630");
webannotator.addDescription("딥픽셀 웹 어노테이터의 초기 버전 개발");
webannotator.addDescription("React, ThreeJS 사용");
import deepixelwebannotator from "../assets/deepixelwebannotator.png"
webannotator.addImage(deepixelwebannotator)
deepixel.pushExperience(webannotator);

const facedetector = new AffiliationExperience("Face Detector 개발", "20220901", "20221031");
facedetector.addDescription("딥픽셀 기존 얼굴 검출 엔진의 성능 개선을 위해서 개발");
facedetector.addDescription("MobileNet, SSD 기반으로 개발함");
facedetector.addDescription("Tensorflow 사용");
deepixel.pushExperience(facedetector);

const iossdk = new AffiliationExperience("iOS SDK 개발", "20221101", "0");
iossdk.addDescription("TODO");
deepixel.pushExperience(iossdk);


const fbxmaker = new AffiliationExperience("FBXMaker 개발", "20230401", "20230531");
fbxmaker.addDescription("안경 2D 이미지로부터 3D 모델 만드는 툴");
fbxmaker.addDescription("Python 사용")
deepixel.pushExperience(fbxmaker);

const spacear = new AffiliationExperience("SpaceAR 프로토타입 개발", "20230101", "20230531");
spacear.addDescription("가구 가상 배치 앱");
spacear.addDescription("Flutter, ARCore(Android), ARKit(iOS), Unity 사용");
import spacearvideo from "../assets/SpaceAR.mp4"
spacear.addImage(spacearvideo);
deepixel.pushExperience(spacear);

const webspacear = new AffiliationExperience("Web SpaceAR 프로토타입 개발", "20230531", "20230630");
webspacear.addDescription("TODO");
deepixel.pushExperience(webspacear);

const galloping = new AffiliationExperience("갤로핑 AI Soccer Recorder 개발", "20231101", "0");
galloping.addDescription("축구 드리블 자세 분석을 위해 4방향에서 동시에 카메라 녹화하는 프로그램 개발");
galloping.addDescription("각 채널이 프레임 단위로 싱크가 맞도록 구현");
galloping.addDescription("C#(GUI), C++, CUDA, NVENC 사용");
deepixel.pushExperience(galloping);


export default deepixel;