import Title from "./Title";
import history from "../../MyHistory";

export default function Timeline() {
  const timestampMin = Math.min(...history.map((h) => h.startTimestamp));
  const pxPerDay = 0.33;
  return (
    <>
      <div className="w-full flex float-left flex-col">
        <Title title={"Timeline"} />
        I grow by {pxPerDay}px every day.
        <div className="w-50 flex flex-row">
          <div className="relative" >
            {history.map((affiliation, index) => affiliation.render(index, timestampMin, pxPerDay))}
          </div>
        </div>
      </div>
    </>
  );
}
