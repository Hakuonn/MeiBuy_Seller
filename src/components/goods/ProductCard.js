import React from 'react';
import { Card, Button } from 'antd';

const ProductCard = ({ product, handleEdit, handleToggleStatus, handleDelete }) => {
  return (
    <Card style={{ width: 300, margin: '20px 0', display: 'flex', flexDirection: 'column' }}>
      <img
        alt={product.name}
        src={product.img}
        style={{ width: '100%', height: 200, objectFit: 'cover' }}
      />
      <p style={{fontWeight: 'bold', fontSize: 20}}>{product.name}</p>
      <p>價格: {product.price}</p>
      {product.status === '上架中' ?
        <p style={{color:'green'}}>狀態: {product.status}</p>
      :
        <p style={{color:'red'}}>狀態: {product.status}</p>
      }
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => handleEdit(product.id)}>編輯</Button>
        <Button onClick={() => handleToggleStatus(product.id, product.status)}>
          {product.status === '上架中' ? '下架' : '上架'}
        </Button>
        <Button onClick={() => handleDelete(product.id)}>刪除</Button>
      </div>
    </Card>
  );
};

export default ProductCard;
