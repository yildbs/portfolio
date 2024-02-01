import {
  convertTimestampToYYYYMMDD,
  convertTimestampToYYYYMM,
  convertYYYYMMDDToTimestamp,
} from "../util/Date";

export class AffiliationHistory {
  _startDate_yyyymmdd: string;
  _endDate_yyyymmdd: string;
  _affiliation: string;
  _startTimestamp: number;
  _endTimestamp: number;
  _isEnded = true;

  public get startDate_yyyymmdd() {
    return this._startDate_yyyymmdd;
  }
  public get endDate_yyyymmdd() {
    return this._endDate_yyyymmdd;
  }
  public get affiliation() {
    return this._affiliation;
  }
  public get startTimestamp() {
    return this._startTimestamp;
  }
  public get endTimestamp() {
    return this._endTimestamp;
  }
  public get days() {
    return (this._endTimestamp - this.startTimestamp) / 1000 / 86400;
  }

  constructor(
    startDate_yyyymmdd: string,
    endDate_yyyymmdd: string,
    affiliation: string
  ) {
    if (endDate_yyyymmdd === "0") {
      endDate_yyyymmdd = convertTimestampToYYYYMMDD(Date.now());
      this._isEnded = false;
    }

    this._startDate_yyyymmdd = startDate_yyyymmdd;
    this._endDate_yyyymmdd = endDate_yyyymmdd;
    this._affiliation = affiliation;

    this._startTimestamp = convertYYYYMMDDToTimestamp(startDate_yyyymmdd);
    this._endTimestamp = convertYYYYMMDDToTimestamp(endDate_yyyymmdd);

    if (this._startTimestamp > this._endTimestamp) {
      throw new Error("Start must be smaller than end.");
    }
  }

  render(index: number, firstTimestamp: number, pxPerDay: number) {
    const elapsedDays = (this.startTimestamp - firstTimestamp) / 1000 / 86400;
    const widthMain = 200;
    const isLeft = index % 2 == 0;

    const circleSize = 30;
    const barX = isLeft
      ? widthMain * 0.8 - circleSize
      : widthMain * 0.2 - circleSize / 2;

    const dateX = isLeft ? 0 : barX + circleSize + 10;
    const heightMain = this.days * pxPerDay;
    const widthDate = widthMain * 0.6 ;
    const heightDate = 30;
    const dateAlign = isLeft ? "text-right" : "text-left";
    return (
      <>
        <div
          className="absolute border-solid border-debug border-0 "
          style={{
            width: widthMain + "px",
            height: heightMain + "px",
            transform:
              "translate(" +
              (isLeft ? 0 : widthMain) +
              "px, " +
              elapsedDays * pxPerDay +
              "px)",
          }}
        >
          <div
            id="startDate"
            className={"absolute text-accent font-extrabold text-xl " + dateAlign}
            style={{
              width: widthDate + "px",
              height: heightDate + "px",
              transform: "translate(" + dateX + "px, " + 0 + "px)",
            }}
          >
            {convertTimestampToYYYYMM(this.startTimestamp)}
          </div>
          <div
            id="endDate"
            className={"absolute text-accent font-extrabold text-xl " + dateAlign}
            style={{
              width: widthDate + "px",
              height: heightDate + "px",
              transform: "translate(" + dateX + "px, " + (heightMain-heightDate) + "px)",
            }}
          >
            {convertTimestampToYYYYMM(this.endTimestamp)}
          </div>
          <div
            id="verticalbar"
            className={"absolute bg-accent rounded-full"}
            style={{
              width: circleSize + "px",
              height: heightMain + "px",
              transform: "translate(" + barX + "px, " + 0 + "px)",
            }}
          ></div>
        </div>
      </>
    );
  }
}
