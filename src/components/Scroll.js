import React from 'react';
import '../components/Scroll.css';


const Scroll = (props) =>{
    return (
        <div className='scroll'>
            {props.children}
        </div>
    )
}
export default Scroll;