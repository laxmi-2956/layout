// import Container from 'react-bootstrap/Container';

// import Navbar from 'react-bootstrap/Navbar';
// // import {  Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css'

// function App() {
  
//  return (
//   <>
   
//     <Container>
      
//          <div className='col-12 boot'>
//           <h1>hello world</h1>
//          </div>  
//     </Container>

//     <Container>
//     <div className="d-flex   get" style={{ paddingLeft : '10px'}}>
//                  <div className='d-flex col-12'>
//                  <div 

                 
              
                  
//                   className="bg-secondary mx-5"
                  
//                   style={{width: "370px", height:"120px"}}

//                 >
//                     <div className="card-body bg-info">
//                 <div className="bg-secondary mb-3" style={{ height: "150px" }}></div>
              
//                 <p className="card-text">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio, totam, veniam repudiandae optio aspernatur ducimus dolorem laborum molestiae ullam accusamus laboriosam enim beatae? Ut accusantium voluptates rerum hic ducimus!
//                 </p>
//                 <button className="btn btn-primary">Go somewhere</button>
//               </div>
//                 </div>
//                 <div
//                   className="bg-secondary mx-5"
//                   style={{width: "370px", height:"120px"}}
//                 >
//                     <div className="card-body">
//                 <div className="bg-secondary mb-3" style={{ height: "150px" }}></div>
                
//                 <p className="card-text">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio, totam, veniam repudiandae optio aspernatur ducimus dolorem laborum molestiae ullam accusamus laboriosam enim beatae? Ut accusantium voluptates rerum hic ducimus!
//                 </p>
//                 <button className="btn btn-primary">Go somewhere</button>
//               </div>
//                 </div>
//                 <div  
//                   className="bg-secondary mx-5"
//                   style={{ width: "370px", height:"120px"}}
//                 >
//                     <div className="card-body">
//                 <div className="bg-secondary mb-3" style={{ height: "150px" }}></div>
               
//                 <p className="card-text">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio, totam, veniam repudiandae optio aspernatur ducimus dolorem laborum molestiae ullam accusamus laboriosam enim beatae? Ut accusantium voluptates rerum hicLorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio, totam, veniam repudiandae optio aspernatur ducimus dolorem laborum molestiae ullam accusamus laboriosam enim beatae? Ut accusantium voluptates rerum hic
//                 </p>
//                 <button className="btn btn-primary">Go somewhere</button>
//               </div>
//                 </div>
//                  </div>
//               </div>  
//     </Container>
//   </>
//   )
// }
// export default App  




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

const  App = () => {
  return (
    <div className="container mt-4"  style={{ marginLeft : '100px'}} >
     
      <div id="carouselExampleControls" style={{width : '1260px' , marginLeft : '16px'}} className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" w-100 bg-secondary" style={{ height: "300px" }}>
            <h1 style={{textAlign : 'center' ,  paddingTop : '120px'}}>Hello React</h1>
            
            </div>
          </div>
          <div className="carousel-item">
            <div className=" w-100 bg-secondary" style={{ height: "300px" }}>
            <h1 style={{textAlign : 'center' ,  paddingTop : '120px'}}>Hello World</h1>
              
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-100 bg-secondary" style={{ height: "300px" }}>
            <h1 style={{textAlign : 'center' ,  paddingTop : '120px'}}>Hello Javascript</h1>
             
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

   
      <div className="row">
      
          <div className="col-md-4 d-flex w-100">
            <div className="card mb-4 ms-3 me-3" style={{ width : '600px' , borderRadius : '0px'}}>
              <div className="card-body">
                <div className=" nt  mb-3" style={{ height: "180px"}}></div>
               
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio, totam, veniam repudiandae optio aspernatur ducimus dolorem laborum molestiae ullam accusamus laboriosam enim beatae? Ut accusantium voluptates rerum hic ducimus!
                </p>
                <button className="btn btn-dark">Submit</button>
              </div>
            </div>
            <div className="card mb-4 ms-3 me-3" style={{ width : '600px' , borderRadius : '0px'}}>
              <div className="card-body">
                <div className="nt mb-3" style={{ height: "180px" }}></div>
                
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio, totam, veniam repudiandae optio aspernatur ducimus dolorem laborum molestiae ullam accusamus laboriosam enim beatae? Ut accusantium voluptates rerum hic ducimus!
                </p>
                <button className="btn btn-dark">Submit</button>
              </div>
            </div>
            <div className="card mb-4 ms-3 me-3" style={{ width : '600px'   , borderRadius : '0px'}}>
              <div className="card-body">
                <div className="nt mb-3" style={{ height: "180px" }}></div>
            
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio, totam, veniam repudiandae optio aspernatur ducimus dolorem laborum molestiae ullam accusamus laboriosam enim beatae? Ut accusantium voluptates rerum hic ducimus!
                </p>
                <button className="btn btn-dark">Submit</button>
              </div>
            </div>
          </div>
     
      </div>
    </div>
  );
};

export default App;
