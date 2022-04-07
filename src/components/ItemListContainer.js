import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import customFetch from '../utils/CustomFetch'
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos , setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <>
        <ItemList items={datos}/>
        <ItemCount stock="5" initial="0" />
        </>
    );
}
export default ItemListContainer;