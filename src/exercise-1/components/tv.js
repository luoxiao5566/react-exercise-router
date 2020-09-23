import React, {Component} from 'react';
import ProductObject from './productObject';

class TV extends Component {

  render() {
    return (
        <div>
            <ProductObject 
                name="TV"
                id={2}
                price={40}
                quantity={16}
                desc="TV is good"
            />
        </div>
    )
  }
}

export default TV;

