import React from 'react';
import GridView from './GridView';
import jsonCategorias from '../data/categorias.json'; // Importa tu archivo JSON
import Header from './Header';
function InicioView() {
  return (
    <>
        <Header/>
        <GridView data={jsonCategorias} />
    </>
         );
}


export default InicioView;