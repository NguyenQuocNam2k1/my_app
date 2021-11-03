import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

function ChartProduct() {
    const getAnalyticProducts = JSON.parse(localStorage.getItem("AnalyticProduct"));
    const getAllProduct  = useSelector((state) => state.allProduct.products);
    const getIdProduct = [];
    getAllProduct.forEach((item , index)=>{
      getIdProduct.push(item.id);
    })
    const data = [];
    getIdProduct.forEach((idProduct)=>{
      let count = 0;
      getAnalyticProducts.map((product)=>{
         if(idProduct === product.id){
          count += Number(product.orderQuantity);
         }
      });
      data.push({name:`P${idProduct}`,product:count});
    });

  return (
    <div style={{backgroundColor:"white"}}>
    <p className="title_chart">Biểu đồ thống kê số lượng bán của sản phẩm</p>
    <ComposedChart
      width={500}
      height={450}
      data={data}
      margin={{
        top: 0,
        right: 0,
        bottom: 30,
        left: 0
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="product" barSize={20} fill="#413ea0" />
    </ComposedChart>
    </div>
  );
}

export default ChartProduct;
