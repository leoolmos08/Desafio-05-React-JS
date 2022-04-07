import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";

function ItemCount({stock, initial, onAdd}) {

    const [count , setCount] = useState(0);

    const increment = ()=>{
        if(count<stock){
            setCount(count+1);
        }
    }
    const reduce = ()=>{
        if(count>initial){
            setCount(count-1);
        }
    }

    const add =()=>{
        if(count!== 0){
            onAdd = count ;
            console.log(onAdd);
        }
    }

    return(
        <>
        <Box>
            <IconButton onClick={reduce}>
                <RemoveIcon />
            </IconButton>
            <p>{count}</p>
            <IconButton onClick={increment}>
                <AddIcon />
            </IconButton>
            <Button variant="contained" onClick={add}>Añadir al carrito</Button>
        </Box>
        </>
    )
    
}

export default ItemCount;