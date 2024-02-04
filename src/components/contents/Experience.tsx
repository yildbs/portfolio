import Content from "./Content";
import Title from "./Title";
import { AffiliationHistory } from "./affiliation/AffiliationHistory";


export default function Experience(props: { history: AffiliationHistory[] }) {
  return (
    <>
      <div className="w-full flex float-left flex-col ">
        <Title title={"Experience"} />
        <Content
          content={
            "Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah Blahblah "
          }
        />
      </div>
    </>
  );
}
