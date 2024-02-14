import "./AffiliationText.css";

export default function AffiliationText(props: {
  align: string;
  width: number;
  height: number;
  x: number;
  y: number;
  startDate: string | undefined;
  endDate: string | undefined;
  text: string | undefined;
}) {
  if (props.startDate == undefined && props.text == undefined) {
    throw new Error("Both props.date and props.text must not be undefined.");
  }

  return (
    <>
      <div
        className="absolute justify-end flex text-xl xl:text-2xl"
        style={{
          width: props.width + "px",
          height: props.height + "px",
          transform: "translate(" + props.x + "px, " + props.y + "px)",
        }}
      >
        {props.startDate != undefined && (
          <div
            className={
              "flex pl-1 float-right text-primary font-extrabold  " +
              props.align
            }
          >
            <div id="hover-div" className="flex flex-row ">
              <div>{props.startDate}</div>
            </div>
          </div>
        )}
        {props.text != undefined && (
          <div
            className={
              "flex float-right text-primary font-medium  " + props.align
            }
          >
            {props.text}
          </div>
        )}
      </div>
    </>
  );
}
