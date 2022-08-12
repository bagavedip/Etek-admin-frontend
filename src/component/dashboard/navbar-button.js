import { useState, useRef } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import '../css/dropdown.css';
import DownArrow from '../../image/DownArrow1.png';
import Download from '../../image/download.png';
import Plusbutton from '../../image/add.png';
import Eye from '../../image/view.png';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { CSVLink, CSVDownload } from "react-csv";
import Papa from "papaparse";





function Dropdownoption({}) {

    const assetData = [
        ["AssetName", "function","criticality", "category"],
        ["AssetName1", "Function1:Same as in Function Table","High/Medium/Low", "Category1:Same as in Category Table"],
        ["AssetName2", "Function2:Same as in Function Table","High/Medium/Low", "Category2:Same as in Category Table"],
        ["AssetName3", "Function3:Same as in Function Table","High/Medium/Low", "Category3:Same as in Category Table"],
      ];
    const categoryData = [
        ["category"],
        ["Category_value1"],
        ["Category_value2"],
        ["Category_value3"]
      ];
    const locationData = [
        ["location", "entity_id"],
        ["Location1", "EntityName1:Same as Entity Table"],
        ["Location2", "EntityName2:Same as Entity Table"],
        ["Location3", "EntityName3:Same as Entity Table"]
      ];
    const entityData = [
        ["entityname"],
        ["EntityName1"],
        ["EntityName2"],
        ["EntityName3"]
      ];
    const processData = [
        ["process"],
        ["Process1"],
        ["Process2"],
        ["Process3"],
      ];
    const functionData = [
        ["function_name", "location_id"],
        ["FunctionName1", "Location1:Same as in location table"],
        ["FunctionName2", "Location2:Same as in location table"],
        ["FunctionName3", "Location3:Same as in location table"],
      ];

    const[isActive, setIsActive]= useState(false);
    const[isDownloadActive, setIsDownloadActive]= useState(false);
    const[isImportActive, setIsImportActive]= useState(false);
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleClickOpen = () => {
        setOpen(true);
      };
      
      const handleClose = () => {
        setSelectedFile(null)
        setOpen(false);
      };

    const navigate = useNavigate();

    const navigateToAddAssets = () => {
      // 👇️ navigate to /add_asset
      navigate('/add_assets');
    };

    const navigateToAddCategory = () => {
        // 👇️ navigate to /add_category
        navigate('/add_category');
      };

    
    const navigateToAssets = () => {
        // 👇️ navigate to /asset
        navigate('/Assets');
    };

    const navigateToCategory = () => {
        // 👇️ navigate to /category
        navigate('/categories');
    };

    const navigateToProcess = () => {
        // 👇️ navigate to /process
        navigate('/process');
    };

    const navigateToAddProcess = () => {
        // 👇️ navigate to /add_process
        navigate('/add_process');
    };

    const navigateToAddFunction = () => {
    // 👇️ navigate to /add_function
    navigate('/add_function');
    };

    const navigateToFunction = () => {
        // 👇️ navigate to /function
        navigate('/function');
        };
    
    const navigateToLocation = () => {
        // 👇️ navigate to /location
        navigate('/location');
        };


    const navigateToAddEntity = () => {
        // 👇️ navigate to /add_entity
        navigate('/add_entity');
        };

    const navigateToEntity = () => {
        // 👇️ navigate to /entity
        navigate('/entity');
        };

    const navigateToAddLocation = () => {
    // 👇️ navigate to /add_location
    navigate('/add_location');
    };

    const navigatetoUploadAsset = () => {
        // navigate to /upload asset
        navigate('/upload_assets');
    }

    const navigatetoUploadCategory=()=>{
        //navigate to /upload category
        navigate('/upload_category')
    }

    // function submit(s){
        
    //     alert("Asset Added Successfully with file "+selectedFile.name)
    //     console.log(selectedFile.name)
    //     alert(selectedFile.name)
    //     window.location.reload(false);
    //   }

    return(
        <div style={{width:"100%"}}>
            <div className='dropdown' style={{float:"right", marginRight:"14%"}}>
                <div className='dropdown-btn' onClick={e =>
                setIsActive(!isActive)}>
                Add/View <img src={DownArrow} alt="arrow" height="100%" style={{marginLeft:"5px"}} /></div>
                {isActive && (
                    <div className='dropdown-content'>
                    <div className='dropdown-item'>
                        Assets
                        <div className='viewbutton' onClick={navigateToAssets} style={{float:"Right", width:"18%"}}>
                            <img src={Eye} alt="View_Asset" width="100%" height="50%" style={{float:"right", marginLeft:"10px", padding:"0px 5px 5px 5px"}}/>
                        </div>
                        <div className='plusbutton' onClick={navigateToAddAssets} style={{float:"Right", width:"15%", padding:"5px", marginRight:"5px"}}>
                            <img src={Plusbutton} alt="Add_Asset" style={{float:"right"}} />
                        </div>
                    </div>
                    <div className='dropdown-item'>
                        Assets Category
                        <div className='viewbutton' onClick={navigateToCategory} style={{float:"Right", width:"18%"}}>
                            <img src={Eye} alt="View_Category" width="100%" height="50%" style={{float:"right", marginLeft:"10px", padding:"0px 5px 5px 5px"}}/>
                        </div>
                        <div className='plusbutton' onClick={navigateToAddCategory} style={{float:"Right", width:"15%", padding:"5px", marginRight:"5px"}}>
                            <img src={Plusbutton} alt="Add_Asset" style={{float:"right"}} />
                        </div>
                    </div>
                    <div className='dropdown-item'>
                        Business Entity
                        <div className='viewbutton' onClick={navigateToEntity} style={{float:"Right", width:"18%"}}>
                            <img src={Eye} alt="View_Entity" width="100%" height="50%" style={{float:"right", marginLeft:"10px", padding:"0px 5px 5px 5px"}}/>
                        </div>
                        <div className='plusbutton' onClick={navigateToAddEntity} style={{float:"Right", width:"15%", padding:"5px", marginRight:"5px"}}>
                            <img src={Plusbutton} alt="Add_Asset" style={{float:"right"}} />
                        </div>
                    </div>
                    <div className='dropdown-item'>
                        Function
                        <div className='viewbutton' onClick={navigateToFunction} style={{float:"Right", width:"18%"}}>
                            <img src={Eye} alt="View_Function" width="100%" height="50%" style={{float:"right", marginLeft:"10px", padding:"0px 5px 5px 5px"}}/>
                        </div>
                        <div className='plusbutton' onClick={navigateToAddFunction} style={{float:"Right", width:"15%", padding:"5px", marginRight:"5px"}}>
                            <img src={Plusbutton} alt="Add_Function" style={{float:"right"}} />
                        </div>
                    </div>
                    <div className='dropdown-item'>
                        Locations
                        <div className='viewbutton' onClick={navigateToLocation} style={{float:"Right", width:"18%"}}>
                            <img src={Eye} alt="View_Location" width="100%" height="50%" style={{float:"right", marginLeft:"10px", padding:"0px 5px 5px 5px"}}/>
                        </div>
                        <div className='plusbutton' onClick={navigateToAddLocation} style={{float:"Right", width:"15%", padding:"5px", marginRight:"5px"}}>
                            <img src={Plusbutton} alt="Add_Location" style={{float:"right"}} />
                        </div>
                    </div>
                    <div className='dropdown-item'>
                        Process
                        <div className='viewbutton' onClick={navigateToProcess} style={{float:"Right", width:"18%"}}>
                            <img src={Eye} alt="View_Process" width="100%" height="50%" style={{float:"right", marginLeft:"10px", padding:"0px 5px 5px 5px"}}/>
                        </div>
                        <div className='plusbutton' onClick={navigateToAddProcess} style={{float:"Right", width:"15%", padding:"5px", marginRight:"5px"}}>
                            <img src={Plusbutton} alt="Add_Process" style={{float:"right"}} />
                        </div>
                    </div>
                        
                    </div>
                )}
            </div>
            <div className='dropdown' style={{float:"right"}}>
                <div className='dropdown-btn' onClick={e =>
                setIsDownloadActive(!isDownloadActive)}>
                Download Sample <img src={DownArrow} alt="arrow" height="100%" style={{marginLeft:"5px"}}/></div>
                {isDownloadActive && (
                    <div className='download-dropdown-content'>
                        <div className='dropdown-item'>
                            <CSVLink data={assetData} filename={"Asset-Data-Sample"}>
                                Assets
                                <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                            </CSVLink>
                        </div>
                        <div className='dropdown-item'>
                            <CSVLink data={categoryData} filename={"Category-Data-Sample"}>
                                Assets Category
                                <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                            </CSVLink>
                        </div>
                        <div className='dropdown-item'>
                            <CSVLink data={entityData} filename={"Entity-Data-Sample"}>
                                Business Entity
                                <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                            </CSVLink>
                        </div>
                        <div className='dropdown-item'>
                            <CSVLink data={functionData} filename={"Function-Data-Sample"}>
                                Function
                                <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                            </CSVLink>
                        </div>
                        <div className='dropdown-item'>
                            <CSVLink data={locationData} filename={"Location-Data-Sample"}>
                                Locations
                                <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                            </CSVLink>
                        </div>
                        <div className='dropdown-item'>
                            <CSVLink data={processData} filename={"Process-Data-Sample"}>
                                Process
                                <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                            </CSVLink>
                        </div>
                    </div>
                )}
            </div>
            <div className='dropdown' style={{width:"",float:"right"}}>
                <div className='dropdown-btn' onClick={e =>
                setIsImportActive(!isImportActive)}>
                Import CSV <img src={DownArrow} alt="arrow" height="100%" style={{marginLeft:"5px"}}/></div>
                {isImportActive && (
                    <div className='import-dropdown-content'>
                        <div className='dropdown-item'>
                            Assets
                            <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                        </div>
                        <div className='dropdown-item' onClick={navigatetoUploadCategory}>
                            Assets Category
                            <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                        </div>
                        <div className='dropdown-item'>
                            Business Entity
                            <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                        </div>
                        <div className='dropdown-item'>
                            Function
                            <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                        </div>
                        <div className='dropdown-item'>
                            Locations
                            <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                        </div>
                        <div className='dropdown-item'>
                            Process
                            <img src={Download} alt="download" height={"50%"} style={{float:"right"}}/>
                        </div>
                    </div>
                )}
            </div>
            <button
            className="admin-nav-button" onClick={navigatetoUploadAsset} style={{float:"right", padding:"14px", marginRight:"10px"}}
            >
            Import CSV
            </button>
        </div>
    );
}
export default Dropdownoption;

