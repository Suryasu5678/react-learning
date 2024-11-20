import react from "react";
const PTag = ({ count }) => {
  return (
    <div style={{ backgroundColor: "green", color: "red" , size:"30px" }}>
      <p>THE CURRENT VALUE IS:{count} </p>
    </div>
  );
};
export default PTag;
