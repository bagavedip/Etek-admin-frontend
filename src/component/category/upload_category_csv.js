import React, {useState} from 'react';
import "../../App.css";
import "../css/assets.css"
import Sidebutton from "../dashboard/navbar-button";
import Navbar from "../../header/admin-navbar";

export default function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [result, setResult] = useState([]);
    const [status, setStatus] = useState("");

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);
        
		const category = fetch(
			"http://netrum.localhost:8000/upload_category/",
			{
				method: 'POST',
				body: formData,
			}
		)
        .then((Response) => Response.json())
        .then((result) => {
            console.log('Success:', result.Data);
            setResult(result.Data)
            setStatus(result.Status)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
	};

	return(
    <div className="App">
        <Navbar />
        <br />
        <div style={{ display: "flex" }}>
            <div className="subheading fs-4"><b>Assets/Category</b></div>
            <Sidebutton/>
        </div>
        <div className='asset-body' style={{ display: "flex", marginLeft:"10%", marginBottom:"10px"}}>
            <form>
			    <input type="file" name="file" accept='.csv' onChange={changeHandler} />
            </form>
			{/* {isFilePicked ? (
				<div style={{marginRight:"10px"}}>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p style={{marginRight:"10px"}}>Select a file to show details</p>
			)} */}
			<div>
				<button disabled={!isFilePicked} onClick={handleSubmission}>Submit</button>
			</div>
        </div>
        
        <div className='asset-option'>
            <div className='asset-container'>
                { status===200 ?(
                <p>Data Submitted Successfully</p>
                ):( status ===406)?(
                    <p>Error! Category Filled is important</p>
                ):(
                    <p>Please, Select a file!</p>
                )}
                <div className='tablecontainer'>
                    <table className='table'>
                        <thead className='table-head'>
                            <tr className='table-row'>
                                <th>
                                    Category
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            result.map((res)=>{
                                return (
                                    <tr>
                                        <th>{res.category}</th>
                                    </tr>
                            )})
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
	)
}