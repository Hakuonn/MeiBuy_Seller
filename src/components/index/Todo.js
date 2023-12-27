import React from 'react';
import { Card, Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';
import { Typography } from 'antd';
import TodoItem from './TodoItem';
const { Text, Link } = Typography;

function Todo() {
    const testData = [
        {
            key: 1,
            title: '待處理訂單',
            value: 0,
        },
        {
            key: 2,
            title: '運送中訂單',
            value: 2,
        },
        {
            key: 3,
            title: '消費者待取貨訂單',
            value: 4,
        },
        {
            key: 4,
            title: '待取消訂單',
            value: 1,
        },
        {
            key: 5,
            title: '待退貨訂單',
            value: 0,
        },
        {
            key: 6,
            title: '違規待處理商品',
            value: 0,
        },
    ]

  return (
    <Card hoverable>
        <Row align='middle'>
                {testData &&
                testData.map((item)=>(
                    <TodoItem key={item.key} title={item.title} value={item.value}/>
                ))
                }
        </Row>
    </Card>
  );
}

export default Todo;
