import React from "react";
import { Zoom } from "@mui/material";

const Form = ({product, addProduct, formControl, form, errorMessages}) => {
  
  return (
    <div className="d-flex justify-content-center">
      <button className="btn text-dark add" onClick={() => formControl()}>
      <i className="fas fa-plus-circle fa-6x"></i>
      </button>
      <Zoom in={form} timeout={{ enter: 400, leave: 0 }}>
        <div className="form d-flex justify-content-center align-items-center">
          <div className="form-window rounded">
            <form onSubmit={product.handleSubmit}>
              <div className="p-2 w-100 mb-2 d-flex justify-content-between align-items-center">
                <h3>Add a product</h3>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => formControl()}
                >
                  <i className="fas fa-times fs-2 text-dark"></i>
                </button>
              </div>
              {/* <!-- Name input --> */}
              <div className="form-outline-dark mb-2">
                <label className="form-label text-dark" htmlFor="form4Example1">
                  Product Name <span className="pattern-info text-primary">(Product name must contain 4 - 15 characters)</span>
                </label>
                <input type="text" id="Product-name" className={errorMessages.name === "" ? "form-control" : "form-control is-invalid"} autoComplete="off" name="name" onChange={product.handleChange} value={product.values.name}/>
                <div className="invalid-feedback"><p className="error-msg">{errorMessages.name}</p></div>
                </div>
              {/* <!-- color input --> */}
              <div className="form-outline-dark mb-2">
                <label className="form-label text-dark" htmlFor="form4Example1">
                  Product color
                </label>
                <input type="color" id="form4Example1" className={errorMessages.color === "" ? "form-control" : "form-control is-invalid"} autoComplete="off" name="color" onChange={product.handleChange} value={product.values.color}/>
                <div className="invalid-feedback"><p className="error-msg">{errorMessages.color}</p></div>
              </div>
              {/* serial input */}
              <div className="form-outline-dark mb-2">
                <label className="form-label text-dark" htmlFor="form4Example1">
                  Serial No <span className="pattern-info text-primary">(Should contain only 3 upper case characters and 3 numbers)</span>
                </label>
                <input type="text" id="form4Example1" className={errorMessages.serial === "" ? "form-control" : "form-control is-invalid"} autoComplete="off" name="serial" onChange={product.handleChange} value={product.values.serial}/>
                <div className="invalid-feedback"><p className="error-msg">{errorMessages.serial}</p></div>
              </div>
              {/* <!-- qty input --> */}
              <div className="form-outline-dark mb-2">
                <label className="form-label text-dark" htmlFor="form4Example1">
                  Quantity <span className="pattern-info text-primary">(Quantity must be greater than 0)</span>
                </label>
                <input type="number" id="form4Example1" className={errorMessages.quantity === "" ? "form-control" : "form-control is-invalid"} autoComplete="off" name="quantity" onChange={product.handleChange} value={product.values.quantity}/>
                <div className="invalid-feedback"><p className="error-msg">{errorMessages.quantity}</p></div>
              </div>
              {/* <!-- weight input --> */}
              <div className="form-outline-dark mb-2">
                <label className="form-label text-dark" htmlFor="form4Example1">
                  Weight in kilograms <span className="pattern-info text-primary">(Weight must be greater than 0)</span>
                </label>
                <input type="number" step=".1" id="form4Example1" className={errorMessages.weight === "" ? "form-control" : "form-control is-invalid"} autoComplete="off" name="weight" onChange={product.handleChange} value={product.values.weight}/>
                <div className="invalid-feedback"><p className="error-msg">{errorMessages.weight}</p></div>
              </div>
              {/* <!-- price input --> */}
              <div className="form-outline-dark mb-4">
                <label className="form-label text-dark" htmlFor="form4Example1">
                  Price in rupees <span className="pattern-info text-primary">(Price must be greater than 0)</span>
                </label>
                <input type="number" id="form4Example1" className={errorMessages.price === "" ? "form-control" : "form-control is-invalid"} autoComplete="off" name="price" onChange={product.handleChange} value={product.values.price}/>
                <div className="invalid-feedback" data-mdb-toggle="tooltip"><p className="error-msg">{errorMessages.price}</p></div>
              </div>
              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Add
              </button>
            </form>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Form;
