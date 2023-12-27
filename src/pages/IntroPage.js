import React from 'react'
import { Typography, Divider, Row, Col } from 'antd';
import Title from 'antd/es/typography/Title'
import Basic from '../components/intro/Basic';

const { Text, Link } = Typography;

/**
 * 商家佈置
 */
function IntroPage() {
  return (
    <>
    <Row>
        <Col>
            <Title level={2}>商家佈置</Title>
            <Text type="secondary">讓消費者更了解您</Text>
        </Col>
    </Row>
    <Divider/>
    <Basic/> {/*賣家基本資料*/}
    </>
  )
}

export default IntroPage