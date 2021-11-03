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

function ChartUser() {
    const getAnalytic= JSON.parse(localStorage.getItem("AnalyticProduct"));
    const getAllUser  = JSON.parse(localStorage.getItem("usersAccount"));
    const getIdUser = [];
    getAllUser.forEach((item)=>{
        getIdUser.push(item.id);
    })
    const data = [];
    getIdUser.forEach((idProduct)=>{
      let count = 0;
      getAnalytic.map((product)=>{
         if(idProduct === product.idUser){
          count += Number(product.orderQuantity);
         }
      });
      data.push({name:`U${idProduct}`,count});
    });

  return (
    <div style={{backgroundColor:"white" }}>
    <p className="title_chart">Biểu đồ thống kê số lượng mua của người dùng</p>
    <ComposedChart
      width={450}
      height={400}
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
      <Bar dataKey="count" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="count" stroke="rgb(255,127,14)" />
    </ComposedChart>
    </div>
  );
}

export default ChartUser;
