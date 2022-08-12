import "../../App.css";
import "../css/assets.css";
import AssetsTable from "../assets/asset_table";
import CButton from "../dashboard/navbar-button";
import Table from '../table/table';
import {axiosPost} from '../../helpers/axois';
import Navbar from "../../header/admin-navbar";
import Footer from "../../header/footer";
import { useState } from "react";
import Papa from "papaparse";

const Assetsuploadeddata = () => {

    const [col, setCol] = useState([])
    const [data, setData]= useState([])
    const [files, setFiles] = useState(null);

    function AssetpreviewData(){
        if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
            complete: function(results) {
                const filedata = results.data
                console.log("Finished:", results.data);
                // setSelectedFile(results.data)
                console.log(filedata)
                const headers = filedata[0]
                const heads = headers.map((head)=>({
                    title:head, field:head
                }))
                console.log(heads)
                setCol(heads)

                filedata.splice(0,1)
                filedata.splice(-1,1)
                console.log(filedata)
                setData(convertToJson(headers, filedata))
            }}
            )
        }
    }

    const convertToJson= (headers, data)=>{
        const rows =[]
        data.forEach(row => {
            let rowdata = {}
            row.forEach((element,index)=>{
                rowdata[headers[index]]=element
            })
            rows.push(rowdata)
        });
        console.log(rows)
        return(rows)
    }

    const uploadAsset = () => {
        const asset = axiosPost("upload_asset/", data)
    // console.log(data.name,categoryid)
    alert("Asset uploaded Successfully")
    }

  return (
    <div className="App">
        <Navbar />
        <br />
        <div style={{ display: "flex" }}>
            <div className="subheading fs-4"><b>Assets</b></div>
            <CButton/>
        </div>
        <div className="asset-body" style={{ display: "flex", marginLeft:"10%", marginBottom:"10px"}}>
            <form>
                <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={(e) => {
                    setFiles(e.target.files)
                    
                    }}
                />
            </form>
                <button
                    disabled={!files} onClick={AssetpreviewData}>
                    See Preview
                </button>
        </div>
        <div className="asset-option">
            {/* <Button/> */}
            <div className="asset-container ">
                <Table data={data} column={col} ></Table>
                <button disabled={!files} onClick={uploadAsset}>Upload</button>
            </div>
        </div>
    </div>
  );
};

export default Assetsuploadeddata;