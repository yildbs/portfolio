import Title from "./Title";
import { AffiliationHistory } from "./affiliation/AffiliationHistory";

export default function Timeline(props: {history: AffiliationHistory[]}) {
  const timestampMin = Math.min(...props.history.map((h) => h.startTimestamp));
  const pxPerDay = 0.33;
  return (
    <>
      <div className="w-full flex float-left flex-col">
        <Title title={"Timeline"} />
        I grow by {pxPerDay}px every day.
        <div className="w-50 flex flex-row">
          <div className="relative" >
            {props.history.map((affiliation, index) => affiliation.render(index, timestampMin, pxPerDay))}
          </div>
        </div>
      </div>
    </>
  );
}
