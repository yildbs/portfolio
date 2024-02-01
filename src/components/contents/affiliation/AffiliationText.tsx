

export default function AffiliationText(props:{
    align: string,
    width: number,
    height: number,
    x: number,
    y: number,
    text: string
}) {
  return (
    <>
      <div
        id="startDate"
        className={"absolute text-accent font-extrabold text-xl " + props.align}
        style={{
          width: props.width + "px",
          height: props.height + "px",
          transform: "translate(" + props.x+ "px, " + props.y + "px)",
        }}
      >
        {props.text}
      </div>
    </>
  );
}
