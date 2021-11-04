import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';
import handler from '../../helpers/reviewhandler.js';



class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      show: !this.state.show
    })
  }

  // stars, loading more questions/reviews, adding a question/review,
  // styled-components
  // All reviews will be saved per product.  Specific styles will not be accounted for within the review module.
  // 39333 to 40343
  render () {
    if (this.state.show) {
      return (
        <Background>
          <ModalWrapper>
            <h2>Write Your Review</h2>
            <h3>About the {this.props.name}</h3>
        Submission form line 1
        <br />
        Submission form line 2
        <br />
        <Button onClick={this.toggleModal}>Close</Button>
        </ModalWrapper>
        </Background>
        );
    } else {
        return (<div>
        <button onClick={this.toggleModal}>Add a Review</button>
        </div>)
    }

  }
}

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  width: 15rem;
  color: black;
  border: 1px solid black;
`

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export default NewReview;
