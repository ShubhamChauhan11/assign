import React, { useState } from 'react'
import * as Styled from "./Styles"


function Review() {


    

    let currentIndex = 0;

    

    const [activeIndex, setActiveIndex] = useState(0);

    const carouselItems = [
        {
            id: 1,
            content: ["Microsoft", "Microsoft", "Microsoft"],
            rating: [5, 4, 3]
        },
        {
            id: 2,
            content: ["Google", "Google", "Google"],
            rating: [4, 5, 2]
        },
        {
            id: 3,
            content: ["Amazon", "Amazon", "Amazon"],
            rating: [3, 4, 5]
        },
    ];
    const carouselStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70%",
    };

    const carouselItemStyle = {
        width: "90%",
        height: "200px",
       // backgroundColor: "#e9e9e9",
       // border: "1px solid #ccc",
        padding: "20px",
    };

    const dotContainerStyle = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
    };

    const dotStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        margin: "0 5px",
        cursor: "pointer",
    };

    const buttonStyle = {
        marginTop: "10px",
    };
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    //showSlide(currentIndex);
    return (
        <Styled.Review id="review">
            <div>
                <h2>Review From Custormers</h2>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            </div>

            <div style={carouselStyle}>
                <div style={carouselItemStyle}>
                    {carouselItems.map((item, index) => (
                        <div
                            key={item.id}
                            style={{
                                display: index === activeIndex ? "flex" : "none",
                                justifyContent: "space-around",
                                gap:"10px"


                            }}

                        >
                            {item.content.map((divContent, divIndex) => (
                                <div key={divIndex} style={{ display: "flex", flexDirection: "column", width: "200px", height: "150px",borderRradius: "10px",
                                border: "0.5px solid var(--light, rgba(225, 166, 255, 0.40))",
                                background: "#FFF",
                                padding: "36px 48px",
                            }}>
                                    <div style={{ display: "flex", gap: "20px" }}>
                                        <img src="./profile.png" style={{ borderRadius: "50%", height: "30px", width: "30px" }} />
                                        <div>
                                            <div>{divContent}</div>
                                            <div>
                                                {item.rating.map((ele) => {
                                                    return (
                                                        <img style={{ height: "10px", width: "10px" }} src="./star.svg" />
                                                    )
                                                })}




                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div style={dotContainerStyle}>
                    {carouselItems.map((item, index) => (
                        <div
                            key={item.id}
                            style={{
                                ...dotStyle,
                                backgroundColor: index === activeIndex ? "#000" : "#ccc",
                            }}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>

            </div>



        </Styled.Review>

    )
}

export default Review
