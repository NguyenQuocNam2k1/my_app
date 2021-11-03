import React, { useEffect, useState } from "react";
import { Table, Space, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { updateInfoUser, deleteUser } from "../../redux/actions/adminAction";

const { confirm } = Modal;

function TableUser() {
  const dispatch = useDispatch();
  let getAllUser = JSON.parse(localStorage.getItem("usersAccount"));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [infoUserEdit , setInfoUserEdit] = useState({userName:"" ,userEmail:"", password:"", id:"" });
  const [callBack , setCallBack] = useState(false)

  useEffect(() => {
    getAllUser = JSON.parse(localStorage.getItem("usersAccount"));
  }, [callBack])
  const showModal = (idUser) => {
    const {userName , userEmail , password , id} = getAllUser[idUser-1];
    setIsModalVisible(true);
    setInfoUserEdit({userName:userName , userEmail:userEmail , password: password ,id: id});
  };
  const handleOk = () => {
    setIsModalVisible(false);
    if(infoUserEdit !== "") dispatch(updateInfoUser(infoUserEdit));
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const updateInfoUserOnChange = (e) =>{
    if(infoUserEdit !== ""){
      if(e.name === "username"){
        setInfoUserEdit({...infoUserEdit , userName:e.value});
      }else if(e.name === "email"){
        setInfoUserEdit({...infoUserEdit , userEmail:e.value});
      }else if(e.name === "password"){
        setInfoUserEdit({...infoUserEdit , password:e.value});
      }
    }
  }

  // Confirm delete
  const showDeleteConfirm = (idUser) => {
    confirm({
      title: "Are you sure delete this user?",
      icon: <ExclamationCircleOutlined />,
      content: "Deleting this account is irreversible!",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteUser(idUser));
        setCallBack(!callBack);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const data = [];
  const onClickButton = (value, idUser) => {
    if(value === "Update"){
      showModal(idUser);
    } else if(value === "Delete"){
      showDeleteConfirm(idUser);
    }
  };
  
  getAllUser.forEach((user) => {
    data.push(user);
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
      dataIndex: "userName",
      key: "name",
      className: "textTableAdmin",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Password",
      dataIndex: "password",
      className: "textTableAdmin",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "userEmail",
      className: "textTableAdmin",
      key: "address",
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

  return (
    <>
      <div className='tableAdmin'>
        <h3 className='nameTableAdmin'>Table User</h3>
        <Modal
          title='Basic Modal'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <form>
              <label for="username" className="textInputPayment">Username</label><br/>
              <input type="text" value={infoUserEdit.userName } className="input_payment" name="username" onChange={(e)=>updateInfoUserOnChange(e.target)}/>
              <label for="email" className="textInputPayment">Email</label><br/>
              <input type="text" className="input_payment" name="email" value={infoUserEdit.userEmail}  onChange={(e)=>updateInfoUserOnChange(e.target)}/>
              <label for="password" className="textInputPayment">Password</label><br/>
              <input type="text" className="input_payment" name ="password" value={infoUserEdit.password}  onChange={(e)=>updateInfoUserOnChange(e.target)}/>
          </form>
        </Modal>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}

export default TableUser;
