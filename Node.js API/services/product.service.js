const db = require('../db')

module.exports.getAllEmployees = async()=>{
    const [records] = await db.query("SELECT * FROM products")
        .catch(err=>console.log(err))
        return records;
}

module.exports.getAllEmployeeById = async(id)=>{
    const [record] = await db.query("SELECT * FROM products WHERE id = ?",[id])
        .catch(err=>console.log(err))
        return record;
}


module.exports.DeleteEmployeeById = async(id)=>{
    const [record] = await db.query("DELETE FROM products WHERE id = ?",[id])
        .catch(err=>console.log(err))
        return record;
}

module.exports.insertProduct = async(productData) => {
    const { product_name, product_price } = productData;
    const [result] = await db.query("INSERT INTO products (product_name, product_price) VALUES (?, ?)", [product_name, product_price])
        .catch(err => console.error(err));
    return result;
}



module.exports.updateProductById = async(id, productData) => {
    const { product_name, product_price } = productData;
    const [result] = await db.query("UPDATE products SET product_name = ?, product_price = ? WHERE id = ?", [product_name, product_price, id])
        .catch(err => console.error(err));
    return result;
}



