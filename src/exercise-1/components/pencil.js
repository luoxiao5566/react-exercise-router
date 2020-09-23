import React, {Component} from 'react';
import ProductObject from './productObject';

class Pencil extends Component {

  render() {
    return (
        <div>
            <ProductObject 
                name="Pencil"
                id={3}
                price={50}
                quantity={17}
                desc="Pencil is good"
            />
        </div>
    )
  }
}

export default Pencil;

