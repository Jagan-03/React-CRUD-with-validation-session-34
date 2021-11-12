import React from "react";
import { useFormik } from "formik";
import Joi from "joi";

// Components
import Header from "./components/header";
import Form from "./components/form";
import Products from "./components/products";

function App() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [openForm, setOpenForm] = React.useState(false);
  let [errorMessages, setErrorMessages] = React.useState({
    name: "",
    color: "",
    serial: "",
    quantity: "",
    weight: "",
    price: "",
  });

  const schema = Joi.object({
    name: Joi.string().min(4).max(15),
    color: Joi.string(),
    serial: Joi.string().pattern(new RegExp('^[A-Z0-9]{6}$')),
    quantity: Joi.number().greater(0),
    weight: Joi.number().greater(0),
    price: Joi.number().greater(0),
    id: Joi.number(),
  });

  const product = useFormik({
    initialValues: {
      name: "",
      color: "",
      serial: "",
      quantity: "",
      weight: "",
      price: "",
      id: -1,
    },
    onSubmit: (values) => {
      const data = schema.validate(values);
      let error = {};
      if (data.error) {
        if (data.error.message.includes("name"))
          error = { name: data.error.message };
        else if (data.error.message.includes("color"))
          error = { color: data.error.message };
        else if (data.error.message.includes("serial"))
          error = { serial: data.error.message };
        else if (data.error.message.includes("quantity"))
          error = { quantity: data.error.message };
        else if (data.error.message.includes("weight"))
          error = { weight: data.error.message };
        else if (data.error.message.includes("price"))
          error = { price: data.error.message };
        setErrorMessages({
          name: "",
          color: "",
          serial: "",
          quantity: "",
          weight: "",
          price: "",
          ...error,
        });
      } else {
        formControl();
        if (values.id >= 0) updateProduct(values);
        else addProduct(values);
        product.setValues({
          name: "",
          color: "",
          serial: "",
          quantity: "",
          weight: "",
          price: "",
          id: -1,
        });
      }
    },
  });

  const formControl = () => {
    product.setValues({
      name: "",
      color: "",
      serial: "",
      quantity: "",
      weight: "",
      price: "",
      id: -1,
    });
    setErrorMessages({
      name: "",
      color: "",
      serial: "",
      quantity: "",
      weight: "",
      price: "",
    });
    setOpenForm(!openForm);
  };

  // Create product
  const addProduct = (newProduct) => {
    setAllProducts([...allProducts, newProduct]);
  };

  // Delete product
  const deleteProduct = (id) => {
    let updatedList = allProducts.filter((products, index) => index !== id);
    setAllProducts(updatedList);
  };

  // Update product
  const editProduct = (productDetails, id) => {
    formControl();
    setErrorMessages({
      name: "",
      color: "",
      serial: "",
      quantity: "",
      weight: "",
      price: "",
    });
    product.setValues({
      name: productDetails.name,
      color: productDetails.color,
      serial: productDetails.serial,
      quantity: productDetails.quantity,
      weight: productDetails.weight,
      price: productDetails.price,
      id: id,
    });
  };

  const updateProduct = (productDetail) => {
    let updatedList = allProducts.map((product, index) => {
      if (productDetail.id === index) product = productDetail;
      return product;
    });
    setAllProducts(updatedList);
  };

  return (
    <div className="App">
      <Header />
      <Form
        product={product}
        addProduct={addProduct}
        formControl={formControl}
        form={openForm}
        errorMessages={errorMessages}
      />
      <Products
        products={allProducts}
        deleteProducts={deleteProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default App;
