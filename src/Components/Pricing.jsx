import React from 'react'
import * as Styled from "./Styles"

function Pricing() {
    return (
        <Styled.Pricing id="pricing" >
            <div style={{ position:"relative",zIndex:"4", display: "flex", width: "40%", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <div style={{


                    fontSize: "48px",

                    fontWeight: "700",


                }}>Choose Your Plan</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div style={{ display: "flex",gap:"30px" }}>
                    <button
                        style={{
                            height: "50px",
                            width:"150px",
                            border:"none",
                            borderRadius: "10px",
                            background: "var(--light, rgba(225, 166, 255, 0.40))",
                            // display: "flex",
                            // padding: "3px 9px",
                            // justifyContent: "center",
                            // alignItems: "center"
                        }}

                    >Monthly</button>
                    <button
                        style={{
                            height: "50px",
                            width:"150px",
                            borderRadius: "10px",
                            border:"none",
                            background: "var(--light, rgba(225, 166, 255, 0.40))",
                            // display: "flex",
                            // padding: "3px 9px",
                            // justifyContent: "center",
                            // alignItems: "center"
                        }}
                    >Yearly</button>
                </div>
            </div>
            <div style={{ display: "flex", gap: "30px", justifyContent: 'center' }}>
                <div style={{
                    display: "flex", width: "20%", flexDirection: "column",
                    borderRadius: "10px",
                    border: "0.5px solid var(--ghost, #7A3199)",
                    background: "#FFF",
                    padding: "10px"
                }}>
                    <h4>Basic Plan</h4>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d</div>
                    <div style={{ color: "#7A3199" }}>54$  /month</div>
                    <ul>
                        <li>free Access to Video Classes</li>
                        <li>free Access to Video Classes</li>
                        <li>free Access to Video Classes</li>
                    </ul>
                    <button style={{ width: "60%", height: "50px" , border:"none" }}>
                        Start Free Trial
                    </button>
                </div>
                <div style={{
                    display: "flex", width: "20%", flexDirection: "column",
                    borderRadius: "10px",
                    border: "0.5px solid var(--ghost, #7A3199)",
                    background: "var(--ghost, #7A3199)",
                    color: "white",
                    padding: "10px"
                }}>
                    <h4>Basic Plan</h4>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d</div>
                    <div>54$  /month</div>
                    <ul>
                        <li>free Access to Video Classes</li>
                        <li>free Access to Video Classes</li>
                        <li>free Access to Video Classes</li>
                    </ul>
                    <button style={{ width: "60%", height: "50px", border:"none" }}>
                        Start Free Trial
                    </button>
                </div>
                <div style={{
                    display: "flex", width: "20%", flexDirection: "column",
                    borderRadius: "10px",
                    border: "0.5px solid var(--ghost, #7A3199)",
                    padding: "10px",
                    background: "#FFF",
                }}>
                    <h4>Basic Plan</h4>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d</div>
                    <div style={{ color: "#7A3199" }}>54$ /month</div>
                    <ul>
                        <li>free Access to Video Classes</li>
                        <li>free Access to Video Classes</li>
                        <li>free Access to Video Classes</li>
                    </ul>
                    <button style={{ width: "60%", height: "50px" , border:"none"}}>
                        Start Free Trial
                    </button>
                </div>

            </div>
        </Styled.Pricing>
    )
}

export default Pricing
