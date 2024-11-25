import React, { useEffect, useState } from "react";
import { auth, db } from './firebase.config';
import { addDoc, collection } from 'firebase/firestore'
import { Link } from "react-router-dom";






 const AdminScreen = () => {


  const [formData, setFormData] = useState({
    Certificate_No: "",
    Weight: "",
    Shape_and_Cut: "",
    Colour: "",
    Measurement: "",

    Clarity:"",
    inclusion:"",
    Finish:"",
    Fluorences:"",
    diamondType:"",

    Reflective_Index: "",
    Microscopic_Obr: "",
    Specific_Gravity: "",
    Species: "",
    ruby_type:""
  });



const [isUserValid, setIsUserValid] = useState(true)
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
     
       if(!authUser){
        setIsUserValid(false)
   
       }else{

       }
    })
   }, [])
   

   const [selectedButton, setSelectedButton] = useState('diamond');

   const handleButtonClick = (button) => {
     setSelectedButton(button);
   }


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
    // e.preventDefault();
    // submit the form data to your API or any other logic

    const addData = async (area) => {
        const newEntry = formData
       
      
      
      
        await addDoc(collection(db, "certificatesData"), {...newEntry,type:selectedButton}).
      
          then(
           console.log("added"),
           alert("added")
      
      
          ).catch((error) => {
            
            console.log(error)
            alert(error+"\n\n Data not updated")
          })
      }
    

  if(isUserValid){

  

  return (


    <div style={{margin:"100px 30px"}}>


<div className="button-group">
      <button 
        className={`diamond-button ${selectedButton === 'diamond' ? 'activebtn' : ''}`}
        onClick={() => handleButtonClick('diamond')}
      >
        Diamond
      </button>
      <button 
        className={`diamond-button ${selectedButton === 'ruby' ? 'activebtn' : ''}`}
        onClick={() => handleButtonClick('ruby')}
      >
        Ruby
      </button>
    </div>








    <form >
    <div className="form-group">
        <label htmlFor="Certificate_No">Certificate No:</label>
        <input
          type="text"
          id="Certificate_No"
          name="Certificate_No"
          value={formData.Certificate_No}
          onChange={handleChange}
          placeholder="Enter Certificate No"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Weight">Weight:</label>
        <input
          type="text"
          id="Weight"
          name="Weight"
          value={formData.Weight}
          onChange={handleChange}
          placeholder="Enter Weight"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Shape_and_Cut">Shape and Cut:</label>
        <input
          type="text"
          id="Shape_and_Cut"
          name="Shape_and_Cut"
          value={formData.Shape_and_Cut}
          onChange={handleChange}
          placeholder="Enter Shape and Cut"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Colour">Colour:</label>
        <input
          type="text"
          id="Colour"
          name="Colour"
          value={formData.Colour}
          onChange={handleChange}
          placeholder="Enter Colour"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Measurement">Measurement:</label>
        <input
          type="text"
          id="Measurement"
          name="Measurement"
          value={formData.Measurement}
          onChange={handleChange}
          placeholder="Enter Measurement"
        />
      </div>



{selectedButton==="diamond"?
<div>

      <div className="form-group">
        <label htmlFor="Clarity">Clarity:</label>
        <input
          type="text"
          id="Clarity"
          name="Clarity"
          value={formData.Clarity}
          onChange={handleChange}
          placeholder="Enter Clarity"
        />
      </div>





      <div className="form-group">
        <label htmlFor="inclusion">inclusion:</label>
        <input
          type="text"
          id="inclusion"
          name="inclusion"
          value={formData.inclusion}
          onChange={handleChange}
          placeholder="Enter inclusion"
        />
      </div>






      <div className="form-group">
        <label htmlFor="Finish">Finish:</label>
        <input
          type="text"
          id="Finish"
          name="Finish"
          value={formData.Finish}
          onChange={handleChange}
          placeholder="Enter Finish"
        />
      </div>



      <div className="form-group">
        <label htmlFor="diamondType">Diamond Type:</label>
        <input
          type="text"
          id="diamondType"
          name="diamondType"
          value={formData.diamondType}
          onChange={handleChange}
          placeholder="Enter Diamond Type"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Fluorences">Fluorences:</label>
        <input
          type="text"
          id="Fluorences"
          name="Fluorences"
          value={formData.Fluorences}
          onChange={handleChange}
          placeholder="Enter Fluorences"
        />
      </div>


      </div>
:
<div>

      <div className="form-group">
        <label htmlFor="Reflective_Index">Reflective Index:</label>
        <input
          type="text"
          id="Reflective_Index"
          name="Reflective_Index"
          value={formData.Reflective_Index}
          onChange={handleChange}
          placeholder="Enter Reflective Index"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Microscopic_Obr">Microscopic Obr:</label>
        <input
          type="text"
          id="Microscopic_Obr"
          name="Microscopic_Obr"
          value={formData.Microscopic_Obr}
          onChange={handleChange}
          placeholder="Enter Microscopic Index"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Specific_Gravity">Specific Gravity:</label>
        <input
          type="text"
          id="Specific_Gravity"
          name="Specific_Gravity"
          value={formData.Specific_Gravity}
          onChange={handleChange}
          placeholder="Enter Specific Gravity"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Species">Species:</label>
        <input
          type="text"
          id="Species"
          name="Species"
          value={formData.Species}
          onChange={handleChange}
          placeholder="Enter Species"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Species">Ruby Type:</label>
        <input
          type="text"
          id="ruby_type"
          name="ruby_type"
          value={formData.ruby_type}
          onChange={handleChange}
          placeholder="Enter Ruby Type"
        />
      </div>

      </div>}









        </form>
        <button onClick={addData} id="submitBtn">Submit</button>
        </div>




  )}
  
else{
return(
    <div style={{margin:"100px 20px"}}>
<h4>Please Login</h4>
<Link to={"/login"}>
<button >Login</button>
</Link>
    </div>
)
}}
  export default AdminScreen