import Title from "../Title";
import history from "./AffiliationHistoryData";

export default function Timeline() {
  const timestampMin = Math.min(...history.map((h) => h.startTimestamp));
  const timestampMax = Math.max(
    ...history.map((h) => h.endTimestamp),
    Date.now()
  );

  const days = (timestampMax - timestampMin) / 1000 / 86400;
  const pxPerDay = 0.33;

  return (
    <>
      <div className="w-full flex float-left flex-col">
        <Title title={"Timeline"} />
        I grow by {pxPerDay}px every day.
        <div className="w-50 flex flex-row">
          <div
            className="border-solid border-black border-2"
            style={{ width: "100px", height: days * pxPerDay + "px" }}
          ></div>
          <div className="relative" >
            {history.map((affiliation, index) => affiliation.render(index, timestampMin, pxPerDay))}
          </div>
        </div>
      </div>
    </>
  );
}
