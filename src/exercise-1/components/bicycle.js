import React, {Component} from 'react';
import ProductObject from './productObject';

class Bicycle extends Component {

  render() {
    return (
        <div>
            <ProductObject 
                name="Bicycle"
                id={1}
                price={30}
                quantity={15}
                desc="Bicycle is Good"
            />
        </div>
    )
  }
}

export default Bicycle;
