import React from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
    const navigate = useNavigate();

    return (
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <Card style={{ margin: '1rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <button 
                onClick={(e) => navigate(`/edit?url=${props.img}`)} 
                style={{ border: 'none', color: 'white', backgroundColor: 'blue', borderRadius: '5px', width:'80px', height:'40px', fontSize:'large' }}
              >
                Edit
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    );
};

export default MemeCard;