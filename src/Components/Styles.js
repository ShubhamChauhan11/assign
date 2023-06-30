import styled from "styled-components";
const Main = styled.div`
width:100%;
height:100vh;
overflow-y:scroll;



display:flex;
flex-direction:column;
gap:100px;

`
const Navbar= styled.div`
width:100%;
height:200px;
background-color:#7A3199;
display:flex;

justify-content:space-around;
align-items:center;
color:white;
position:relative;
z-index:2;



`
const Navbarinnerdiv= styled.div`
height:70px;
display:flex;
gap:70px;
justify-content:space-between;
align-items:center;
color:white;


`
const Home= styled.div`
width:100%;
height:500vh;


display:flex;
justify-content:center;
align-items:center;
gap:60px;




`
const About= styled.div`
width:100%;
height:500px;

display:flex;
justify-content:center;
gap:40px;
align-items:center;
background-image:url("./mic.png");
background-position:right;
background-repeat:no-repeat;
`
const Pricing= styled.div`
width:100%;
height:500px;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image:url("/podcast.svg");
background-repeat:no-repeat;
background-position:100% 20%;
gap:20px;


`
const Review= styled.div`
width:100%;
height:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
//background-color:skyblue;
`
const Fotter= styled.div`
width:100%;
//height:10%;
//background-color:#7A3199;
background-color: transparent;
display:flex;
justify-content:space-around;
align-items:center;
position:relative;
z-index:2; */

//padding:5px 10px 5px 10px;
`

export{
    Main,
    Navbar,
    Navbarinnerdiv,
    Home,
    About,
    Pricing,
    Review,Fotter
}
