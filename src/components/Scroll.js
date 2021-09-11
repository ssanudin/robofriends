import React from "react";

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '100vh'}}>
      {props.children}
    </div>
  );
}

export default Scroll;