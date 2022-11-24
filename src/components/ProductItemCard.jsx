
import {
  Card, CardMedia, CardContent, CardActions, Typography,
  Button, Box, CardHeader, Chip
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ProductItemCard = ({ product, onDelete, onEdit, key }) => {
  
  const { name, description, imageUrl, price } = product;

  return (
    <Card
      key={key}
      sx={{
        maxWidth: 345,
        position: 'relative',
      }}
    >
      <CardMedia
        component="img" 
        height="200"
        image={imageUrl}
        alt={name}
      />
      {
        <Box
          sx={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',
          }}
        >

          <Chip
            color='secondary'
            label={<Typography variant='h6' >$ {price}</Typography>}
            sx={{
              fontWeight: 'bold',
            }}
          />
        </Box>

      }
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          minHeight="3rem"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          color="error"
          size="small"
          onClick={() => onDelete(product)}
        >
          <DeleteIcon />
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<EditIcon />}
          children="Edit"
          onClick={() => onEdit(product)}
        />
      </CardActions>
    </Card>
  );
};

export default ProductItemCard;
