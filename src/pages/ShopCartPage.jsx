import { useState } from "react";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProductSummaryItem from '../components/ProductSummaryItem';

import products from "../data/products";



const ShopCartPage = () => {
    // const { cart } = useContext(CartContext);
    
    const [cart, setCart] = useState(products);

    const handleQtyChange = ({id, qty}) => {
        const newCart = cart.map((product) => {
            if (product.id === id) {
                return { ...product, qty };
            }
            return product;
        });
        setCart(newCart);
    };

    // const total = cart.reduce((acc, product) => {
    //     return acc + product.price * product.qty;
    // }, 0);

    
    

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Container sx={{
                        margin:"1rem",
                        boxShadow: "0 0 5px 0 rgba(0,0,0,0.1)",
                        borderRadius: "5px",
                        padding: "1rem",
                    }}>
                    
                        <Typography variant="h4" gutterBottom component="div">
                            Order
                        </Typography>

                        {
                            cart.map((p) => (
                                <Box key={p.id}>
                                    <ProductSummaryItem product={p} changeQty={handleQtyChange} />
                                </Box>
                            ))
                        }

                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <Container sx={{
                        marginTop:"2rem",
                    }}>
                        <Typography variant="h4" gutterBottom component="div">
                            Payment Summary
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default ShopCartPage;