import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { formatPrice } from "../../../util/formatPrice";
import { addProduct } from "../../../actions/cart";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const ProductItem = ({ product, addProduct }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <>
         <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <b>${formatPrice(product.price)}</b>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => addProduct(product)} variant="contained" fullWidth={true}>ADD TO CART</Button>
            </CardActions>
         </Card>
        </>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired
};

export default connect(
    null,
    { addProduct }
)(ProductItem);
