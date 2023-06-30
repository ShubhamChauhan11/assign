import React from 'react'

function GetStarted() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position:"relative",zIndex:"4"}}>
            <div style={{ display: "flex", width: "60%", flexDirection: "column", justifyContent: "center", alignItems: "center", gap:"15px"}}>
                <h3 style={{color:"white"}}>We have what you’re looking for</h3>
                <div style={{color:"white"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a 
                </div>
                <button style={{
                    display: "flex",
                    height: "50.861px",
                    width:"150px",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    border:"none",
background: "var(--danger, linear-gradient(90deg, #4776E6 0%, #8E54E9 100%))",
color:"white"

                }}>
                Get Started Now
                </button>



            </div>
            </div>
            )
}

            export default GetStarted
