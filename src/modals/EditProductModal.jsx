import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"

import ProductForm from "../forms/ProductForm"


const AddProductModal = ({ isOpen, onClose, onSubmit, productToEdit}) => {

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
          Edit product
        </DialogTitle>
        <DialogContent
          sx={{
            padding: '.5rem 0',
          }}
        >
          <ProductForm onClose={onClose} onSubmit={onSubmit} product={productToEdit} />
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
            children='Cancel'
            onClick={onClose}
          />
          <Button
            color="info"
            variant="outlined"
            form="product-form"
            type="submit"
            children="Update Product"
            onClick={onClose}
          />
        </DialogActions>

      </Dialog>
    </>
  )
};

export default AddProductModal;