import { useState } from "react"
import ProductService from "./ProductService";

export const NewProduct = (token, getUppdate) => {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0
    })

    const changeInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const create = async() =>{
        const res = await ProductService.newProduct(token,product);
        if(res){
            getUppdate()
        }else{
            alert("failed to create product")
        }
    }

    return (
        <>
            <h2>New Product</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" id="name" name="name" onChange={changeInput} />
                <br />
                <label htmlFor="description">Description:</label>
                <br />
                <input type="text" id="description" name="description" onChange={changeInput} />
                <br />
                <label htmlFor="price">price:</label>
                <br />
                <input type="number" id="price" name="price" onChange={changeInput} />
                <br />
                <input type="button" value="Create" onClick={create} />
            </form>
        </>
    )
} 