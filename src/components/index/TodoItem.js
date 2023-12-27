import React from 'react';
import { Card, Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';
import { Typography } from 'antd';
const { Text, Link } = Typography;


function TodoItem({key, title, value}) {
  return (
    <Col xs={24} sm={24} md={8}>
        <div key={key} style={{ textAlign: 'center' }}>
            <Title level={5}>{title}</Title>
            <Text style={{fontSize:20}}>{value}</Text>
        </div>
    </Col>
  )
}

export default TodoItem