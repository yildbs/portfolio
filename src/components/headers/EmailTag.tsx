export default function EmailTag() {
  return (
    <>
      {/* <div className="fixed top-0 right-0 h-full w-24 flex justify-center items-center">
        <p className="text-2xl font-extrabold rotate-90 origin-bottom text-accent">
            yildbs@gmail.com
        </p>
        <div className="w-0 h-full border-l border-gray-800"></div>
      </div> */}

      <div className="fixed top-0 right-0 h-full w-24 flex flex-col justify-center items-center">
        <p className="text-2xl font-extrabold text-accent rotate-90 origin-bottom">
          yildbs@gmail.com
        </p>
        <div className="absolute top-96 w-0 h-96 border-l border-gray-800"></div>
      </div>
    </>
  );
}
