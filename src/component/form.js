import Navbar from "./navbar";
import './form.css';
import Getdata from "./getpage";

function Form() {
    return (
        <>
            <Navbar />
            <div className="main-content text-center">
        <div className="img"> 

        </div>
        <button className="btn btn-primary" id="btn" >Add users</button>
            </div>

            <Getdata/>
        </>
    );
}

export default Form;
