const ProductService = {
    newProduct: async (token, product) => {
        try {
            const res = await fetch("http://localhost:8080/product/create", {
                method: "put",
                body: JSON.stringify(product),
                headers: { "Content-Type": "application/json", "token": token },
            });
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
    getAllProduct: async (token) => {
        try {
            const res = await fetch("http://localhost:8080/product/all", {
                method: "get",
                headers: { "Content-Type": "application/json", "token": token },
            });
            if (res.status === 200) {
                const data = res.json();
                return data;
            } else {
                return [];
            }
        } catch (error) {
            return [];
        }
    },
}

export default ProductService;