
export default function Content({content} : {content: string}) {
    return (
      <>
        <div className="relative flex py-5 items-center text-lg xl:text-xl 2xl:text-2xl ">
            { content }
        </div>
      </>
    );
  }