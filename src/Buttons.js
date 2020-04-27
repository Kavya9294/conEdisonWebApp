import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class Buttons extends React.Component {
    
    render (){
        return (  
            <div className="buttons-ext">
                <Button  variant="primary" href={this.props.link1}>2D</Button> 
                <Button variant="primary" href={this.props.link2}>3D</Button> 
            </div>
        );
    }

}

export default Buttons;

