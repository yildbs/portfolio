import { useEffect, useRef, useState } from "react";
import Title from "./Title";
import { AffiliationHistory } from "./affiliation/AffiliationHistory";

export default function Timeline(props: { history: AffiliationHistory[] }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState<number | null>(null);

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setDivWidth(width);
    }
  }, [divRef]);

  const timestampMin = Math.min(...props.history.map((h) => h.startTimestamp));
  const timestampMax = Math.max(...props.history.map((h) => h.endTimestamp));

  const days = (timestampMax - timestampMin) / 86400 / 1000;
  const pxPerDay = 0.33;

  const widthMain = divWidth ?? 300;
  const verticalBarWidth = 14;
  const widthDot = 4;
  const centerLineX = widthMain / 2;
  return (
    <>
      <div ref={divRef} className="w-full flex float-left flex-col">
        <Title title={"Timeline"} />
        <div>I grow by {pxPerDay}px every day.</div>
        <div className="w-50 flex flex-row">
          <div
            id="dotted-vertical-bar"
            className="absolute border-dotted border-content z-0 "
            style={{
              borderRight: widthDot + "px dotted gray",
              height: days * pxPerDay + "px",
              transform:
                "translate(" +
                (centerLineX - (widthDot / 2 - 0.5)) +
                "px, 0px)",
            }}
          ></div>
          <div
            className="relative w-full"
            style={{
              height: days * pxPerDay + "px",
            }}
          >
            {/* render(
    widthMain: number,
    barX: number,
    verticalBarWidth: number,
    // barMargin: number,
    index: number,
    firstTimestamp: number,
    pxPerDay: number */}
            {props.history.map((affiliation, index) =>
              affiliation.render(
                widthMain,
                centerLineX,
                verticalBarWidth,
                // barMargin,
                index,
                timestampMin,
                pxPerDay
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
