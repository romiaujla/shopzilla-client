import React, { Component } from 'react';
import './ExplorePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLeaf, faHamburger, faGlassWhiskey, faTshirt, faRibbon, faBookOpen, faBath, faAnchor, faMusic, faImages } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './ExplorePage.css'
import Card from '../../Components/Card/Card';

class ExplorePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleShopCardClick = (shopId) => {
    this.props.history.push(`/shop/${shopId}`);
  }

  render() {
    return (

      <div className='Explore_Page'>

        <section className='landing'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <img src={require("../../images/logo-white.png")} alt="Shopping Cart" className="hero-logo"></img>
              <h1 className='x-large-land'>Shop<mark className="hero-mark">zilla</mark></h1>

              <h2>Find your favorite pop-up shop</h2>
              <div className='search-bar'>
                <input type="text" className='search-box' placeholder='Try "henna tatoo"' />
                <button className="btn search-btn" type="submit">
                  Search
                </button>
              </div>

            </div>
          </div>
        </section>
        <section className='nav-categories'>
          <h1>Explore the marketplace</h1>
          <ul className='categories'>
            <li>
              <Link>
                <div className='icons'>
                  <FontAwesomeIcon icon={faGlassWhiskey} size='lg' />
                  <FontAwesomeIcon icon={faHamburger} size='lg' />
                </div>
                <p> Food & Drink</p>
              </Link>
            </li>
            <li>
              <Link>
                <div className='icons'>
                  <FontAwesomeIcon icon={faLeaf} size='lg' />
                </div>
                <p>Body Healing</p>
              </Link>

            </li>

            <li>
              <Link>
                <div className='icons'>
                  <FontAwesomeIcon icon={faMusic} size='lg' />
                </div>
                <p> Toys & Leisure</p>
              </Link>

            </li>
            <li>
              <Link>
                <div className='icons'>
                  <FontAwesomeIcon icon={faBath} size='lg' />
                </div>
                <p>Bath & Body</p>
              </Link>

            </li>
            <li>
              <Link>
                <div className='icons'>
                  <FontAwesomeIcon icon={faTshirt} size='lg' />
                </div>
                <p>Clothing & Accessories</p>
              </Link>

            </li>
            <li>
              <Link>
                <div className='icons'>
                  <FontAwesomeIcon icon={faRibbon} size='lg' />
                </div>
                <p>Home & Party Decor</p>
              </Link>

            </li>
            <li>
              <Link>
                <div className='icons'>
                  <FontAwesomeIcon icon={faBookOpen} size='lg' />
                </div>
                <p>Education</p>
              </Link>

            </li>
            <li>
              <Link>
                <div className='icons'>
                  <FontAwesomeIcon icon={faAnchor} size='lg' />
                </div>
                <p>Others</p>
              </Link>
            </li>
          </ul>
        </section>
        <section >
          <h1>Featured Popups</h1>
          <div className="cards">
            <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="Shopmart heaven" />
            <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="FLip Flop" />
            <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="Shopmart heaven" />
              <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="La La Land" />
              <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="Walmart" />
            <div className="empty-div"></div>
            <div className="empty-div"></div>
          </div>
        </section>

      </div>
    );
  }
}

export default ExplorePage;
