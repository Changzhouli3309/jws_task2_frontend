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
        console.log(data)
    }

    const logout = async () => {
        const res = await UserService.logout(user.token)
        if (res) {
            setisLogin(false);
            console.log("log out: " + user.token)
        } else {
            alert("logout failed")
        }
    }

    return (
        <>
            <h2>welcome {user.username} </h2>
            <input type="button" value="Logout" onClick={logout} />
            <NewProduct token={user.token} getUppdate={getUppdate}/>
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
                        <p style={{ fontWeight: "bold" }}>{product.name}</p>
                        <p>{product.price} kr</p>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}