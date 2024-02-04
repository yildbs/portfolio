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
        {props.history.map((affiliation) => (
          <div className="p-1">
            {affiliation.experiences.map((experience, index) => (
              // experience.renderCard(400, 0, false)
              <div>
                {!experience.isJustEvent() && experience.isFeatured() && (
                  experience.renderCard(0, 0, false)
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
