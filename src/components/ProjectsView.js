import React from 'react';
import GridView from './GridView';
import jsonProjects from '../data/projects.json'; // Importa tu archivo JSON
function ProjectsView() {
  return (
    <>
        <GridView data={jsonProjects} />
    </>
         );
}


export default ProjectsView;