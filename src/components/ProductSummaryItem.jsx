import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { FormattedPrice } from '../shared/utils';


const ProductSummaryItem = ({ product }) => {
    const { name, description, imageUrl, price } = product;    
    
    return (
        <>
            <Card sx={{
                display:"flex",
                padding: "1rem",
            }}>

                <CardMedia 
                    component="img"
                    sx={{
                        width:100,
                    }}
                    image={imageUrl}
                    alt={name}
                />

                <Box sx={{
                    display: "flex",
                    width: "100%",
                }}>
                    <CardContent sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}> 
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            height: "100%",
                        }}>

                            <Typography variant="h6" component="div" children={name} />
                            <Typography variant="subtitle1" color="text.secondary" children={description} />
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            
                        }}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                }}
                                variant="h6" color="primary" component="div" children={FormattedPrice(price)} />
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                            <Typography variant="subtitle1" component="div" children="Quantity" />
                            <Typography variant="subtitle1" component="div" children="1" />
                        </Box>
                    </CardContent>
                    
                </Box>
            </Card>
        </>
    );
};

export default ProductSummaryItem;