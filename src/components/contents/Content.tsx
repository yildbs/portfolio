
export default function Content({content} : {content: string}) {
    return (
      <>
        <div className="relative flex py-5 items-center">
            { content }
        </div>
      </>
    );
  }