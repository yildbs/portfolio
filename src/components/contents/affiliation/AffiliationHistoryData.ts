import { AffiliationHistory } from "./AffiliationHistory";

let uos_bachelor = new AffiliationHistory(
  "20110301",
  "20150228",
  "Univ. of Seoul",
  "Bachelor's degree"
);
let uos_master = new AffiliationHistory(
  "20150301",
  "20170228",
  "Univ. of Seoul",
  "Master's degree"
);
let danusys = new AffiliationHistory("20161101", "20200331", "Danusys", "");
let spain = new AffiliationHistory("20200401", "20210201", "Spain", "");
let innodep = new AffiliationHistory("20210322", "20211007", "Innodep", "");
let deepixel = new AffiliationHistory("20211018", "0", "Deepixel", "ing..");

export default [uos_bachelor, uos_master, danusys, spain, innodep, deepixel];
