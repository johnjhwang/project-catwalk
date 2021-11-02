import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";
import styled from 'styled-components';
import Comparison from './Comparison.jsx'

class RPEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      productStyle: {},
      productRatings: {},
      openModal: false
    };

    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    this.getProductInfo(),
    this.getProductStyle(),
    this.getProductRating()
  }

  //////////////////////////////////////////////////////////////////////////////////
  getProductInfo() {
    const id = this.props.relatedProductId;
    axios.get(`products/${id}`)
      .then((results) => {
        //console.log('Results in getProductInfo: ', results.data)
        this.setState({
          productInfo: results.data
        })
      })
      .catch((err) => {
        console.log('Error in getProductInfo')
      })
  }

  getProductStyle() {
    const id = this.props.relatedProductId;
    axios.get(`products/${id}/styles`)
      .then((results) => {
        //console.log('Results in getProductInfo: ', results.data)
        this.setState({
          productStyle: results.data
        })
      })
      .catch((err) => {
        console.log('Error in getProductInfo')
      })
  }

  getProductRating() {
    const id = this.props.relatedProductId;
    axios.get(`reviews/meta/${id}`)
      .then((results) => {
        //console.log('Results in productRatings: ', results.data.ratings)
        this.setState({
          productRatings: results.data
        })
      })
      .catch((err) => {
        console.log('Error in getProductInfo')
      })
  }

  //////////////////////////////////////////////////////////////////////////////////

  toggleModal() {
    this.setState({
      openModal: !this.state.openModal
    })
  }

  //////////////////////////////////////////////////////////////////////////////////

  render() {
    const {category, name, default_price} = this.state.productInfo
    const results = this.state.productStyle.results
    const salePrice = results ? results.sale_price : 'null'
    const ratings = this.state.productRatings.ratings
    let avgRating = 0; let length = 0
    if (ratings) {
      let sum = 0;
      for (let key in ratings) {
        sum += key*ratings[key]
        length += Number(ratings[key])
      }
      avgRating = sum / length
      }

    return (
      <div >
        {/* Category: {category}
        Name: {name}
        Price: {salePrice ? 'onsale'+salePrice : default_price}
        Image: {results ? <img src={this.state.productStyle.results[0].photos[0].url}></img> : 'null'}
        Rating: {avgRating}
        <button onClick={this.toggleModal}>Open Modal</button>
        {this.state.openModal && <Comparison />} */}
        <Card>
          <Content>
            <button onClick={this.toggleModal}>Open Modal</button>
            <p>
              {category} <br></br>
              {name} <br></br>
              {salePrice ? 'onsale'+salePrice : '$'+default_price} <br></br>
              {'Rating: '+ avgRating}
            </p>

          </Content>
        </Card>
        {this.state.openModal && <Comparison closeModal={this.toggleModal}/>}


      </div>
    );
  }


}


const Card = styled.div`
  width: 200px;
  height: 300px;
  padding: 30px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  border-radius: .25rem;
`

const Content = styled.div`
  width: 200px;
  height: 100px;
  padding: 10px;
  margin-top: 200px;
`


export default RPEntry;