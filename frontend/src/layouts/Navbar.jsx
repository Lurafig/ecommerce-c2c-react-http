import React from "react";

const p = true;

// function O() {
//     if(p){

//     }
// }

export default function Navbar() {
  return (
    <nav>
      <div id="home-n-upload-ctn">1</div>
      <div id="profile-link-ctn">{p && <p>2</p>}</div>
    </nav>
  );
}
