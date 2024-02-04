export default function AffiliationVerticalBar(props: {
  circleSize: number;
  height: number;
  x: number;
  y: number;
  color: string;
}) {
  return (
    <div
      id="verticalbar"
      className={"z-10 rounded-full " + props.color}
      style={{
        width: props.circleSize + "px",
        height: props.height + "px",
        transform: "translate(" + props.x + "px, " + props.y + "px)",
      }}
    ></div>
  );
}
