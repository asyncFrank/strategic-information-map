import React from "react";

export default function Legend({ legendItems }) {
  // console.log(legendItems);
  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            background: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center",//vertical
            justifyContent:"center",//horizontal
            color:item.textColor,
            height:'10vh',
            fontWeight:"normal",
            fontSize:'1.1em',
            fontFamily:'Source Sans Pro',
            // marginTop:'0.5em'
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
