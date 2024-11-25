
import { Link } from "react-router-dom";
import About from "./About";
import Testimonials from "./Testomonials";
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddData from "./addData";
import Login from "./Login";
import ReactToPrint from 'react-to-print';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./firebase.config";
import imagGems from "./gems2.png"
import { TbReportSearch } from 'react-icons/tb';
import { BsGem } from 'react-icons/bs';
import { FaGem } from "react-icons/fa";




const Home = () => {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const componentRef = useRef();
const [data, setData] = useState([{
  Certificate_No: "",
  Weight: "",
  Shape_and_Cut: "",
  Colour: "",
  Measurement: "",
  Reflective_Index: "",
  Microscopic_Obr: "",
  Specific_Gravity: "",
  Species: "",
  ruby_type:''

}])
const [certificate_no, setCertificate_no] = useState("")



  const getData=()=>{


    setData([{
      Certificate_No: "",
      Weight: "",
      Shape_and_Cut: "",
      Colour: "",
      Measurement: "",
      Reflective_Index: "",
      Microscopic_Obr: "",
      Specific_Gravity: "",
      Species: "",
      ruby_type:''
    }])
    onSnapshot(query(collection(db, "certificatesData"),

    where('Certificate_No', '==', certificate_no),
    // where("rating", '==', 3),
    ),(snapshot)=>
   
     {
      
     var d= snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
       }
    ))
  
    if(d.length>0){
      setData(d)
      handleShow()
    }else{
      alert("Not Found")
    }
  
  }
    )

   

  

  }


  return (





    
    <div>
      <div
        style={{
          backgroundImage: `url(${imagGems})`,
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{ textAlign: "center", color: "#635cdb", paddingTop: "100px" }}
        >
          Magnify Gems Laboratory
        </h1>
        <p style={{color:"blue"}}>Trustfull Gems Testing Laboratory</p>
        <a href="#aboutUs">

        <button className="aboutBtn"> About Us</button>
        </a>
      </div>
      <div id="certificate" className="SerchContainer">
        <h2 style={{ color: "white" }}>Verify Your Gem Certification </h2>
        <h6 style={{ color: "white" }}>
          Please enter the certificate no. and click on view certification to
          get the certification detail. For more detail related to certificate
          please contact us at Info@gemslaboratory.com
        </h6>

        <div>
          <input
          value={certificate_no}
          onChange={(e)=>setCertificate_no(e.target.value)}
            type="text"
            name="certificate-search"
            id="certificate-search"
            placeholder="Search Cretificate"
          />
          <button  onClick={getData} id="btn">Search</button>
        </div>
        <h6 style={{ color: "white" }}>Example:-SFD45444544</h6>
      </div>
      <About />

      




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => componentRef.current}
      />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div style={{padding:"20px 20px"}} ref={componentRef}>
          <div style={{textAlign:"center", padding:"5px",borderWidth:"2px",borderColor:"black",backgroundColor:"#635cdb",width:"400px",alignItems:"center",alignContent:"center",margin:"20px auto 20px auto", borderRadius:"3px"}}>
            <h4 style={{color:"white",alignSelf:"center"}}>Magnify Gems Laboratory</h4>
          </div>
          <p>Certificate No. :- <b>{data[0].Certificate_No}</b> </p>
          <p>Weight :- <b>{data[0].Weight}</b> </p>
          <p>Shape & Cut :- <b>{data[0].Shape_and_Cut}</b> </p>
          <p>Colour :- <b>{data[0].Colour}</b> </p>
          <p>Measurement :- <b>{data[0].Measurement}</b> </p>

          
          {data[0].type=="diamond"?
          <div>


          <p>Clarity :- <b>{data[0].Clarity}</b> </p>
          <p>Inclusion :- <b>{data[0].inclusion}</b> </p>
          <p>Finish :- <b>{data[0].Finish}</b> </p>
          <p>Fluorences :- <b>{data[0].Fluorences}</b> </p>

          </div>
:
<div>



          <p>Reflective Index :- <b>{data[0].Reflective_Index}</b> </p>
          <p>Microscofic Obr. :- <b>{data[0].Microscopic_Obr}</b> </p>
          <p>Specific Gravity :- <b>{data[0].Specific_Gravity}</b> </p>
          <p>Species :- <b>{data[0].Species}</b> </p>


          </div>}
          <div style={{textAlign:"center", padding:"5px",borderWidth:"2px",borderColor:"black",backgroundColor:"grey",width:"200px",alignItems:"center",alignContent:"center",margin:"auto"}}>
            <h4 style={{color:"white",alignSelf:"center"}}>{data[0].type=="diamond"?data[0].diamondType: data[0].ruby_type}</h4>
          </div>
          </div></Modal.Body>
        
      </Modal>










        <div className="services">

<h2 style={{color:"white"}}>Our Services</h2>
<h6 style={{color:"white"}}>We expertise in Gems Testing and certification.</h6>
        
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
            <TbReportSearch style={{alignSelf:"center"}} size={"4em"} />
            </div>
            <div className="service-title">Diamond Grading Report</div>
            <div className="service-desc">
              This report not only covers 4C's but also indicates if the diamond
              is treated or enhanced in any way to its present state.
              GemsLaboratory follows widely accepted GIA - Grading system for
              grading of Diamonds
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
             <BsGem  style={{alignSelf:"center"}} size={"4em"}/>
            </div>
            <div className="service-title">Gemstone Identification Report</div>
            <div className="service-desc">
              Gemstones are identified on the basis of their Physical & Optical
              properties This Report mentions the properties of the Gemstone viz
              weight ,Shape & cut,measu-rement etc.
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
            <FaGem  style={{alignSelf:"center"}} size={"4em"}/>

            </div>
            <div className="service-title">Jewellery Authentication Report</div>
            <div className="service-desc">
              This report is meant for Jewellery items studded with Diamonds &
              Gemstones. This report mentions all important information related
              to Jewellery Item that is required by the supplier as well as by
              the buyer.
            </div>
          </div>
        </div>
        </div>








      






    </div>
  );
};

export default Home;
