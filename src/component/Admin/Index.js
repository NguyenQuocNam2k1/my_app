import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import TableProduct from "./TableProduct";
import TableUser from "./TableUser";
import ChartProduct from "./ChartProduct";
import ChartUser from "./ChartUser";
import {Link} from "react-router-dom";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  LineChart,
  BarChart,
  Bar,
  Line,
} from "recharts";
import "./index.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function Index() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const getAllUser = JSON.parse(localStorage.getItem("usersAccount"));
  const getTotalBill = JSON.parse(localStorage.getItem("totalBill"));
  const TotalUser = () => {
    return (
      <div className='boxTotal boxTotalUser' style={{marginBottom: "3rem"}}>
        <h3 className='TotalText TotalUserText'>Total User</h3>
        <h1 className='TotalNumber'>{getAllUser.length}</h1>
        <ResponsiveContainer width='100%' height='40%'>
          <AreaChart
            width={200}
            height={60}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 4,
            }}
          >
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#8884d8'
              fill='#8884d8'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  const TotalProduct = () => {
    return (
      <div className='boxTotal boxTotalProduct' >
        <h3 className='TotalText'>Total Product</h3>
        <h1 className='TotalNumber'>{getAllProduct.length}</h1>
        <ResponsiveContainer width='100%' height='40%'>
          <LineChart width={300} height={100} data={data}>
            <Line
              type='monotone'
              dataKey='pv'
              stroke='#8884d8'
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const TotalBill = () => {
    return (
      <div className='boxTotal boxTotalBill'>
        <h3 className='TotalText'>Total Bill</h3>
        <h1 className='TotalNumber'>{getTotalBill}</h1>
        <ResponsiveContainer width='100%' height='40%'>
          <BarChart
            // width={10}
            // height={10}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 4,
            }}
          >
            <Bar dataKey='uv' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  return (
    <div style={{backgroundColor:"rgb(244,246,249)"}}>
      <Row>
      <Col span='2'></Col>
      <Col span='20'>
        
      </Col>
      <Col span='2'></Col>
      </Row>
      <Row>
        <Col span='2'></Col>
        <Col span='6'>{TotalUser()}</Col>
        <Col span='1'></Col>
        <Col span='6'>{TotalProduct()}</Col>
        <Col span='1'></Col>
        <Col span='6'>{TotalBill()}</Col>
        <Col span='2'></Col>
      </Row>
      <Row>
        <Col span='2'></Col>
        <Col span='9'>
          <ChartProduct style={{ left: "0" }} />
        </Col>
        <Col span='2'></Col>
        <Col span='9'>
          <ChartUser />
        </Col>
        <Col span='2'></Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
        <TableUser />
        </Col>
        <Col span={2}></Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
        <TableProduct />
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
}

export default Index;
