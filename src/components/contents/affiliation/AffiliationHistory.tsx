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
  _equallySpacingExperiences = false;
  // _affliliation: string;

  _experiences: AffiliationExperience[] = [];

  public get days() {
    return (this._endTimestamp - this._startTimestamp) / 1000 / 86400;
  }

  public get startTimestamp() {
    return this._startTimestamp;
  }
  public get endTimestamp() {
    return this._endTimestamp;
  }
  public get experiences() {
    return this._experiences;
  }

  public pushExperience(exp: AffiliationExperience) {
    exp.setRootHistory(this);
    this._experiences.push(exp);
  }

  constructor(
    startDate_yyyymmdd: string,
    endDate_yyyymmdd: string,
    startDescription: string,
    endDescription: string,
    equallySpacingExperiences: boolean = false
  ) {
    if (endDate_yyyymmdd === "0") {
      endDate_yyyymmdd = convertTimestampToYYYYMMDD(Date.now());
      this._isEnded = false;
    }

    this._startDate_yyyymmdd = startDate_yyyymmdd;
    this._endDate_yyyymmdd = endDate_yyyymmdd;
    // this._affliliation = affiliation;
    this._startDescription = startDescription;
    this._endDescription = endDescription;
    this._experiences = [];
    this._equallySpacingExperiences = equallySpacingExperiences;

    this._startTimestamp = convertYYYYMMDDToTimestamp(startDate_yyyymmdd);
    this._endTimestamp = convertYYYYMMDDToTimestamp(endDate_yyyymmdd);

    if (this._startTimestamp > this._endTimestamp) {
      throw new Error("Start must be smaller than end.");
    }
  }

  render(
    widthMain: number,
    barX: number,
    verticalBarWidth: number,
    index: number,
    firstTimestamp: number,
    pxPerDay: number
  ) {
    const elapsedDaysInPixel =
      ((this._startTimestamp - firstTimestamp) / 1000 / 86400) * pxPerDay;
    const isEven = index % 2 == 0;
    const dateMargin = 10;
    const heightMain = this.days * pxPerDay;
    const widthDate = widthMain;
    const dateX = barX - widthDate - dateMargin;
    const heightDate = 30;
    const dateAlign = "text-right";
    return (
      <>
        <div
          id="affiliation-history-div"
          className="flex absolute"
          style={{
            width: widthMain + "px",
            height: heightMain + "px",
            transform: "translate(" + "0px, " + elapsedDaysInPixel + "px)",
          }}
        >
          <AffiliationText
            align={dateAlign}
            width={widthDate}
            height={heightDate}
            x={dateX}
            y={0}
            startDate={convertTimestampToYYYYMM(this._startTimestamp)}
            endDate={convertTimestampToYYYYMM(this._endTimestamp)}
            text={this._startDescription}
          />

          {!this._isEnded && (
            <AffiliationText
              align={dateAlign}
              width={widthDate}
              height={heightDate}
              x={dateX}
              y={heightMain - heightDate}
              startDate={undefined}
              endDate={undefined}
              text={this._endDescription}
            />
          )}

          <AffiliationVerticalBar
            circleSize={verticalBarWidth}
            height={heightMain}
            x={barX}
            y={0}
            color={isEven ? "bg-primary" : "bg-secondary"}
          />
        </div>
        {!this._equallySpacingExperiences && (
          <>
            {this._experiences.map((experience, index) =>
              experience.renderPoint(barX, firstTimestamp, pxPerDay)
            )}
          </>
        )}
        {this._equallySpacingExperiences && (
          <>
            {this._experiences.map((experience, index) => {
              let heightStart = heightDate;
              // let heightEnd = !this._isEnded ? heightDate : 0;
              let heightEnd = 0;
              let heightTarget = heightMain - heightStart - heightEnd;

              let y =
                elapsedDaysInPixel +
                heightStart +
                (heightTarget * (index + 0.5)) / (this._experiences.length + 1);
              return experience.renderPoint(barX, y);
              return experience.renderPoint(barX, firstTimestamp, pxPerDay);
            })}
          </>
        )}
      </>
    );
  }
}
