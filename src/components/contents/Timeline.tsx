import Title from "./Title";
import { AffiliationHistory } from "./affiliation/AffiliationHistory";

export default function Timeline(props: { history: AffiliationHistory[] }) {
  const timestampMin = Math.min(...props.history.map((h) => h.startTimestamp));
  const timestampMax = Math.max(...props.history.map((h) => h.endTimestamp));

  const days = (timestampMax - timestampMin) / 86400 / 1000;
  const pxPerDay = 0.33;

  const widthMain = 300;
  const verticalBarWidth = 14;
  const barMargin = 10;
  const centerLineX = widthMain - verticalBarWidth - barMargin/ 2;
  return (
    <>
      <div className="w-full flex float-left flex-col">
        <Title title={"Timeline"} />I grow by {pxPerDay}px every day.
        <div className="w-50 flex flex-row">
          <div
            className="absolute border-dotted border-content z-0 "
            style={{
              borderRight: "4px dotted gray",
              height: days * pxPerDay + "px",
              transform: "translate(" + centerLineX + "px, 0px)",
            }}
          ></div>
          <div className="absolute">
            {props.history.map((affiliation, index) =>
              affiliation.render(widthMain, verticalBarWidth, barMargin, index, timestampMin, pxPerDay)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
