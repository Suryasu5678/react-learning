import react from "react"
const CustomizedButton = ({setCount,count }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> counter</button>
    </div>
  );
};
export default CustomizedButton