import React from "react";

function BlogPost(props){
const { heading,headingURL, resumen, explicacion, imagen1,urlGithub, elementos} = props;
  return (
    <div className="blog-post">
      <h1>
        <a href={headingURL} target="_blank" rel="noopener noreferrer">
          {heading}
        </a>
      </h1>
      <p>{resumen}</p>
      <p>
        {explicacion}
      </p>
      <img src={imagen1} alt="Descripción de la imagen" />
      <h2>Tecnologías utilizadas</h2>
      <ul>
      {elementos.map((elemento, index) => (
        <li key={index}>{elemento}</li>
      ))}

    </ul><h2>Elementos Verticales</h2>
      <div className="code-section">
        <h2>Código</h2>
        <p>El respositorio de código se encuentra disponible para consulta en la siguiente liga.</p>
        {/* Agrega más detalles sobre la licencia o cualquier otra información necesaria. */}
        <a href={urlGithub} target="_blank" rel="noopener noreferrer">
          <img src="https://firebasestorage.googleapis.com/v0/b/protafolio-d54aa.appspot.com/o/github.png?alt=media&token=e56b543f-5f49-4f35-8049-00300bfa73e7" alt="Logo de GitHub" />
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
