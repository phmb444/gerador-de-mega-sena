
export default function GridNums (props) {
  return (
    <>
    <div className="grid grid-cols-5 gap-2 mt-4">
      {props.nums.map((num) => (
        <p className="h-10 w-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center rounded-lg" key={num}>{num}</p>
      ))}
    </div>

    </>
  );
}