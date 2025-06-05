import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12}>
      <div className="proj-imgbx" style={{ width: '100%' }}>
        <img 
          src={imgUrl}
          alt={title}
          style={{
            width: "100%",
            height: "500px", // Keeps aspect ratio
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
