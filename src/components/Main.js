import React from 'react';
import NavBar from './NavBar';
import Menu from './Menu';
import BlogPost from './BlogPost';
import GridView from './GridView';
import jsonProjects from '../data/projects.json'; // 
import jsonCategorias from '../data/categorias.json'; 
import { useAppContext } from './AppContext';

function Main() {
  const { view } = useAppContext();
  let contentView;
  
  if (view === 'inicio') {
    contentView = <GridView data={jsonCategorias}/>;
  } else if (view === 'desarrollo') {
    contentView = <GridView data={jsonProjects}/>;
  } else if (view === 'blogLanding') {
    contentView = <BlogPost data={jsonProjects[0]}/>;  
  } else if (view === 'blogCrud') {
    contentView = <BlogPost data={jsonProjects[1]}/>;  
  } else if (view === 'blogPokemon') {
    contentView = <BlogPost data={jsonProjects[2]}/>;  
  } else if (view === 'blogReact') {
    contentView = <BlogPost data={jsonProjects[3]}/>;  
  } else if (view === 'blogCommerce') {
    contentView = <BlogPost data={jsonProjects[4]}/>;  
  }
  

  return (    
    <>	
    <div id="wrapper">
      <NavBar />
      <div id="main">
        <div className="inner">
          {contentView}
        </div>
      </div>
      </div>
      <Menu/>
      </>
      	  );
}

export default Main;