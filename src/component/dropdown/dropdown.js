import { useState } from 'react';
import '../css/dropdown.css';

function Dropdownoption({selected, setSelected}){
    const[isActive, setIsActive]= useState(false)
    const options = ['option1','option2','option3']
    return(
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={e =>
            setIsActive(!isActive)}>
            Add/View <span className='fa fa-caret-down'></span></div>
            {isActive && (
                <div className='dropdown-content'>
                    {options.map(option => (
                        <div onClick={(e) =>{
                            setSelected(option)
                            setIsActive(false)
                            }}
                        className='dropdown-item'>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Dropdownoption;

