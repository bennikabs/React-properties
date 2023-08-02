import React from "react";

export default function City(props) {
  let roundedValue = Math.round(props.value);
  return (
    <div className="City">
      It is {roundedValue}°C in {props.name}
    </div>
  );
}
