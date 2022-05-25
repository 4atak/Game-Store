 import React, { createContext, useContext, useReducer } from 'react';

import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import {API} from '../helpers/consts'



export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'GET_PRODUCT_DETAILS':
      return { ...state, productDetails: action.payload }
    default:
      return state
  }
}

const CrudContextProvider = ({ children }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE)


  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`)
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data
    })
  }

  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: 'GET_PRODUCT_DETAILS',
      payload: data,
    });
  };





  const addProduct = async (newProduct) => {
    await axios.post(`${API}`, newProduct)
    getProducts()
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`)
    getProducts()
  }



  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProducts()
    console.log(465456);
  }

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === 'all') {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    console.log(search.toString());
    console.log(url);
    navigate(url);
  };



  return <productContext.Provider value={{
    products: state.products,
    productDetails: state.productDetails,
    addProduct,
    getProducts,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    fetchByParams,

  }}
  >{children}</productContext.Provider>
}

export default CrudContextProvider;