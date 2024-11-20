import react from "react";
const PTag = ({ count,time }) => {
  return (
    <div style={{ backgroundColor: "grey", color: "red", size: "30px" }}>
      <p>THE CURRENT VALUE IS:{count} {time} </p>
    </div>
  );
};
export default PTag;
