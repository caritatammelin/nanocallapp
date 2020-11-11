import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [infos, setInfo] = useState(null);
/** 
  React.useEffect(() => {
    axios
        .get('/wordcount_api/wc/Aldarine')
        .then(function(response){
          console.log(response);
        }) 
        .catch(function (error){
          console.log(error);
        });
  });
*/
  // add api url to a variable
  //const apiUrl = "https://nanowrimo.org/wordcount_api/wc/Aldarine";
  
  const fetchData = async() => {

    const response = await axios.get("/wordcount_api/wc/aldarine", {
      "Content-Type": "application/xml; charset=utf-8"
    })
    // setInfo(response.data)
  }

  render() {
    const {aldarine} = this.state;

    return(
      <div>
        {(aldarine && aldarine.length > 0) && 
        aldarine.map((item) => {
          return(
            <span>{item.uname}</span>
          )
        })
        }
      </div>
    );
  }


  /** 

  return (
    <div className="App">
      <h1>NaNoWriMo Details</h1>
     <div>
       <button className="fetch-button" onClick={fetchData}>
         Fetch Data
       </button>
     </div>
     <div className="info">
       {infos &&
        infos.map((info, index) => {

          return(
            <div className="info" key={index}>
              <h3>User {index + 1}</h3>
              <h2>{info.uname}</h2>

              <div className="details">
                <p>Word count: {info.user_wordcount}</p>
              </div>
            </div>
          );
        })}
     </div>
    </div>
  );*/
}

export default App;
