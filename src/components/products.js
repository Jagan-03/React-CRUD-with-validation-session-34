import React from "react";

const Products = ({ products, deleteProducts, editProduct }) => {

  return (
    <div className="pt-5">
    {products.length === 0 ? <h1 className="display-2 w-100 text-center">No Products available. Add more Products.</h1> : 
           
      <table className="table table-responsive">
        <thead className="thead bg-dark text-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product name</th>
            <th scope="col" className="text-center">Serial No</th>
            <th scope="col" className="text-center">Product color</th>
            <th scope="col" className="text-center">Product quantity</th>
            <th scope="col" className="text-center">Product weight</th>
            <th scope="col" className="text-center">Product price</th>
            <th scope="col" className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
              return <tr key={index} className="bg-light">
            <th scope="row">{index + 1}</th>
            <td><strong>{product.name}</strong></td>
            <td className="text-center">{product.serial}</td>
            <td className="text-center"><span className="badge p-3 rounded-circle" style={{backgroundColor : product.color}}>   </span></td>
            <td className="text-center">{product.quantity} nos</td>
            <td className="text-center">{product.weight} kg</td>
            <td className="text-center">₹ {product.price}</td>
            <td className="text-center">
                <button className="btn ms-2" onClick={() => editProduct(product, index)}><i className="fas fa-pen text-primary"></i></button>
                <button className="btn ms-2" onClick={() => deleteProducts(index)}><i className="fas fa-trash text-danger"></i></button>
            </td>
          </tr>
          })}
        </tbody>
      </table>
    }
    </div>
  );
};

export default Products;
