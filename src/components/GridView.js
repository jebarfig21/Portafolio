import React from 'react';
import ProjectItem from './ProjectItem';
import { useAppContext } from './AppContext';

function GridView({ data }) {
  const { changeView } = useAppContext();
        
    return (
      <section className="tiles">
        {data.map((item, index) => (
          <ProjectItem
            key={index}
            llave={item.llave}
            imageUrl={item.imageUrl}
            heading={item.heading}
            paragraph={item.paragraph}
            estilo={item.estilo} 
            onClick={() => {
              changeView(item.llave);
            }}
          />
        ))}
      </section>
    );
  }
  

export default GridView;
