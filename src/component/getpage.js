import { useEffect, useState } from "react";
import Navbar from "./navbar";
function Getdata() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pinCode: "",
    mobileNo: "",
    bloodGroup: "",
    address: "",
    gender: "",
    userName: "",
    password: ""
  });


  const [searchTerm, setSearchTerm] = useState("");
  const [uaserdata, setUserData] = useState([]);

  const [deleteid, setDeleteId] = useState("");

  // Filtering the data based on search term
  const filteredData = uaserdata.filter(
    (user) =>
      user.firstName && // Check if userName exists
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function getdatauser() {
    try{
      const res = await fetch("http://localhost:4002");
      const data = await res.json();
      setUserData(data);
  
    }
    catch(err){
console.log(err)
    }
  }

  // delete function
  async function deleteuser() {
    console.log("Deleting user:", deleteid.id);
    const res = await fetch(`http://localhost:4002/deleteuser/${deleteid.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    alert(data.message || "User deleted successfully");
  }

  useEffect(() => {
    getdatauser();
  }, []);

  function logout(){
    sessionStorage.removeItem("token");
    
  }

  function updatefunction(){
    console.log(data)
  }
const[editData,setEditData]=useState({
  firstName: "",
    lastName: "",
    email: "",
    pinCode: "",
    mobileNo: "",
    bloodGroup: "",
    address: "",
    gender: "",
    userName: "",
    password: ""
})
// ===========
async function editAllData(id){
  try {
    const response = await fetch(`http://localhost:4002/search/${id}`);
    const data = await response.json();
    setEditData(data); // Populate modal with fetched data
  } catch (err) {
    console.log("Error fetching data by ID:", err);
  }
}
async function updateData(e){
  e.preventDefault();
    console.log(editData)
  try{
    const response=await fetch(`http://localhost:4002/update/${editData._id}`,{
      method:"PUT",
      body:JSON.stringify(editData),
      headers: {
          "Content-Type": "application/json",
        },
    });
    const res = await response.json();
      alert(res.message);
      window.location.reload();
  }
  catch(err){
    console.log("Error updating data:", err);
    alert("Failed to update data.");
  }
}
  const handleEditChange=(e)=>{
    const{name,value}= e.target;
    setEditData((prevData)=>({
      ...prevData,
      [name]:value,
    }));
  }

  return (
    <div>
<>
 
 {/* Modal */}
 <div 
   className="modal fade"
   id="editModal"
   tabIndex={-1}
   aria-labelledby="exampleModalLabel"
   aria-hidden="true"
 >
   <div className="modal-dialog" >
     <div className="modal-content" style={{width:"800px",marginRight:"200px" }} >
       <div className="modal-header" >
         <h1 className="modal-title fs-5" id="exampleModalLabel">
        { editData.firstName}
         </h1>
         <button
           type="button"
           className="btn-close"
           data-bs-dismiss="modal"
           aria-label="Close"
         />
       </div>
       <div className="modal-body" style={{width:"800px",marginRight:"200px" }}>
       <form onSubmit={updateData}>
 <div className="d-flex justify-content-center mt-5" >
   <div style={{ width: "40%" }}>
     <label htmlFor=""> FirstName <b className="text-danger">*</b> </label>
     <input
       required
       type="text"
       name="firstName" // Add this name
       value={editData.firstName}
       placeholder=" firstName"
       onChange={handleEditChange} // Make sure this function works properly
     />

     <label htmlFor="">LastName<b className="text-danger">*</b> </label>
     <input
       required
       type="text"
       name="lastName" // Add this name
       value={editData.lastName}
       placeholder="lastName"
       onChange={handleEditChange}
     />

     <label htmlFor=""> Email <b className="text-danger">*</b> </label>
     <input
       required
       type="text"
       name="email" // Add this name
       value={editData.email}
       placeholder="email"
       onChange={handleEditChange}
     />

     <label htmlFor=""> PinCode <b className="text-danger">*</b> </label>
     <input
       required
       type="text"
       name="pinCode" // Add this name
       value={editData.pinCode}
       placeholder="pinCode "
       onChange={handleEditChange}
     />

     <label htmlFor="">Mobile No. <b className="text-danger">*</b> </label>
     <input
       type="text"
       required
       name="mobileNo" // Add this name
       value={editData.mobileNo}
       placeholder="mobileNo"
       onChange={handleEditChange}
     />
   </div>

   <div className="ms-5" style={{ width: "50%" }}>
     <label htmlFor="">Blood Group  <b className="text-danger">*</b> </label>
     <input
       type="text"
       required
       name="bloodGroup" // Add this name
       value={editData.bloodGroup}
       placeholder="bloodGroup"
       onChange={handleEditChange}
     />

     <label htmlFor="">Address <b className="text-danger">*</b> </label><br />
     <input
     
       style={{ width: "100%", backgroundColor: "#EEEEEE", border: "None" }}
       name="address" // Add this name
       value={editData.address}
       onChange={handleEditChange}>
     </input>

     <label htmlFor="">Gender<b className="text-danger">*</b> </label>
     <input
       className="mt-2"
       style={{ width: "100%", backgroundColor: "#EEEEEE", border: "None" }}
       name="gender" // Add this name
       value={editData.gender}
       onChange={handleEditChange}
     ></input>
   </div>
 </div>
 <button className="btn btn-outline-primary mb-2" type="submit">Update</button>
</form>

       </div>
      </div>
   </div>
 </div>
</>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="d-flex">
      <div className="mt-5 ms-2 mb-3 d-flex justify-content-between">
        <input
          type="text"
          style={{width:"400px"}}
          className="form-control "
          placeholder="Search by Username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
       <div style={{marginLeft:"60%"}}> <button  onClick={logout} className="btn btn-danger mt-5">Log out</button>
       </div>
       </div>
      <div className="text-center">
        <h1>
          <i className="bx bx-user"></i>
        </h1>
        <u>
          <h3>Clients Details</h3>
        </u>
        
      </div>

      <div className="table-responsive">
        <table className="table table-hover table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Image</th>

              <th scope="col">Mobile No</th>
              <th scope="col">Email</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Address</th>
              <th scope="col">Pin Code</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((e) => (
                <tr key={e._id}>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.gender}</td>
                  <td  ><img src={e.img} alt="" /></td>

                  <td>{e.mobileNo}</td>
                  <td>{e.email}</td>
                  <td>{e.bloodGroup}</td>
                  <td>{e.address}</td>
                  <td>{e.pinCode}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        setDeleteId({ id: e._id, firstName: e.firstName })
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
 <button
                    className="btn btn-outline-primary ms-5"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => editAllData(e._id)}
                  >
                    Edit job profile
                  </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Profile..<b  className="text-danger"><u>{deleteid.firstName}</u></b>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Do you want to delete <b className="text-danger"><u>{deleteid.firstName}</u></b> user?
              </h1>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                onClick={deleteuser}
                className="btn btn-primary"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
{/*  */}
<>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal1"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Modal title
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
        <div className="modal-body">

        <form onSubmit={updatefunction}> 
         <input type="text" disabled value={data.id} />
  <input
    type="text"
    value={data.firstName}
    onChange={(e) => setData({ ...data, firstName: e.target.value })}
  />
  <input
    type="text"
    value={data.lastName}
    onChange={(e) => setData({ ...data, lastName: e.target.value })}
  />
  <input
    type="text"
    value={data.gender}
    onChange={(e) => setData({ ...data, gender: e.target.value })}
  />
  <input
    type="text"
    value={data.mobileNo}
    onChange={(e) => setData({ ...data, mobileNo: e.target.value })}
  />
  <input
    type="text"
    value={data.email}
    onChange={(e) => setData({ ...data, email: e.target.value })}
  />
  <input
    type="text"
    value={data.bloodGroup}
    onChange={(e) => setData({ ...data, bloodGroup: e.target.value })}
  />
  <input
    type="text"
    value={data.address}
    onChange={(e) => setData({ ...data, address: e.target.value })}
  />
  <input
    type="text"
    value={data.pinCode}
    onChange={(e) => setData({ ...data, pinCode: e.target.value })}
  />
           <button type="submit" className="btn btn-primary">
            Save 
          </button>
  </form>

</div>

        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            send
          </button>
        </div>
      </div>
    </div>
  </div>
</>



    </div>
  );
}
// Current IP Address (103.59.204.242/32) added!

export default Getdata;
