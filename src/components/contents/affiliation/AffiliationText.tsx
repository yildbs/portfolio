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
      {/* font_weight="font-extrabold"
            font_size="text-xl" */}
      <div
        className="absolute flex-row"
        style={{
          width: props.width + "px",
          height: props.height + "px",
          transform: "translate(" + props.x + "px, " + props.y + "px)",
        }}
      >
        {props.startDate != undefined && (
          <div
            className={
              "flex pl-1 float-right text-primary font-extrabold text-xl " +
              props.align
            }
          >
            <div id="hover-div" className="flex flex-row ">
              <div>{props.startDate}</div>
              {/* {props.endDate != undefined && (
                <>
                  <div id="popup-div">- {props.endDate}</div>
                </>
              )} */}
            </div>
          </div>
        )}
        {props.text != undefined && (
          <div
            className={
              "flex float-right text-primary font-medium text-xl " + props.align
            }
          >
            {props.text}
          </div>
        )}
      </div>
    </>
  );
}
