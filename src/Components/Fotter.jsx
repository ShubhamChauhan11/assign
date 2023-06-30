import React from 'react'
import * as Styled from "./Styles"

function Fotter() {
  return (
    <Styled.Fotter>
     <div style={{


     //  background: "linear-gradient(to right bottom, transparent 50%, #7A3199 50%)",
     borderRadius:"70% 0% 0% 0%",
    // background:"#7A3199",
     background: "rgb(2,0,36)",
background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, #904cdc 0%, #6324a9 62%)",
        position: "absolute",
        width: "100%",
        height: "400px",
       
  transformOrigin: "right top",
        left: "0px",
        bottom:"0px",
        
      }}

    ></div>
    
    
    
     
      <div
        style={{
          display: "flex",
         // width: "60%",
          height: "74px",
          padding: "10px 40px 10px 40px",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexShrink: "0",
          color: "white",
          position: "absolute",
         bottom:"0px",
         borderTop:"2px solid white"
       
          
        }}
      >
       
     
        <div>
          All Right Reserved @Copyright 2023
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
          <a>Product</a>
          <div>
            <img src="./fb.svg"></img>
            <img src="./utube.svg"></img>
            <img src="./insta.svg"></img>
            <img src="./twitter.svg"></img>
          </div>
        </div>
      </div>
    </Styled.Fotter>

  )
}

export default Fotter
