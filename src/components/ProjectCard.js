import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, prjUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>View <a href={prjUrl}>Here</a></p>
        </div>
      </div>
    </Col>
  )
}
