import React from 'react'
import axios from 'axios';
import { useState , useEffect } from 'react'
import Card from './Card';

export default function list() {
  
  const [items ,setItems] = useState([]); 


  
    async function getElectronic(){
        try{
          const response = await axios.get("")
          setItems(response.data)  ; 
          console.log(response.data) ; 

        }catch(err){
          console.log(err); 
        }
    }

  return (
    <>

    
    </>
  
  )
}
