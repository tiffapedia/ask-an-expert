import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

/* 
On the Landing page, when the user clicks on the Ask an expert button, 
the Form should appear in place of the Landing Page.
*/

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className='block'>
          <Col xsOffset={1} xs={10} sm={10} md={10} lg={10}>
            <div className='flex-container'>
              <h4>Not what you expected?</h4>
              <a href='/form' className='ml-1em'>Ask an expert</a>
            </div>
          </Col>

        </div>
        <hr />
      </div>
    )
  }

};

export default LandingPage;
