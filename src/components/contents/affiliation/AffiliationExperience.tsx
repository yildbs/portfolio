import {
  convertTimestampToYYYYMM,
  convertTimestampToYYYYMMDD,
  convertYYYYMMDDToTimestamp,
} from "../util/Date";
import { AffiliationHistory } from "./AffiliationHistory";
import "./AffiliationExeprience.css";
import PopupImage from "../util/PopupImage";

export class AffiliationExperience {
  _startDate_yyyymmdd: string;
  // _endDate_yyyymmdd: string;
  _startTimestamp: number;
  _endTimestamp: number | undefined;
  _title: string;
  //   _description: string | undefined;
  _descriptions: string[] = [];
  _referenceUrls: [string, string][] = [];
  _isEnded = true;
  // _isJustEvent = false;
  _images: string[] = [];
  _root: AffiliationHistory | undefined = undefined;
  _featured = false;

  public get days() {
    if (this._endTimestamp == undefined) {
      return 0;
    }

    return (this._endTimestamp - this._startTimestamp) / 1000 / 86400;
  }
  public get when() {
    if (this._endTimestamp == undefined) {
      return this._startTimestamp;
    }
    return (this._endTimestamp + this._startTimestamp) / 2;
  }

  constructor(
    title: string,
    startDate_yyyymmdd: string,
    endDate_yyyymmdd: string | undefined = undefined
  ) {
    this._startDate_yyyymmdd = startDate_yyyymmdd;

    this._title = title;
    this._startTimestamp = convertYYYYMMDDToTimestamp(startDate_yyyymmdd);

    if (endDate_yyyymmdd === "0") {
      endDate_yyyymmdd = convertTimestampToYYYYMMDD(Date.now());
      this._isEnded = false;
    }

    this._endTimestamp = endDate_yyyymmdd
      ? convertYYYYMMDDToTimestamp(endDate_yyyymmdd ?? startDate_yyyymmdd)
      : undefined;
  }

  addDescription(description: string) {
    this._descriptions.push(description);
  }

  isJustEvent() {
    return this._endTimestamp === undefined;
  }

  setFeatured(value: boolean) {
    this._featured = value;
  }

  isFeatured() {
    return this._featured;
  }

  addImage(image: string) {
    this._images.push(image);
  }

  addReferenceUrl(title: string, url: string) {
    this._referenceUrls.push([title, url]);
  }

  setRootHistory(root: AffiliationHistory) {
    this._root = root;
  }

  renderCard(width: number, height: number, renderLikeSpeechBubble: boolean, circleSize: number | undefined = undefined) {
    const speechBubbleTailLength = 40;
    if(circleSize === undefined){
      circleSize = speechBubbleTailLength / 2;
    }

    return (
      <div
        id="experience-card-div"
        className={renderLikeSpeechBubble ? "flex items-center transform-none" : ""}
      >

        {renderLikeSpeechBubble && (
          <div className="testtt">
            <svg
              className="fill-content"
              width={speechBubbleTailLength + "px"}
              height={circleSize * 2 + "px"}
              viewBox="0 0 100 100"
            >
              <path d="M 50,20 L 300,200 300,0 Z"></path>
            </svg>
          </div>
        )}

        <div
          className={"bg-content rounded-lg "}
          style={{
            width: width == 0 ? "100%" : width + "px",
            left: renderLikeSpeechBubble
              ? speechBubbleTailLength + "px"
              : "0px",
            position: renderLikeSpeechBubble ? "absolute" : "relative",
          }}
        >
          <div className="p-2" style={{}}>
            <div className="flex ">
              <div className="text-base font-extrabold">{this._title}</div>
              <div className="flex inline-block text-sm text-gray-600 pl-5 items-center ">
                {!this.isJustEvent() && (
                  <>
                    {this._isEnded && (
                      <p>
                        {convertTimestampToYYYYMM(this._startTimestamp)} -{" "}
                        {convertTimestampToYYYYMM(this._endTimestamp!)}
                      </p>
                    )}
                    {!this._isEnded && (
                      <p>
                        {convertTimestampToYYYYMM(this._startTimestamp)} - ing
                      </p>
                    )}
                  </>
                )}
                {this.isJustEvent() && (
                  <p>{convertTimestampToYYYYMM(this._startTimestamp)}</p>
                )}
              </div>
            </div>

            <>
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
                      <PopupImage image={image} />
                      {/* <img src={image} className=" " /> */}
                    </div>
                  );
                })}
              </div>

              {this._referenceUrls.length > 0 && (
                <>
                  <p className="font-bold text-xs">Reference URL</p>
                  <div className="whitespace-nowrap overflow-x-scroll rounded">
                    {this._referenceUrls.map((url, index) => {
                      return (
                        <>
                          <div className="flex flex-row pl-2 text-xs text-gray-800">
                            <a href={url[1]} target="_blank">
                              {index + 1}. {url[0]}
                            </a>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              )}
            </>
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
    const size = 10;
    const y = elapsedDays * pxPerDay;

    const arrowDistance = 40;
    const arrowHeight = size / 4;
    return (
      <div
        id="experience-div"
        style={{
          width: size + "px",
          height: size + "px",
          left: x - size / 2 + "px",
          top: y - size / 2 + "px",
          position: "absolute",
        }}
      >
        <div
          id="hover-div"
          className={
            "z-10 absolute bg-content rounded-full transform hover:scale-125 transition-transform duration-100 "
          }
          style={{
            width: size + "px",
            height: size + "px",
          }}
        ></div>

        {/* {!this.isJustEvent() && (
        )} */}
        <div id="popup-div" className="z-20 absolute ">
          {this.renderCard(400, 0, true, size)}
        </div>

        <div
          className="flex w-64 float-right justify-end text-xs inline-block items-center text-primary "
          style={{
            height: size + "px",
            transform: "translate(" + -size * 1.5 + "px, 0px)",
          }}
        >
          {this._title}
          <div
            id="popup-div"
            className={"pl-1 text-primary font-bold float-right text-sm "}
          >
            <p>{convertTimestampToYYYYMM(this._startTimestamp)}</p>
          </div>
        </div>
      </div>
    );
  }
}
