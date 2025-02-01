import { Col } from "react-bootstrap";
import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={siteUrl} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} />
        <div className="proj-txtx text-black">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
      </div>
    </Col>
  )
}
