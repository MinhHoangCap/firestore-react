import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import "./App.css";
import {db} from "./firebase";
  
export default function App() {
  const [devs, setDevs] = useState([])
  
  useEffect(() => {
    getDev()
  },[])

  useEffect(()=>{
    console.log(devs)
  },[devs])

  function getDev(){
    const devCollectionRef = collection(db, 'dev')
    getDocs(devCollectionRef)
      .then (response =>{
        const ds = response.docs.map(doc => ({
          data: doc.data(), 
          id: doc.id,
        }))
        setDevs(ds)
        

      })
    .catch(error => console.log(error.message))
  }
  

return (

  <p>Hello</p>
  );
  
}
  
