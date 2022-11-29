import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ProductSummaryItem from '../components/ProductSummaryItem';

import products from "../data/products";



const ShopCartPage = () => {
    // const { cart } = useContext(CartContext);
    
    

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Container sx={{
                        marginTop:"2rem",
                    }}>
                    
                        <Typography variant="h4" gutterBottom component="div">
                            Order
                        </Typography>

                        {
                            products.map((product) => (
                                <Box key="product.id">
                                    <ProductSummaryItem product={product} />
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