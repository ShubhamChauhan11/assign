import React from 'react'
import * as Styled from "./Styles"
function Navbar() {
  return (

    <Styled.Navbar>
      <div style={{
        width: "100%",
        height: "800px",
        background: "linear-gradient(to right bottom, #6324a9 50%, transparent 50%)",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "1"

      }}>
      <div
      style={{width:"300px", height:"300px",
      // borderRadius:":0% 50% 100% 00%;", 
      borderBottomRightRadius: "300px",
     
      borderRight: "0px",
      borderBottom: "0px",
      background:"#904cdc"}}
      ></div>
      </div>
      <div style={{ width: "100%", position: "absolute", top: "0px", zIndex:"2", display:"flex", justifyContent:"space-around", gap:"20px" }}>
        <Styled.Navbarinnerdiv>
          <img style={{ width: "50px", height: "50px" }} src="https://cdn-icons-png.flaticon.com/128/10263/10263438.png" />
        </Styled.Navbarinnerdiv>
        <Styled.Navbarinnerdiv>
          <a style={{ color: "white", textDecoration: "none" }} href="#about">About</a>
          <a style={{ color: "white", textDecoration: "none" }} href="#pricing">Pricing</a>
          <a style={{ color: "white", textDecoration: "none" }} href="#review">Reviews</a>

        </Styled.Navbarinnerdiv>
      </div>

    </Styled.Navbar>


  )
}

export default Navbar
