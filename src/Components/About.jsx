import React from 'react'
import * as Styled from "./Styles"

function About() {
    return (
        <Styled.About id="about">
            <div style={{display:"flex", gap:"50px"}}>
            <div style={{ display: "grid", gridTemplateColumns: "auto", columnGap: "20px", width: "40%", rowGap:"20px",
            
         }}>
                <div style={{
                    borderRadius: "10px",
                    border: "0.5px solid var(--secondary, #7A3199)",
                    padding:"10px",
                    width:"200px",
                    height:"200px"

                }}>
                    <h3>Interactive Features</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div style={{
                    borderRadius: "10px",
                    border: "0.5px solid var(--secondary, #7A3199)",
                    padding:"10px",
                    width:"200px",
                    height:"200px"

                }}>
                    <h3>Interactive Features</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
               

            </div>
            <div style={{  position:"relative", top:"20px",display: "grid", gridTemplateColumns: "auto", columnGap: "20px", width: "40%", rowGap:"20px",
            
        }}>
               <div style={{
                   borderRadius: "10px",
                   border: "0.5px solid var(--secondary, #7A3199)",
                   padding:"10px",
                   width:"200px",
                   height:"200px"

               }}>
                   <h3>Interactive Features</h3>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </div>
               <div style={{
                   borderRadius: "10px",
                   border: "0.5px solid var(--secondary, #7A3199)",
                   padding:"10px",
                   width:"200px",
                   height:"200px"

               }}>
                   <h3>Interactive Features</h3>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </div>
              

           </div>
           </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "30%" }}>
                <div style={{


                    fontSize: "48px",

                    fontWeight: "700",


                }}>About the Course</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <button
                    style={{
                        display: "flex",
                        height: "74.861px",
                        width: "150px",
                        padding: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        background: "var(--danger, linear-gradient(90deg, #4776E6 0%, #8E54E9 100%))",
                        color: "white",
                        border:"none"


                    }}

                >Explore Now</button>
            </div>
        </Styled.About >
    )
}

export default About
