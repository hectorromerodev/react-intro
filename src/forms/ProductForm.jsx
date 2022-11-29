import { yupResolver } from '@hookform/resolvers/yup';
import { number, string, object } from 'yup';
import { useForm, Controller} from 'react-hook-form';
import { 
  Box,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip
} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

import ShuffleIcon from '@mui/icons-material/Shuffle';

const ProductForm = ({ onSubmit, product }) => {

  const defaultValues = {
    id: uuidv4(),
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
  }

  const generateRandomImage = () => {
    // const randomImage = `https://random.imagecdn.app/v1/image?width=150&height=150&random=${uuidv4()}`;
    const randomImage = `https://picsum.photos/150/150?random=${uuidv4()}`;
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
    defaultValues: !!product ? product : defaultValues,
    resolver: yupResolver(productSchema),
    mode: 'all',
  });

  const imageUrlValue = watch('imageUrl');

  return (
    <>
      <Box
        id="product-form"
        component="form"
        onReset={() => reset(defaultValues)}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          padding: '.5rem 0'
        }}
      >
        <Grid container
          // direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={10}>
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
                  helperText="This field is auto generated with a UUID, you can't edit it."
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
                  size='small'
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
                  size='small'
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
                  multiline
                  size='small'
                  rows={2}
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
                  size='small'
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  InputProps={{
                    endAdornment:
                      <InputAdornment position="end">
                        <Tooltip title="Set a random image">
                          <IconButton
                            aria-label="Set Random Image"
                            onClick={generateRandomImage}
                            edge="end"
                          >
                            <ShuffleIcon />
                          </IconButton>
                        </Tooltip>
                        
                      </InputAdornment>
                  }}
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
                      height: '20rem',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      padding: '5px',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
          }
        </Grid>
      </Box>
    </>
  )
};


export default ProductForm;