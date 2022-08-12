import React, {useState, useEffect} from 'react';
import 'hammerjs';
import {axiosDelete, axiosGet} from '../../helpers/axois';
import Delete from '../../image/delete.png'
import Edit from '../../image/edit.png'
import { useNavigate} from 'react-router-dom';


export default function AssetsTable(){
  console.log(localStorage.token)
  const [Assets, setAssets] = useState([]);
  const [AssetNameSearch, setAssetNameSearch] = useState("");
  const navigate = useNavigate("");
  
  
  useEffect(()=>{
    async function getAllAssets(){
      try {
        const asset = await axiosGet("asset/")
        console.log(asset.Data)
        setAssets(asset.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllAssets()
  }, [])

  
  function deleteasset (e, id){
    const asset = axiosDelete("delete_asset/"+id)
    alert("Record deleted for id " +id)
    alert("wait")
    window.location.reload(false);
  }

  function updateasset(id){
    navigate('/update_asset/'+id)
  }

  return (
    
    <div>
      <input className='admin-nav-button'
        type={"text"}
        placeholder= {"Asset Name Filter"}
        onChange={(e)=>{
          setAssetNameSearch(e.target.value);
          }
        }
      />
      
      <br/>
      <div className='tablecontainer'>
        <table className='table'>
          <thead className='table-head'>
            <tr className='table-row'>
              <th>
                ASSET NAME
              </th>
              <th>
                CATEGORY
              </th>
              <th>
                BUSINESS ENTITY
              </th>
              <th>
                LOCATION
              </th>
              <th>
                ADDED DATE
              </th>
              <th>
                FUNCTION
              </th>
              <th>
                CRITICALITY
              </th>
              <th>
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
            Assets
            .filter((asset)=>{
              if (AssetNameSearch === ""){
                return asset;
              }
              else if(asset.Asset_Name.toLowerCase().includes(AssetNameSearch.toLowerCase())){
                return asset;
              }
            })
            .map((asset) => {
              return(
                <tr
                  key={asset.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <th component="th" scope="row">
                    {asset.Asset_Name}
                  </th>
                  <th>{asset.Category}</th>
                  <th>{asset.Entity}</th>
                  <th>{asset.Location}</th>
                  <th>{asset.Created_date}</th>
                  <th>{asset.Function_Name}</th>
                  <th>{asset.Criticality}</th>
                  <th>
                    <div style={{ float:"left"}} value={asset.id} onClick={((e) => deleteasset(e, asset.id))}><img src={Delete}/></div>
                    <div style={{marginLeft:"10px", float:"left"}} onClick={((e)=>updateasset(asset.id))} ><img src={Edit}/></div>
                  </th>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

