import React from 'react';
import Card from 'react-bootstrap/Card';

interface CustomCardProps {
  title: string; 
  tags: string[];
  image: string;
  desc: string; 
}

function CustomCard({title,tags,image,desc}:CustomCardProps) {
  return (
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div className='d-flex justify-content-evenly'>
          {tags.map((tag, index) => (
            <span key={index} className='bg-warning p-1 rounded'>
              {tag}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard; // Export the renamed component
