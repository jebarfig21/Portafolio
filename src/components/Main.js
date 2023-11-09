import React from 'react';
import NavBar from './NavBar';
import ProjectGrid from './GridView';
import BlogPost from './BlogPost';
import jsonData from '../data/projects.json'; // Importa tu archivo JSON
import jsonCategorias from '../data/categorias.json'; // Importa tu archivo JSON
import Header from './Header';
import InicioView from './Inicio';
import ProjectsView from './ProjectsView';

function Main() {
  return (    	
      <div id="wrapper" >
        <NavBar/>
        <div id="main">
					<div className="inner">
							<InicioView/>
              <ProjectsView/>

					</div>
          
        </div> 
      </div>
  );
}

export default Main;