import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import products from '../../exercise-2/mockups/data.json'
class ProDucts extends Component {

  
  render() {
    return (
        <div>
            <p>All Products</p>
            {Object.values(products).map(({id,name}) => (
                <div key={id}>
                    <Link to={`/products/${id}`} className='linkPro'>
                        {name}
                    </Link>
                </div>
            ))}
        </div>
    )
  }
}

export default ProDucts;