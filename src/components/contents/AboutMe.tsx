import tempImg from "../../assets/temp.png";
import Content from "./Content";
import Title from "./Title";

export default function AboutMe() {
  return (
    <div className="w-full flex md:flex-row md:flow-root flex-col w-full h-full items-center">
      <div className="md:w-2/5 float-right flex md:justify-end ">
        <img
          src={tempImg}
          className="object-cover aspect-square relative rounded-full border border-primary shadow-sm h-full "
        />
      </div>
      <div className="md:w-3/5 flex float-left flex-col ">
        <Title title={"About Me"} />
        <Content content={"Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah "} />
      </div>
    </div>
  );
}
