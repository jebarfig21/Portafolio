import React from 'react';
function ProjectItem(props) {
  const { imageUrl, heading, paragraph, estilo } = props;

  return (
    <article className={`${estilo}`}>
        <span className="image">
        <img className="square-image"  src={imageUrl} alt="" />
      </span>
      <a href="generic.html">
        <h2>{heading}</h2>
        <div className="content">
          <p>{paragraph}</p>
        </div>
      </a>
    </article>
  );
}

export default ProjectItem;
