
import {axiosDelete, axiosGet} from '../../helpers/axois';
import { useEffect, useState } from 'react';
import '../../App.css';
import Table from '../table/table';
import CButton from "../dashboard/navbar-button";
import Navbar from "../../header/admin-navbar";
import Footer from "../../header/footer";
import Delete from '../../image/delete.png'

function App() {
  const [assets, setAssets] = useState([]);
  const [AssetNameSearch, setAssetNameSearch] = useState("");

  useEffect(()=>{
    async function getAllAssets(){
      try {
        const asset = await axiosGet("asset/")
        console.log("in doughnut")
        console.log(asset.Data)
        console.log("after doughnut")
        setAssets(asset.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllAssets()
  }, [])

  const column = [
    { heading: 'Asset Name', value: 'Asset_Name' },
    { heading: 'Category', value: 'Category' },
    { heading: 'Criticality', value: 'Criticality' },
    { heading: 'Function Name', value: 'Function_Name' },
    { heading: 'Location', value: 'Location' },
    { heading: 'Action', value: '<img width="10%" src={Delete} />' },
  ]

  return (
    <div className="App">
        <Navbar />
        <br />
        <div style={{ display: "flex" }}>
            <div className="subheading fs-4"><b>Assets</b></div>
            <CButton/>
        </div>
        <div className="asset-body" style={{ display: "flex" }}>
            <button
            className="admin-nav-button" style={{ marginLeft: "10%" }}
            >
            Filter1
            </button>
            <button
            className="admin-nav-button" style={{ marginLeft: "1%"}}
            >
            Filter2
            </button>
            <button
            className="admin-nav-button" style={{ marginLeft: "1%" }}
            >
            Filter3
            </button>
        </div>
        <div>
            <input className='admin-nav-button'
            type={"text"}
            placeholder= {"Asset Name Filter"}
            onChange={(e)=>{
            setAssetNameSearch(e.target.value);
            }
            }
            />
        </div>

        <div className="asset-option">
            {/* <Button/> */}
            <div className="asset-container ">
            
            
            <Table data=
                {assets
                .filter((asset)=>{
                if (AssetNameSearch === ""){
                    return asset;
                }
                else if(asset.Asset_Name.toLowerCase().includes(AssetNameSearch.toLowerCase())){
                    return asset;
                }
                })
                } column={column} />
            
            </div>
        </div>
    </div>
  );
}

export default App;