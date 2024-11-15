import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import FlightTable  from './FlightTable';

function App() {
  const[userName, setUserName] = useState();

  //provide the background image details..----
  const myStyle={
    backgroundImage: 'url(flight2.jpg)',
    backgroundSize:'cover',
    height:'170vh'
  }

  //display name----
  function displayName(){
    alert("Entered name is :"+userName);
  }

  //A functional DisplayImage, takes a image name and displays it.----
  // function DisplayImage({Filename}){  //props is the arguments which are passed to a function
  //   return(
  //     <div>
  //       <img src={Filename} height='500px' width='500px'/>
  //     </div>
  //   )
  // }

  return(
    
    //display name-----
    // <div style={myStyle}>
    //   <input type='text' onChange={(e) => setUserName(e.target.value)}/>  &nbsp;
    //   <button onClick={displayName}>Click here </button>
    // </div>

    //functional displayimage -----
    // <div>
    //   <h1> Hello , welcome to Songs of Sky..</h1>
    //   <DisplayImage Filename='flyingbird.jpg'/> <br/>

    //   <h2> Art of Flight..</h2>
    //   <DisplayImage Filename='bird2.jpeg'/> <br/>

    //   <h3> Bird of the wild..</h3>
    //   <DisplayImage Filename='bird3.jpg'/> <br/>
    // </div>

    // backgroung styling-----
    // <div style={myStyle}>
    //   <h1>hello background </h1>
    // </div>

    //inserting images-----
    // <div>
    //   <h1> Hello, Winter..</h1>
    //   <img src='imagewinter1.jpg' height='500px' width='800px'/> &nbsp;
    //   <img src='imagewinter7.jpg' height='500px' width='800px'/> &nbsp;
    //   <img src='imagewinter6.jpg' height='500px' width='800px'/> &nbsp;
    // </div>

    //flighttable
    <div style={myStyle}>
      <FlightTable/>
    </div> 
 );
}

export default App;
