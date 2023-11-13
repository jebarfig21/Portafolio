import React from 'react';
function ProjectItem(props) {
  const {imageUrl, heading, paragraph, estilo, onClick } = props;

  return (
      <article className={`${estilo}`} onClick={onClick}>
        <span className="image">
          <img className="square-image" src={imageUrl} alt="" />
        </span>
        <div>        
        <h1>{heading}</h1>
         
        <div className="content">
          <h3>{paragraph}</h3>
        </div>
        </div>

      </article>
    
  );
  
}

export default ProjectItem;
