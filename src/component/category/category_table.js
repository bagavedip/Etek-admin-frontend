import React, {useState, useEffect} from 'react';
import 'hammerjs';
import {axiosDelete, axiosGet, axiosPut} from '../../helpers/axois';
import Delete from '../../image/delete.png'
import Edit from '../../image/edit.png'
import '../css/table.css'
import { useNavigate} from 'react-router-dom';


export default function CategoryTable(){
  const [categories, setCategories] = useState([]);
  const [categorySearch, setCategorySearch] = useState("");
  const navigate = useNavigate("");

  useEffect(()=>{
    async function getAllCategory(){
      try {
        const categories = await axiosGet("categories/")
        console.log(categories.Data)
        setCategories(categories.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllCategory()
  }, [])

  function deletecategory (e, id){
    const category = axiosDelete("delete_category/"+id)
    alert("Record deleted for id " +id)
    window.location.reload(false);
  }

  function updatecategory(id){
    navigate('/update_category/'+id)
  }

  return (
    
    <div>
      <input className='admin-nav-button'
        type={"text"}
        placeholder= {"Category Filter"}
        onChange={(e)=>{
          setCategorySearch(e.target.value);
          }
        }
      />
      
      <br/>
      <div className='tablecontainer'>
        <table className='table'>
          <thead className='table-head'>
            <tr className='table-row'>
                {/* <th>
                    Sr. No.
                </th> */}
                <th>
                    CATEGORY NAME
                </th>
                <th>
                    ACTION
                </th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
            categories
            .filter((cat)=>{
              if (categorySearch === ""){
                return cat;
              }
              else if(cat.Category.toLowerCase().includes(categorySearch.toLowerCase())){
                return cat;
              }
            })
            .map((cat) => {
              return(
                <tr
                  key={cat.Id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <th component="th" scope="row">
                    {cat.Category}
                  </th>
                  <th>
                    <div style={{float:"left"}} value={cat.Id} onClick={((e) => deletecategory(e, cat.Id))}><img src={Delete}/></div>
                    <div style={{marginLeft:"10px", float:"left"}} onClick={((e)=>updatecategory(cat.Id))}><img src={Edit}/></div>
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

