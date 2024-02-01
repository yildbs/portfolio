export default function AffiliationVerticalBar(props: {
  circleSize: number;
  height: number;
  x: number;
  y: number;
}) {
  return (
    <div
      id="verticalbar"
      className={"absolute bg-accent rounded-full"}
      style={{
        width: props.circleSize + "px",
        height: props.height + "px",
        transform: "translate(" + props.x + "px, " + props.y + "px)",
      }}
    ></div>
  );
}
