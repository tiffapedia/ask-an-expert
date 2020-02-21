import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../assets/css/Global.css';
import SearchIcon from '../assets/images/search-icon.svg';

/*
In the Form page, when the user clicks the Cancel button from the bottom of the page, 
they should be taken back to the Landing page.

In the Form page, the What you searched for input should be prefilled with the search query 
top account regions ranked by total amount booked and should not be permutable.

In the Form page, after the user enters the details in the text area and press the Send button, 
their input should be logged (for the sake of this exercise, you can send it to an Alert function instead). 
Then the Form is replaced with the Thank you page.
*/

class FormPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    }

    this.handleSendButton = this.handleSendButton.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleSendButton = (e) => {
    e.preventDefault();
    alert(this.state.msg);
    this.props.history.push('/thank-you');
  }

  handleFormSubmit = (e) => {
    this.setState({ msg: e.target.value });
  }


  render() {
    const expert1 = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait2.png';
    const expert2 = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait1.png';

    return (
      <form onSubmit={this.handleFormSubmit}>
        <Row className='block-1p5'>
          <Col xsOffset={1} xs={10} sm={10} md={10} lg={10}>
            <h3>Ask an expert</h3>
          </Col>
        </Row>
        <Row className='block-1'>
          <Col xsOffset={1} xs={10} sm={10} md={10} lg={10} className='flex-container flex-center'>
            <div class='image-cropper'>
              <img src={expert1} alt='avatar' class='profile-pic' />
            </div>
            <div className='no-profile-pic overlap-pic' style={{ zIndex: '2' }}>R</div>
            <div class='image-cropper overlap-pic' style={{ zIndex: '2' }}>
              <img src={expert2} alt='avatar' class='profile-pic' />
            </div>
            <div className='flex-item'>
              Lena Smith, Roy Johnson or Elijah Taylor will get right back to you.
            </div>
          </Col>

        </Row>
        <Row>
          <Col xsOffset={1} xs={10} sm={10} md={10} lg={10} className='block-1'>
            <div>What you search for</div>
            <div className='search-container flex-container flex-center'>
              <img src={SearchIcon} />
              <div className='flex-item-halfm'>top account regions ranked by total amount booked</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10} sm={10} md={10} lg={10} className='block-1'>
            <div>Can you explain in a little more detail?</div>
            {/* TODO: in future, put this in separate component */}
            <textarea
              className='form flex-container'
              placeholder='Message for expert'
              value={this.state.msg}
              rows={3}
              onChange={this.handleFormSubmit}
            />
          </Col>

        </Row>
        <Row>
          <Col xsOffset={1} xs={10} sm={10} md={10} lg={10} className='block-1 flex-container'>
            <a href='/'><div className='button gray-button'>Cancel</div></a>
            <a href='/thank-you'><div className='button blue-button flex-item' onClick={this.handleSendButton}>Send</div></a>
          </Col>

        </Row>


      </form>
    )
  }

};

export default FormPage;
