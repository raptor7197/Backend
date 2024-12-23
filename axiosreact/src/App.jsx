import { useEffect,useState } from 'react'
import './App.css'
import axios from "axios"


function MyComponent() {
  const[myData,setmyData] = useState([]);
  const [isError,setIsError] = useState(" ")
  
    // useEffect(() => {
    //   axios
    //   .get("https://jsonplaceholder.typicode.com/poss")
    //   .then((res) => setmyData(res.data)) 
    //   .catch((error) => setIsError(error.message));

    // }, []);

    const getData = async () => {

      try {
        const res  = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setmyData(res.data);
        
      } catch (error) {
        setIsError(error.message)
      }
      
    };

    useEffect(()=>{ 
      getData();
    },[]);
    
    return  <> 

    <h1>      Axios Test for once    </h1>
    {setIsError !== " " && <h2>{isError}</h2>}
    <div className = "grid">
      { myData.map((post) => {
        const { id, title, body } = post;
        return <div className = "card" key = {id}>
          <h2>{title.toUpperCase()}</h2>
          <i>{body.slice(0,100)}</i>
        </div>
      })}
       </div>
       </>;
    
  };


export default MyComponent;


// import { useEffect } from "react";
// import axios from "axios";

// const MyComponent = () => {
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => console.log("hehehehhe, res", res))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return <div>Check the console for data!</div>;
// };

// export default MyComponent;
