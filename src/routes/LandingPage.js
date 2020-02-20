import React from 'react';
import { Col } from 'react-flexbox-grid';
import '../assets/css/Global.css';

/* 
On the Landing page, when the user clicks on the Ask an expert button, 
the Form should appear in place of the Landing Page.
*/

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className='block-1'>
          <Col xsOffset={1} xs={10} sm={10} md={10} lg={10} className='flex-container'>
            <h4>Not what you expected?</h4>
            <a href='/form' className='flex-item txt'>Ask an expert</a>
          </Col>
        </div>
        <hr />
      </div>
    )
  }

};

export default LandingPage;
