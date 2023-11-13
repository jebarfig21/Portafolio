import React from "react";
const BlogPost = ({ data }) => {
  return (
    <div className="blog-post">
      <h1 className="titulo">
        <a href={data.headingURL} target="_blank" rel="noopener noreferrer">
          {data.heading}
        </a>
      </h1>
     
      <img src={data.imageUrl} alt="" />
     
      <h3 className="subtitulos">{data.paragraph}</h3>
      <p className="parrafo">
        {data.explicacion}
      </p>
      <h2 className="subtitulos">Tecnologías utilizadas</h2>
      <ul className="parrafo">
        {data.elementos.map((elemento, index) => (
          <li key={index} className="parrafo">{elemento}</li>
        ))}
      </ul>
      <div className="code-section">
        <h2 className="subtitulos" >Código</h2>
        <p className="parrafo">El respositorio de código se encuentra disponible para consulta en la siguiente liga.</p>
        {/* Agrega más detalles sobre la licencia o cualquier otra información necesaria. */}
        <a href={data.urlGithub} target="_blank" rel="noopener noreferrer">
          <img src="https://firebasestorage.googleapis.com/v0/b/protafolio-d54aa.appspot.com/o/github.png?alt=media&token=e56b543f-5f49-4f35-8049-00300bfa73e7" alt="Logo de GitHub" />
        </a>
      </div>
    </div>
  );
};
export default BlogPost;
