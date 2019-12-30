import React, { Component } from 'react';
import LoggedContext from './LoggedContext';

//this context is to provide the information of a single shop

const ShopContext = React.createContext({
    shop: {},
    shopProducts: [],
    error: null,
    setShop: () => {},
    setShopProducts: () => {},
    addProduct: () => {},
    setError: () => {},
    clearError: () => {},
    
})

export default ShopContext;

export class ShopProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: {},
            error: null,
        }
    }

    static contextType = LoggedContext;

    // set the shop in the state
    setShop = (shop) => {
        this.setState({
            shop
        })
    }

    //set products for a shop
    setShopProducts = (shopProducts) => {
        this.setState({
            shopProducts
        })
    }

    //add new product to shop
    addProduct = (product) => {
        console.log(this.state.shopProducts)
        console.log(product)
        this.setShopProducts(
            [...this.state.shopProducts, product]
        )
    }

    setError = (error) =>{
        this.setState({
            error
        })
    }

    clearError = () =>{
        this.setState({error: null})
    }


    render() { 

        const value = {
            shop: this.state.shop,
            shopProducts: this.state.shopProducts,
            error: this.state.error,
            setShop: this.setShop,
            setShopProducts: this.setShopProducts,
            addProduct: this.addProduct,
            setError: this.setError,
            clearError: this.clearError
        }
        return (
            <ShopContext.Provider value={{...value, ...this.context}}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}
