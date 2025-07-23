import React from 'react';
import { Card } from 'antd';
import { Image } from 'antd';
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
const Pro = () => (
  <Card title="Colors" className="head">
    <Card.Grid className="purple" style={gridStyle}>Brown</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}> Content</Card.Grid>
    <Card.Grid className="red"style={gridStyle}>Red</Card.Grid>
    <Card.Grid className="blue"style={gridStyle}>Blue</Card.Grid>
    <Card.Grid className="green"style={gridStyle}>Green</Card.Grid>
    <Card.Grid className="black"style={gridStyle}>Black</Card.Grid>
    <Card.Grid className="yellow"style={gridStyle}>Yellow</Card.Grid>
  </Card>
);

export default Pro;