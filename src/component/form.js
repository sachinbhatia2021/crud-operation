import Navbar from "./navbar";
import "./form.css";
import Getdata from "./getpage";
import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pinCode: "",
    mobileNo: "",
    bloodGroup: "",
    address: "",
    gender: "",
   img:""
  });

  function sendData(e) {
    e.preventDefault();
    send();
    
  }

  async function send() {
    try {
      const response = await fetch("http://localhost:4002/post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const res = await response.json();

      alert(res.message);  // This should now correctly show the message
    } catch (err) {
      console.log(err);
      alert("An error occurred while sending data.");
    }
  }
  
  return (
    <>
      <Navbar />
      <div className="main-content text-center">
        <div className="">
          <img
           
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
            alt=""
          />
        </div>
      </div>

      

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Add new users..
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="center">
                <form onSubmit={sendData}>
                  <div className="d-flex">
                    <div className="">
                      <div className="">
                        <label htmlFor="">
                          First Name <b className="text-danger">*</b>
                        </label>
                        <br />
                        <input
                          required
                          value={data.firstName}
                          className="form-control"
                          type=""
                          onChange={(e) =>
                            setData({ ...data, firstName: e.target.value })
                          }
                        />
                      </div>

                      <div className="mt-2">
                      
                        <label htmlFor="">
                          Gender  <b className="text-danger ">*</b>
                        </label>
                        <br />
                        <select required
                        
                          value={data.gender} 
                          onChange={(e) =>
                            setData({ ...data, gender: e.target.value })
                          }
                          className="form-control">
                          <option selected  >select..</option>                        

                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="">
                          Address <b className="text-danger">*</b>
                        </label>
                        <br />
                        <input

                          value={data.address}
                          onChange={(e) =>
                            setData({ ...data, address: e.target.value })
                          }
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>

                      <div className="mt-2">
                        <label htmlFor="">
                          Blood Group <b className="text-danger">*</b>
                        </label>
                        <br />
                        <input
                          onChange={(e) =>
                            setData({ ...data, bloodGroup: e.target.value })
                          }
                          id=""
                          required
                          value={data.bloodGroup}
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="">
                          Img Address <b className="text-danger">*</b>
                        </label>
                        <br />
                        <input
                          id=""
                          value={data.userName}
                          onChange={(e) =>
                            setData({ ...data, img: e.target.value })
                          }
                          required
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="ms-5">
                      <div>
                        <label htmlFor="">Last Name</label>
                        <br />
                        <input
                          value={data.lastName}
                          onChange={(e) =>
                            setData({ ...data, lastName: e.target.value })
                          }
                          required
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="">
                          Email <b className="text-danger">*</b>
                        </label>
                        <br />
                        <input
                          id=""
                          value={data.email}
                          onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                          }
                          required
                          className="form-control"
                          type="email"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="">
                          Pin Code <b className="text-danger">*</b>
                        </label>
                        <br />
                        <input
                          required
                          value={data.pinCode}
                          onChange={(e) =>
                            setData({ ...data, pinCode: e.target.value })
                          }
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="">
                          Mobile No. <b className="text-danger">*</b>
                        </label>
                        <br />
                        <input
                          required
                          value={data.mobileNo}
                          onChange={(e) =>
                            setData({ ...data, mobileNo: e.target.value })
                          }
                          className="form-control"
                          type="number"
                        />
                      </div>
                      {/* <div className="mt-2">
                        <label htmlFor="">
                          Password <b className="text-danger">*</b>
                        </label>
                        <br />
                        <input
                          required
                          value={data.password}
                          onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                          }
                          className="form-control"
                          type="password"
                        />
                      </div> */}
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Form;
