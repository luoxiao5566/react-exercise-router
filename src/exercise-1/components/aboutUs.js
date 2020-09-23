import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {

  render() {
    return (
        <div>
            <p>Company:ThoughtWorks Local</p>
            <p>Location:chengdu</p>
            <p>For more information,please</p> 
            <p>viwe our <Link className='linkweb' to='/'>website</Link></p> 
            
        </div>
    )
  }
}

export default AboutUs;