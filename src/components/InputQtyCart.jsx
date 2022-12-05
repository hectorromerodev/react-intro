import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const InputQtyCart = ({ product, onChange }) => {
    let { id, qty } = product;

    return (
        <>
            <Paper
                component="form"
                sx={{ 
                    p: '2px 4px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    width: 150,
                }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu"
                    onClick={onChange({ id, qty: qty-- })}
                    >
                    <RemoveIcon />
                </IconButton>
                <InputBase
                    sx={{
                        width: "100%", 
                        textAlign: "center",    
                        fontSize: "1.5rem",
                        padding: "0 20px",
                    }}
                    placeholder="Qty"
                    inputProps={{ 'aria-label': 'quantity' }}
                    value={qty || 0}
                    readOnly
                    multiline={false}

                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
                    onClick={onChange({ id, qty: qty++ })}
                    >
                    <AddIcon />
                </IconButton>
            </Paper>
            
        </>
    );
};

export default InputQtyCart;
