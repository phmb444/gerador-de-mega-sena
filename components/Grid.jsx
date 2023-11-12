
export default function GridNums (props) {
  return (
    <>
    <div className="grid grid-cols-5 gap-2 mt-4">
      {props.nums.map((num) => (
        <p className="h-12 w-12 md:w-20 md:h-20 bg-black text-white flex items-center justify-center rounded-lg" key={num}>{num}</p>
      ))}
    </div>

    </>
  );
}