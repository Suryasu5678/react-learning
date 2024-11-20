import react from "react"
const CustomizedButton = ({setCount,count,setTime,time}) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> counter</button>
      <button onClick={() => setTime(time + 1)}> T</button>
    </div>
  );
};
export default CustomizedButton