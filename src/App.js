
import React from "react";
import { Route, Routes,BrowserRouter } from 'react-router-dom' 
import Login from "./component/login/login";
import Register from "./component/register/register";
import Config from "./component/config/config";
import Dashboard from './component/dashboard/dashboard';
import Admin_Dashboard from './component/dashboard/admin-dashboard';
import Dashboard1 from './component/dashboard/dashboard1';
import Assets from './component/assets/assets';
import UpdateAssets from './component/assets/update_asset';
import UploadAssets from './component/assets/upload_asset_csv';
import Asset from './component/assets/asset';
import AddAssets from './component/assets/add_asset';
import AddCategory from './component/category/add_category';
import UploadCategory from './component/category/upload_category_csv';
import CategoryDetails from './component/category/category';
import UpdateCategory from './component/category/update_category';
import AddProcess from './component/process/add_process';
import Process from './component/process/process';
import UpdateProcess from './component/process/update_process';
import AddFunction from './component/function/add_function';
import UpdateFunction from './component/function/update_function';
import Function from './component/function/function';
import AddLocation from './component/location/add_location';
import Location from './component/location/location';
import UpdateLocation from './component/location/update_location';
import AddEntity from './component/entity/add_entity';
import Entity from './component/entity/entity';
import UpdateEntity from './component/entity/update_entity';


function App() {
  return (
    <BrowserRouter>  
    <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route exact path="/register-host" element={<Register/>}/>
     <Route exact path="/config" element={<Config/>}/>
     <Route exact path="/dashboard" element={<Dashboard/>}/>
     {/* <Route exact path="/admin-dashboard" element={<Admin_Dashboard/>}/> */}
     <Route exact path="/dashboard1" element={<Dashboard1/>}/>
     <Route exact path="/assets" element={<Assets/>}/>
     <Route exact path="/update_asset/:id" element={<UpdateAssets/>}/>
     <Route exact path="/asset" element={<Asset/>}/>
     <Route exact path="/add_assets" element={<AddAssets/>}/>
     <Route exact path="/upload_assets" element={<UploadAssets/>}/>
     <Route exact path="/add_category" element={<AddCategory/>}/>
     <Route exact path="/upload_category" element={<UploadCategory/>}/>
     <Route exact path="/categories" element={<CategoryDetails/>}/>
     <Route exact path="/update_category/:id" element={<UpdateCategory/>}/>
     <Route exact path="/add_process" element={<AddProcess/>}/>
     <Route exact path="/process" element={<Process/>}/>
     <Route exact path="/update_process/:id" element={<UpdateProcess/>}/>
     <Route exact path="/add_function" element={<AddFunction/>}/>
     <Route exact path="/update_function/:id" element={<UpdateFunction/>}/>
     <Route exact path="/function" element={<Function/>}/>
     <Route exact path="/add_location" element={<AddLocation/>}/>
     <Route exact path="/location" element={<Location/>}/>
     <Route exact path="/update_location/:id" element={<UpdateLocation/>}/>
     <Route exact path="/add_entity" element={<AddEntity/>}/>
     <Route exact path="/entity" element={<Entity/>}/>
     <Route exact path="/update_entity/:id" element={<UpdateEntity/>}/>
     
     
      </Routes>
  </BrowserRouter>  
  );
}

export default App;
