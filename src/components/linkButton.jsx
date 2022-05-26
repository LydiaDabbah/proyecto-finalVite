import React from "react";
import { Link } from "react-router-dom";
const LinkButton = ({clase='boton-link',title,linkTo,onClick}) => {

  
  return (
    <div className={clase}>
      <button >
        <Link onClick={onClick&&onClick} style={{ color: "inherit", textDecoration: "inherit" }} to={linkTo}>
          
          {title}
        </Link>
      </button>
    </div>
  );
};

export default LinkButton;


