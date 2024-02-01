import {
  convertTimestampToYYYYMMDD,
  convertTimestampToYYYYMM,
  convertYYYYMMDDToTimestamp,
} from "../util/Date";
import { AffiliationExperience } from "./AffiliationExperience";
import AffiliationText from "./AffiliationText";
import AffiliationVerticalBar from "./AffiliationVerticalBar";

export class AffiliationHistory {
  _startDate_yyyymmdd: string;
  _endDate_yyyymmdd: string;
  _startDescription: string;
  _endDescription: string;
  _startTimestamp: number;
  _endTimestamp: number;
  _isEnded = true;

  _experiences: AffiliationExperience[] = []

  public get days() {
    return (this._endTimestamp - this._startTimestamp) / 1000 / 86400;
  }

  public get startTimestamp(){
    return this._startTimestamp;
  }

  constructor(
    startDate_yyyymmdd: string,
    endDate_yyyymmdd: string,
    startDescription: string,
    endDescription: string,
    experiences: AffiliationExperience[] = []
  ) {
    if (endDate_yyyymmdd === "0") {
      endDate_yyyymmdd = convertTimestampToYYYYMMDD(Date.now());
      this._isEnded = false;
    }

    this._startDate_yyyymmdd = startDate_yyyymmdd;
    this._endDate_yyyymmdd = endDate_yyyymmdd;
    this._startDescription = startDescription;
    this._endDescription = endDescription;
    this._experiences = experiences;

    this._startTimestamp = convertYYYYMMDDToTimestamp(startDate_yyyymmdd);
    this._endTimestamp = convertYYYYMMDDToTimestamp(endDate_yyyymmdd);

    if (this._startTimestamp > this._endTimestamp) {
      throw new Error("Start must be smaller than end.");
    }
  }

  render(index: number, firstTimestamp: number, pxPerDay: number) {
    const elapsedDays = (this._startTimestamp - firstTimestamp) / 1000 / 86400;
    const widthMain = 300;
    const isLeft = index % 2 == 0;

    const circleSize = 30;
    const barMargin = 10;
    const barX = isLeft ? widthMain - barMargin - circleSize : barMargin;

    const dateMargin = 10;
    const heightMain = this.days * pxPerDay;
    const widthDate = widthMain * 0.8;
    const dateX = isLeft
      ? widthMain - widthDate - barMargin - circleSize - dateMargin
      : barX + circleSize + dateMargin;
    // const widthDate = widthMain;
    const heightDate = 30;
    const dateAlign = isLeft ? "text-right" : "text-left";
    return (
      <>
        <div
          className="absolute "
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
          <AffiliationText
            align={dateAlign}
            width={widthDate}
            height={heightDate}
            x={dateX}
            y={0}
            text={
              convertTimestampToYYYYMM(this._startTimestamp) +
              " " +
              this._startDescription
            }
          />

          {this._isEnded && (
            <>
              <AffiliationText
                align={dateAlign}
                width={widthDate}
                height={heightDate}
                x={dateX}
                y={heightMain - heightDate}
                text={convertTimestampToYYYYMM(this._endTimestamp)}
              />
              <AffiliationText
                align={dateAlign}
                width={widthDate}
                height={heightDate}
                x={dateX}
                y={heightMain - heightDate * 2}
                text={this._endDescription}
              />
            </>
          )}
          {!this._isEnded && (
            <AffiliationText
              align={dateAlign}
              width={widthDate}
              height={heightDate}
              x={dateX}
              y={heightMain - heightDate}
              text={this._endDescription}
            />
          )}

          <AffiliationVerticalBar
            circleSize={circleSize}
            height={heightMain}
            x={barX}
            y={0}
          />
        </div>
      </>
    );
  }
}
