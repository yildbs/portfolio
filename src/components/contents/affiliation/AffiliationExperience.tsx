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
  _images: string[] = [];
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

  addImage(image: string) {
    this._images.push(image);
  }

  addReferenceUrl(url: string) {
    this._referenceUrls.push(url);
  }

  setRootHistory(root: AffiliationHistory) {
    this._root = root;
  }

  renderCard(width: number, height: number, renderLikeSpeechBubble: boolean) {
    const speechBubbleTailLength = 40;

    return (
      <div className={renderLikeSpeechBubble ? "flex items-center" : ""}>
        {renderLikeSpeechBubble && (
          <div className="">
            <svg
              className="fill-content"
              width={speechBubbleTailLength + "px"}
              height={speechBubbleTailLength / 2 + "px"}
              viewBox="0 0 100 100"
            >
              <path d="M 150,0 L 150,100 60,50 Z"></path>
            </svg>
          </div>
        )}

        <div
          className={"bg-content rounded-lg "}
          style={{
            width: width + "px",
            left: renderLikeSpeechBubble
              ? speechBubbleTailLength + "px"
              : "0px",
            position: "absolute",
          }}
        >
          <div className="p-2" style={{}}>
            <div className="flex ">
              <div className="text-base font-extrabold">{this._title}</div>
              <div className="flex inline-block text-sm text-gray-600 pl-5 items-center ">
                {!this._isJustEvent && (
                  <p>
                    {convertTimestampToYYYYMM(this._startTimestamp)} -{" "}
                    {convertTimestampToYYYYMM(this._endTimestamp)}
                  </p>
                )}
                {this._isJustEvent && (
                  <p>{convertTimestampToYYYYMM(this._startTimestamp)}</p>
                )}
              </div>
            </div>

            <div className="text-sm pb-2 rounded ">
              <div className="pl-2 pt-2 ">
                {this._descriptions.map((des) => {
                  return <div>- {des}</div>;
                })}
              </div>
            </div>

            <div className="whitespace-nowrap overflow-x-scroll rounded">
              {this._images.map((image, index) => {
                return (
                  <div id="image-in-card" className="inline-flex px-1 py-2  ">
                    <img src={image} className=" " />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
            "z-10 absolute bg-content rounded-full transform hover:scale-125 hover:cursor-pointer transition-transform duration-100 "
          }
          style={{
            width: size + "px",
            height: size + "px",
            left: x - size / 2 + "px",
            top: y - size / 2 + "px",
            position: "absolute",
          }}
        >
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

              <div
              id="popup-div"
                className={
                  "pl-1 text-primary font-bold float-right text-sm "
                //   "flex pl-1 float-right text-primary font-extrabold text-xl "
                }
              >
                <p>{convertTimestampToYYYYMM(this._startTimestamp)}</p>
              </div>
            </div>
          )}

          {!this._isJustEvent && (
            <div
              id="popup-div"
              className="flex relative"
              style={{
                width: size + "px",
                height: size + "px",
              }}
            >
              <div className="absolute top-1/2 -translate-y-1/2">
                {this.renderCard(400, 0, true)}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
