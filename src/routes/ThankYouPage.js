import React from 'react';
import { Col } from 'react-flexbox-grid';
import '../assets/css/Global.css';

class ThankYouPage extends React.Component {
  render() {
    return (
      <div>
        <div className='block-1p5'>
          <Col xsOffset={1} xs={10} sm={10} md={10} lg={10}>
            <div>
              <h3>Thank you.</h3>
              <div className='gray-txt'>An expert will get back to you soon.</div>
            </div>
          </Col>
        </div>
        <hr />
      </div>
    )
  }

};

export default ThankYouPage;
