import React, { useState } from "react";
import { Table, Space, Modal, Row, Col, Breadcrumb, Menu } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { confirm } = Modal;

function TableProduct() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const onClickButton = (value, idProduct) => {
    if (value === "Update") {
      showModal(idProduct);
    } else if (value === "Delete") {
      showDeleteConfirm();
    }
  };

  // Show modal update
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productUpdate, setProductUpdate] = useState("");
  const showModal = (idProduct) => {
    setIsModalVisible(true);
    setProductUpdate(getAllProduct[idProduct - 1]);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Confirm delete
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this user?",
      icon: <ExclamationCircleOutlined />,
      content: "Deleting this account is irreversible!",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("Ok");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const data = [];
  getAllProduct.forEach((product) => {
    data.push(product);
  });
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      className: "textTableAdmin",
      key: "IdUser",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "name",
      className: "textTableAdmin",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Category",
      dataIndex: "category",
      className: "textTableAdmin",
      key: "Category",
    },
    {
      title: "Description",
      dataIndex: "description",
      className: "textTableAdmin",
      key: "Description",
    },
    {
      title: "Price",
      dataIndex: `price`,
      className: "textTableAdmin",
      key: "Price",
    },
    {
      title: "Rate",
      dataIndex: `rating`,
      className: "textTableAdmin",
      key: "Rate",
      render: (rating) => (
        <>
          <p className='textRating textRatingRate' style={{ color: "red" }}>
            {rating.rate}
          </p>
          <p className='textRating' style={{ color: "green" }}>
            {rating.count}
          </p>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      className: "textTableAdmin",
      render: (text, record) => (
        <Space size='middle'>
          <button
            className='buttonTableAdmin buttonTableAdminUpdate'
            name='Update'
            onClick={(e) => onClickButton(e.target.name, record.id)}
          >
            Update
          </button>
          <button
            className='buttonTableAdmin buttonTableAdminDelete'
            name='Delete'
            onClick={(e) => onClickButton(e.target.name, record.id)}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to='/adminTableUser'>User</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/adminTableProduct'>Product</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row style={{ marginBottom: "2rem", paddingTop: "2rem" }}>
        <Col span='2'></Col>
        <Col span='20'>
          <Breadcrumb>
            <Breadcrumb.Item className='text_header_admin'>
              <Link to='/admin' style={{fontSize:"1rem" , fontWeight:"700" , fontFamily:"inherit", color:"black"}}>Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              overlay={menu}
              className='text_header_admin text_header_admin_table'
            >
              Table
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span='2'></Col>
      </Row>

      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <div className='tableAdmin' style={{ marginBottom: "3rem" }}>
            <h3 className='nameTableAdmin'>Table Products</h3>
            <Modal
              title='Basic Modal'
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <form>
                <label for='username' className='textInputPayment'>
                  Name
                </label>
                <br />
                <input
                  type='text'
                  value='test'
                  className='input_payment'
                  name='username'
                  value={productUpdate.title || ""}
                />
                <label for='email' className='textInputPayment'>
                  Category
                </label>
                <br />
                <input
                  type='text'
                  className='input_payment'
                  name='email'
                  value='test'
                  value={productUpdate.category || ""}
                />
                <label for='password' className='textInputPayment'>
                  Description
                </label>
                <br />
                <input
                  type='text'
                  className='input_payment'
                  name='password'
                  value='test'
                  value={productUpdate.description || ""}
                />
                <label for='password' className='textInputPayment'>
                  Price
                </label>
                <br />
                <input
                  type='text'
                  className='input_payment'
                  name='password'
                  value='test'
                  value={productUpdate.price || ""}
                />
              </form>
            </Modal>
            <Table columns={columns} dataSource={data} />
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  );
}

export default TableProduct;
