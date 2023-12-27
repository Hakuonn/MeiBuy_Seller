import React from 'react'
import { Card, Typography, Row, Col, Button } from 'antd';
const { Title, Text } = Typography;


function CouponCard({ key, name, code, discountAmount, startDate, endDate, minPurchaseAmount }) {
  return (
    <Card title={name} key={key} hoverable style={{ marginBottom: 20 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div>
            <Text strong style={{fontSize:15}}>優惠碼: {code}</Text>
          </div>
          <div>
            <Text strong style={{fontSize:15}}>折價金額: {discountAmount}</Text>
          </div>
          <div>
            <Text strong style={{fontSize:15}}>最低消費金額: {minPurchaseAmount}</Text>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div style={{ textAlign: 'right'}}>
            <Text style={{fontSize:15}}>起始日: {startDate}</Text>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Text style={{fontSize:15}}>到期日: {endDate}</Text>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Button type="primary" ghost block>
            編輯
          </Button>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Button type="primary" danger ghost block>
            刪除此優惠券
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default CouponCard