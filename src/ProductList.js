import { useEffect, useState } from "react"
import UserService from "./UserService"
import ProductService from "./ProductService"
import { NewProduct } from "./NewProduct"

export const ProductList = ({ user, setisLogin }) => {

    const [productList, setProductList] = useState([])
    const [isUpdate, setIsUpdate] = useState(true);

    useEffect(() => {
        getList()
    }, [isUpdate])

    const getUppdate = () => {
        setIsUpdate(!isUpdate)
    }

    const getList = async () => {
        const data = await ProductService.getAllProduct(user.token)
        setProductList(data);
    }

    const logout = async () => {
        const res = await UserService.logout(user.token)
        if (res) {
            setisLogin(false);
        } else {
            alert("logout failed")
        }
    }

    return (
        <>
            <h2>Welcome {user.username} </h2>
            <input type="button" value="Logout" onClick={logout} />
            <NewProduct token={user.token} getUppdate={getUppdate}/>
            <br/>
            <h2>ProductList</h2>
            <div>
                {productList.map((product) => (
                    <div
                        style={{
                            borderBottom: "1px solid #e1e1e1",
                            maxWidth: "25%",
                            padding: "10px 0px",
                        }}
                        key={product._id}
                    >
                        <p style={{ fontWeight: "bold" }}>Name: {product.name}</p>
                        <p>Price: {product.price} kr</p>
                        <p>Description: {product.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}