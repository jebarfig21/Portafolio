import React from 'react';
import ProjectItem from './ProjectItem';

function GridView({ data }) {
    return (
      <section className="tiles">
        {data.map((item, index) => (
          <ProjectItem
            key={index} // Asegúrate de proporcionar una clave única para cada elemento en un mapa
            imageUrl={item.imageUrl}
            heading={item.heading}
            paragraph={item.paragraph}
            estilo={item.estilo} // Asegúrate de que los datos en data.json tengan un campo 'style'
          />
        ))}
      </section>
    );
  }
  

export default GridView;
