export default function AffiliationText(props: {
  align: string;
  width: number;
  height: number;
  x: number;
  y: number;
  date: string | undefined;
  text: string | undefined;
}) {
  if (props.date == undefined && props.text == undefined) {
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
        {props.date != undefined && (
          <div
            className={"flex pl-1 float-right text-accent font-extrabold text-xl" + props.align}
          >
            {props.date}
          </div>
        )}
        {props.text != undefined && (
          <div
            className={"flex float-right text-accent font-medium text-l" + props.align}
          >
            {props.text}
          </div>
        )}
      </div>
    </>
  );
}
