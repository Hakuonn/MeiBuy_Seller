import React, { useState } from 'react';
import { Button, Table, Space, Modal } from 'antd';


/**
 * 待處理訂單頁面
 * @returns 
 */
const PendingPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const columns = [
    {
      title: '商品名',
      dataIndex: 'name',
    },
    {
      title: '訂購規格',
      dataIndex: 'format',
    },
    {
      title: '訂購數量',
      dataIndex: 'quantity',
    },
    {
      title: '訂單總金額',
      dataIndex: 'orderTotal',
    },
    {
      title: '訂單狀態',
      dataIndex: 'state',
    },
    {
      title: '訂購人',
      dataIndex: 'buyer',
    },
    {
      title: '訂購日期',
      dataIndex: 'orderDate'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleViewDetails(record)}>查看訂單詳情</Button>
          <Button onClick={() => handleShip(record.key)}>出貨</Button>
        </Space>
      ),
    },
  ];
  const data = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      name: `商品 ${i}`,
      format: 'big',
      quantity: i,
      orderTotal: i+(i*10),
      state: '待處理',
      buyer: 'King',
      orderDate: '2023/10/10',
      address: `London, Park Lane no. ${i}`,
    });
  }
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const handleViewDetails = (record) => {
    console.log('顯示訂單詳情:', record)
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }
  
  const modalContent = (
    // 顯示訂單詳情內容
    <div>
      <p>幹幹幹</p>
    </div>
  );

  const handleShip = (key) => {
    // 出貨功能
    console.log(`出貨 —— 貨物編號id: ${key}`);
  };



  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <Modal
        title="訂單詳情"
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        {modalContent}
      </Modal>
    </div>
  );
};
export default PendingPage;