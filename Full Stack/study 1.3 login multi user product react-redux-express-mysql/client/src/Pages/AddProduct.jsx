import React, { useEffect } from "react";
import FormAddProduct from "../components/FormAddProduct";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);
  useEffect(() => {
    document.title = "Add Product";
  }, []);
  return (
    <Layout>
      <FormAddProduct />
    </Layout>
  );
};

export default AddProduct;
