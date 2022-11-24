import { yupResolver } from '@hookform/resolvers/yup';
import { number, string, object } from 'yup';
import { useForm, Controller} from 'react-hook-form';
import { 
  Box,
  Grid,
  TextField,
} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';



const ProductForm = ({ onSubmit }) => {

  const defaultValues = {
    id: uuidv4(),
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
  }

  const generateRandomImage = () => {
    const randomImage = `https://random.imagecdn.app/v1/image?width=150&height=150&random=${uuidv4()}`;
    setValue('imageUrl', randomImage);
  }

  const productSchema = object().shape({
    id: string().required(),
    name: string().required('You need to provide a name'),
    price: number().positive().typeError('You need to enter the price.'),
    description: string(),
    imageUrl: string().url('You need to provide a valid URL (http:// or https://)'),
  });

  const { control, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(productSchema),
    mode: 'all',
  });

  const imageUrlValue = watch('imageUrl');

  return (
    <Box
      id="product-form"
      component="form"
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        padding: '1.5rem'
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6}>
          <Controller
            name="id"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="ID"
                variant="outlined"
                fullWidth
                disabled
                size='small'
              />
            )}
          />
        </Grid>
        <Grid item xs={10}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={10}>
          <Controller
            control={control}
            name="price"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Price"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />  
            )}
          />
        </Grid>
        <Grid item xs={10}>
          <Controller
            control={control}
            name="description"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={10}>
          <Controller
            control={control}
            name="imageUrl"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Image URL"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        {
          !!imageUrlValue &&
            <Grid item xs={10}>
                <Box 
                  component="img"
                  src={imageUrlValue}
                  sx={{
                    width: '100%',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                />
              </Grid>
        }
      </Grid>
    </Box>
  )
};


export default ProductForm;