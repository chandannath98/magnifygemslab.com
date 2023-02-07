import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from './firebase.config'

export default function AddData() {

const [cretificateName, setcretificateName] = useState("")
const [details, setDetails] = useState("")

    const addData = async (area) => {
        const newEntry = {
        cretificateName:cretificateName,
        details:details
      
        }
       
      
      
      
        await addDoc(collection(db, "certificatesData"), newEntry).
      
          then(
           console.log("added")
      
      
          ).catch((error) => {
            
            console.log(error)
            alert(error+"\n\n Data not updated")
          })
      }
    
    

  return (
    <div>
        <button onClick={addData}>Add</button>

    </div>
  )
}
