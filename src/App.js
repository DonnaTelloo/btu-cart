import React, { Component } from "react";
import ProductsList from "./components/ProductsList/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts } from "./actions/products";
import Cart from "./components/Cart/index";
import TextField from '@material-ui/core/TextField';
import "./App.css";
import { Button } from "@material-ui/core";

class App extends Component {
    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired
    };

    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            userLogged: false
        }
    }

    userLogin = () => {
        if(this.state.username == "admin" && this.state.password == "admin"){
            this.setState({userLogged : !this.state.userLogged})
        }else{
            console.log("invalid");
        }
    }

    render() {
        console.log(this.props);
        const { products } = this.props;

        return (
            <div className="App">
                { this.state.userLogged ? (
                    <div id="productsList">
                    <div id="column1">
                        <h1>Products</h1>
                        <ProductsList products={products} />
                    </div>
                    <div id="column2">
                        <h1>Cart</h1>
                        <Cart />
                    </div>
                </div>
                ) : (
                    <>
                        <TextField id="filled-basic" label="მომხმარებელი" variant="filled" onBlur={(e) => this.setState({ username: e.target.value })} /><br /><br />
                        <TextField id="filled-basic" label="პაროლი" variant="filled" onBlur={(e) => this.setState({ password: e.target.value })}/><br /><br />
                        <Button variant="contained" color="primary" onClick={this.userLogin}>
                            ავტორიზაცია
                        </Button>
                        <p>user:pass = admin/admin</p>
                    </>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products
});

export default connect(
    mapStateToProps,
    { fetchProducts }
)(App);
