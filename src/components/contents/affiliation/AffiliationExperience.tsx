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
  //   _description: string | undefined;
  _descriptions: string[] = [];
  _referenceUrls: string[] = [];
  _isEnded = true;
  _isJustEvent = false;
  _root: AffiliationHistory | undefined = undefined;

  public get days() {
    return (this._endTimestamp - this._startTimestamp) / 1000 / 86400;
  }
  public get when() {
    return (this._endTimestamp + this._startTimestamp) / 2;
  }

  constructor(
    title: string,
    startDate_yyyymmdd: string,
    endDate_yyyymmdd: string | undefined = undefined
  ) {
    this._startDate_yyyymmdd = startDate_yyyymmdd;
    this._endDate_yyyymmdd = startDate_yyyymmdd;
    if (endDate_yyyymmdd == undefined) {
      this._isJustEvent = true;
    }

    this._title = title;

    this._startTimestamp = convertYYYYMMDDToTimestamp(startDate_yyyymmdd);
    this._endTimestamp = convertYYYYMMDDToTimestamp(
      endDate_yyyymmdd ?? startDate_yyyymmdd
    );
  }

  addDescription(description: string) {
    this._descriptions.push(description);
  }

  addReferenceUrl(url: string) {
    this._referenceUrls.push(url);
  }

  setRootHistory(root: AffiliationHistory) {
    this._root = root;
  }

  renderDetail() {
    const size = 300;
    return (
      <div
        className="bg-secondary"
        style={{
          width: size + "px",
          height: size + "px",
        }}
      >
        {!this._isJustEvent && (
          <p>
            {convertTimestampToYYYYMM(this._startTimestamp)} ~{" "}
            {convertTimestampToYYYYMM(this._endTimestamp)}
          </p>
        )}
        {this._isJustEvent && (
          <p>{convertTimestampToYYYYMM(this._startTimestamp)}</p>
        )}

        {this._title}
        {this._descriptions.map((des) => {
          return <div>{des}</div>;
        })}
      </div>
    );
  }

  renderPoint(x: number, firstTimestamp: number, pxPerDay: number) {
    if (this._root == undefined) {
      throw new Error("root must not be undefined");
    }

    // const firstTimestamp = this._root.startTimestamp;

    const elapsedDays = (this.when - firstTimestamp) / 1000 / 86400;
    const size = 15;
    const y = elapsedDays * pxPerDay;

    const arrowDistance = 40;
    const arrowHeight = size / 4;
    return (
      <>
        <div
          id="hover-div"
          className={
            "z-50 absolute bg-content rounded-full transform hover:scale-150 hover:cursor-pointer transition-transform duration-100"
          }
          style={{
            width: size + "px",
            height: size + "px",
            left: x - size / 2 + "px",
            top: y + "px",
            position: "absolute",
          }}
        >
          {/* className={"flex pl-1 float-right text-primary font-extrabold text-xl" + props.align} */}
          {this._isJustEvent && (
            <div
              className="flex w-64 float-right justify-end text-base inline-block items-center text-primary "
              style={{
                height: size * 4 + "px",
                transform:
                  "translate(" +
                  -size * 1.5 +
                  "px, " +
                  -(size * 2 - size / 2) +
                  "px)",
              }}
            >
              {this._title}
            </div>
          )}

          {!this._isJustEvent && (
            <div id="popup-div" className="flex absolute">
              <div
                className={"absolute bg-content "}
                style={{
                  width: arrowDistance,
                  height: arrowHeight,
                  transform:
                    "translate(" +
                    "0px, " +
                    (size / 2 - arrowHeight / 2) +
                    "px)",
                }}
              ></div>

              <div className="flex items-center">
                <div className="border-t-2 border-dashed border-primary h-0 w-24"></div>
                <div className="w-3 h-3 border-primary border-t-2 border-r-2 rotate-45 transform"></div>
              </div>

              <div
                style={{
                  transform: "translate(" + arrowDistance + "px, " + 0 + "px)",
                }}
              >
                {this.renderDetail()}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
