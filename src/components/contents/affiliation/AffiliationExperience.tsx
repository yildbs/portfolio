import {
  convertTimestampToYYYYMM,
  convertYYYYMMDDToTimestamp,
} from "../util/Date";
import { AffiliationHistory } from "./AffiliationHistory";
import "./AffiliationExeprience.css";

export class AffiliationExperience {
  _startDate_yyyymmdd: string;
  _endDate_yyyymmdd: string;
  _startTimestamp: number;
  _endTimestamp: number;
  _title: string;
  _description: string | undefined;
  _isEnded = true;
  _root: AffiliationHistory | undefined = undefined;

  public get days() {
    return (this._endTimestamp - this._startTimestamp) / 1000 / 86400;
  }
  public get when() {
    return (this._endTimestamp + this._startTimestamp) / 2;
  }

  constructor(
    startDate_yyyymmdd: string,
    endDate_yyyymmdd: string,
    title: string,
    description: string | undefined = undefined
  ) {
    this._startDate_yyyymmdd = startDate_yyyymmdd;
    this._endDate_yyyymmdd = endDate_yyyymmdd;
    this._title = title;
    this._description = description;

    this._startTimestamp = convertYYYYMMDDToTimestamp(startDate_yyyymmdd);
    this._endTimestamp = convertYYYYMMDDToTimestamp(endDate_yyyymmdd);
  }

  setRoot(root: AffiliationHistory) {
    this._root = root;
  }

  renderDetail() {
    const size = 300;
    console.log("Hello");
    return (
      <div
        className="bg-accent2"
        style={{
          width: size + "px",
          height: size + "px",
        }}
      >
        <p>
          {convertTimestampToYYYYMM(this._startTimestamp)} ~ {convertTimestampToYYYYMM(this._endTimestamp)}
        </p>
        TEST
      </div>
    );
  }

  renderPoint(x: number, pxPerDay: number) {
    if (this._root == undefined) {
      throw new Error("root must not be undefined");
    }

    const firstTimestamp = this._root.startTimestamp;

    const elapsedDays = (this.when - firstTimestamp) / 1000 / 86400;
    const size = 15;
    const y = elapsedDays * pxPerDay;
    return (
      <>
        <div
          id="hover-div"
          className={
            "absolute bg-content rounded-full transform hover:scale-150 hover:cursor-pointer transition-transform duration-100"
          }
          style={{
            width: size + "px",
            height: size + "px",
            left: x - size / 2 + "px",
            top: y + "px",
            position: "absolute",
          }}
        >
          <div id="popup-div" className="flex absolute">
            {this.renderDetail()}
          </div>
        </div>
      </>
    );
  }
}
