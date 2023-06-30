import React from 'react'
import * as Styled from "./Styles"
function Home() {
    return (
        <Styled.Home>
        <div style={{position:"relative",zIndex:"2", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", gap:"50px"}}>
            
            

            <div style={{ display: "flex", flexDirection: "column", width: "40%", gap: "20px" }}>
                <div style={{


                    fontSize: "48px",

                    fontWeight: "700",
                    color:"white"


                }}>
                    Learn How to Launch a Successfull Podcast

                </div>
                <div style={{color:"white"}}>
                    Learn How to Launch a Successfull Podcast Learn How to Launch a Successfull Podcast
                    Learn How to Launch a Successfull Podcast Learn How to Launch a Successfull Podcast
                   
                </div>
                <div>
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
                    >Sign Up Now</button>
                </div>
                <div>
                </div>
            </div>
            <div style={{ position: "relative",  }}>
                <img style={{ height: "250px", width: "400px", display: "flex", position: "relative", left: "20px", top: "40px",borderRight:"dotted 10px #4776E6", paddingRight:"20px" }} src="./image2.png" />
                <img style={{ height: "250px", width: "400px", display: "flex", position: "relative", left: "0px", top: "-120px",borderBottom:"dotted 10px #4776E6", paddingBottom:"20px" }} src="./image1.png" />
            </div>
            </div>
           

        </Styled.Home>
    )
}

export default Home
