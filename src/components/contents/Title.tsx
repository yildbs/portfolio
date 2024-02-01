export default function Title({title}: {title: string}) {
  return (
    <>
      <div className="relative flex py-5 items-center">
        <span className="flex-shrink mx-4 text-title text-2xl font-bold ">{title}</span>
        <div className="flex-grow max-w-90 border-t border-primary"></div>
      </div>
    </>
  );
}
