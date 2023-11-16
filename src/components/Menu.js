import React from 'react';
import { useAppContext } from './AppContext';

function Menu({ data }) {
  const { changeView } = useAppContext();
  
  return (
   <nav id="menu">
    <h2>Menu</h2>
    <button onClick={() => {changeView("inicio");}}>Inicio</button>
    {data.map((item, index) => (
     <button onClick={() => {changeView(item.llave);}}>{item.heading}</button>
    
    ))}
    </nav>);
}

export default Menu;