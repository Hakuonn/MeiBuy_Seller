import React, { useState } from 'react';
import { Row, Col, Tabs, Modal } from 'antd';
import ProductCard from '../../components/goods/ProductCard';

const { TabPane } = Tabs;

const GoodsOverViewPage = () => {
  // testData
  const products = [
    { id: 1, name: '商品A', price: 100, img: 'https://i.imgur.com/86w22qn.png',status: '上架中' },
    { id: 2, name: '商品B', price: 150, img: 'https://i.imgur.com/86w22qn.png',status: '上架中' },
    { id: 3, name: '商品C', price: 200, img: 'https://i.imgur.com/86w22qn.png',status: '上架中' },
    { id: 4, name: '商品D', price: 250, img: 'https://i.imgur.com/86w22qn.png',status: '上架中' },
    { id: 5, name: '商品E', price: 300, img: 'https://i.imgur.com/86w22qn.png',status: '上架中' },
    { id: 6, name: '商品F', price: 350, img: 'https://i.imgur.com/86w22qn.png',status: '下架中' },
    { id: 7, name: '商品G', price: 400, img: 'https://i.imgur.com/86w22qn.png',status: '下架中' },
    { id: 8, name: '商品H', price: 450, img: 'https://i.imgur.com/86w22qn.png',status: '下架中' },
    // 其他商品...
  ];

  const [deleteProductId, setDeleteProductId] = useState(null); // 用來記錄要刪除的商品ID
  const [isModalVisible, setIsModalVisible] = useState(false); // 控制 Modal 的顯示


  const handleEdit = (productId) => {
    // 編輯
    console.log(`編輯 ${productId}`);
  };

  const handleToggleStatus = (productId, currentStatus) => {
    // 上架/下架
    console.log(`Toggle status of product ${productId} from ${currentStatus === '上架中' ? '上架中' : '下架中'} to ${currentStatus === '上架中' ? '下架中' : '上架中'}`);
  };

  const handleDelete = (productId) => {
    setDeleteProductId(productId);
    setIsModalVisible(true);
  };

  const handleConfirmDelete = () => {
    // 處理確認刪除的邏輯(放 delete api)
    console.log(`Delete product ${deleteProductId}`);
    setIsModalVisible(false);
  };

  const handleCancelDelete = () => {
    // 取消刪除，隱藏 Modal
    setIsModalVisible(false); 
  };

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="上架中" key="1">
          <Row gutter={[16, 16]}>
            {products
              .filter(product => product.status === '上架中')
              .map(product => (
                <Col key={product.id} xs={24} sm={24} md={6}>
                  <ProductCard
                    product={product}
                    handleEdit={handleEdit}
                    handleToggleStatus={handleToggleStatus}
                    handleDelete={handleDelete}
                  />
                </Col>
              ))}
          </Row>
        </TabPane>
        <TabPane tab="下架中" key="2">
          <Row gutter={[16, 16]}>
            {products
              .filter(product => product.status === '下架中')
              .map(product => (
                <Col key={product.id} xs={24} sm={24} md={6}>
                  <ProductCard
                    product={product}
                    handleEdit={handleEdit}
                    handleToggleStatus={handleToggleStatus}
                    handleDelete={handleDelete}
                  />
                </Col>
              ))}
          </Row>
        </TabPane>
      </Tabs>
      <Modal
        title="確認刪除"
        visible={isModalVisible}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
      >
        <p>確定要刪除此商品嗎？</p>
      </Modal>
    </div>
  );
};

export default GoodsOverViewPage;
