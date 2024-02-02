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
  _affliliation: string;

  _experiences: AffiliationExperience[] = [];

  public get days() {
    return (this._endTimestamp - this._startTimestamp) / 1000 / 86400;
  }

  public get startTimestamp() {
    return this._startTimestamp;
  }

  public pushExperience(exp: AffiliationExperience) {
    exp.setRootHistory(this);
    this._experiences.push(exp);
  }

  constructor(
    startDate_yyyymmdd: string,
    endDate_yyyymmdd: string,
    affiliation: string,
    startDescription: string,
    endDescription: string
  ) {
    if (endDate_yyyymmdd === "0") {
      endDate_yyyymmdd = convertTimestampToYYYYMMDD(Date.now());
      this._isEnded = false;
    }

    this._startDate_yyyymmdd = startDate_yyyymmdd;
    this._endDate_yyyymmdd = endDate_yyyymmdd;
    this._affliliation = affiliation;
    this._startDescription = startDescription;
    this._endDescription = endDescription;
    this._experiences = [];

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
    // const isLeft = true;

    const verticalBarWidth = 14;
    const barMargin = 10;
    // const barX = isLeft ? widthMain - barMargin - verticalBarWidth : barMargin;
    let barX = widthMain - barMargin - verticalBarWidth;
    if (isLeft) {
      // barX -= verticalBarWidth;
    }

    const dateMargin = 10;
    const heightMain = this.days * pxPerDay;
    const widthDate = widthMain * 0.8;
    // const dateX = isLeft
    //   ? widthMain - widthDate - barMargin - verticalBarWidth - dateMargin
    //   : barX + verticalBarWidth + dateMargin;

    const dateX =
      widthMain - widthDate - barMargin - verticalBarWidth - dateMargin;
    const heightDate = 30;
    const dateAlign = "text-right";
    return (
      <>
        <div
          className="absolute "
          style={{
            width: widthMain + "px",
            height: heightMain + "px",
            transform: "translate(" + "0px, " + elapsedDays * pxPerDay + "px)",
          }}
        >
          <AffiliationText
            align={dateAlign}
            width={widthDate}
            height={heightDate}
            x={dateX}
            y={0}
            date={convertTimestampToYYYYMM(this._startTimestamp)}
            text={this._startDescription}
          />

          {this._isEnded && (
            <>
              <AffiliationText
                align={dateAlign}
                width={widthDate}
                height={heightDate}
                x={dateX}
                y={heightMain - heightDate}
                date={convertTimestampToYYYYMM(this._endTimestamp)}
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
              date={undefined}
              text={this._endDescription}
            />
          )}

          <AffiliationVerticalBar
            circleSize={verticalBarWidth}
            height={heightMain}
            x={barX}
            y={0}
            color={isLeft ? "bg-primaryalpha" : "bg-secondaryalpha"}
          />
        </div>
        {this._experiences.map((experience, index) =>
          experience.renderPoint(barX + verticalBarWidth / 2, firstTimestamp, pxPerDay)
        )}
      </>
    );
  }
}
