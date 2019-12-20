import React, { Component } from "react";
import "./Card.css";

export default class Cards extends Component {

  static defaultProps = {
    shop_id: 1,
    shop_name: "Flip Flop USA",
    service_type: "Clothing and accessories",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };

  handleShopCardClick = () => {
    this.props.handleShopCardClick(this.props.shop_id);
  }

  render() {
    return (
      <div className="card-container" onClick={() => { this.handleShopCardClick() }}>
      
          {/* <img src={require(`../../images/store-images/${this.props.img_url}`)} /> */}
          <img src="https://source.unsplash.com/H2N9K9y9e3E"/>
          <div className="card-text">
            <span className='store-type'>{this.props.service_type}</span>
            <h2>{this.props.shop_name}</h2>
            <p>{this.props.description}</p>
          </div>
         
      </div>
    );
  }
}