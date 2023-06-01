import React from 'react';
import Switch from 'rc-switch';


export default function Postavke()
{
    return(
        <>
        <h1>Postavke</h1>
       <ul className='postavke'>
        <li>Notifikacija <Switch/></li>
        <li>Nova prijava <Switch/></li>
        <li>Brisanje prijave <Switch/></li>
        
       </ul>

        </>
    )
}








