import React, { useEffect, useState } from "react";
const UseEffect = ({ count, setTime ,time }) => {
  useEffect(() => {
    console.log("updated");
     return () => {
    // Cleanup code (runs when the component unmounts)
    console.log("Component Unmounted");
  }}, [count]);//without[] this will clean up
  
};
export default UseEffect;

// life cycle methods
//mounting
//unmounting
