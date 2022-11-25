import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"

import ProductForm from "../forms/ProductForm"


const AddProductModal = ({ isOpen, onClose, onSubmit}) => {

  return (
    <>
      <Dialog
        onClose={onClose}
        open={isOpen}> 
        <DialogTitle
          sx={{
            textAlign: "center",
          }}
        >
          Add a new product
        </DialogTitle>
        <DialogContent
          sx={{
            padding: '.5rem 0',
          }}
        >
          <ProductForm onClose={onClose} onSubmit={onSubmit} />
        </DialogContent>
        <DialogActions
          sx={{
            padding: '1rem',
          }}
        >
          <Button
            color="error"
            variant="contained"
            form="product-form"
            type="reset"
            children='Clear Form'
          />
          <Button
            color="info"
            variant="outlined"
            form="product-form"
            type="submit"
            children="Add Product"
            onClick={onClose}
          />
        </DialogActions>

      </Dialog>
    </>
  )
};

export default AddProductModal;