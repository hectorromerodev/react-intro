
import {
  Card, CardMedia, CardContent, CardActions, Typography,
  Button, Box, Chip
} from '@mui/material'; 


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddToShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductItemCard = ({ product, onDelete, onEdit, variant }) => {
  
  const { name, description, imageUrl, price } = product;

  const formattedPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  const ActionsVariant = () => {
    switch (variant) {
      case 'admin':
        return (
          <>
            <Button
              color="error"
              fullWidth
              onClick={() => onDelete(product)}
              startIcon={<DeleteIcon />}
              children="Delete"  
            />
            <Button
              variant="outlined"
              fullWidth
              startIcon={<EditIcon />}
              children="Edit"
              onClick={() => onEdit(product)}
            />
          </>
        );
      case 'shop':
        return (
          <>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<AddToShoppingCartIcon />}
              children="Add to Cart"
              onClick={() => console.log('add to cart')}
            />
          </>
        );
      default:
        return null;
    }
  }


  return (
    <>
      <Card sx={{
          maxWidth: 345,
          position: 'relative',
      }}>
        <CardMedia
          component="img" 
          height="200"
          image={imageUrl}
          alt={name}
        />
        
        <Box sx={{
          position: 'absolute',
          top: '44%',
          right: '.5rem',
        }}>
          <Chip
            color="info"
            label={<Typography variant='h6' >{formattedPrice(price)}</Typography>}
            sx={{
              fontWeight: 'bold',
          }}/>
        </Box>
        
        <CardContent>
          <Typography gutterBottom variant="h5" children={name} />
          <Typography
            variant="body2"
            color="text.secondary"
            maxHeight="6rem"
            minHeight="6rem"
            overflow="scroll"
            children={description}
          />
        </CardContent>
        <CardActions sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <ActionsVariant />
        </CardActions>
      </Card>
    </>
  );
};

export default ProductItemCard;
