import React from 'react'
import { Col, Divider, Row, Typography, Card, List } from 'antd';
const { Title, Text } = Typography;


/**
 * 商家幫助
 */
function HelpPage() {
  const data = [
    {
      title: '商家常見問題',
      content: '連結至『商家常見問題』',
      link: 'https://google.com.tw'
    },
    {
      title: '上架材質之規定',
      content: '連結至『上架材質之規定』',
      link: 'https://google.com.tw'
    },
    {
      title: 'MeiBuy條款',
      content: '連結至『MeiBuy條款』',
      link: 'https://google.com.tw'
    },
    {
      title: '與我們聯絡',
      content: '連結至『賣家對客服聊天室』',
      link: 'https://google.com.tw'
    },
  ];
  return (
    <>
    <Row>
        <Col>
            <Title level={2}>幫助</Title>
            <Text type="secondary">需要協助嗎？聯絡我們</Text>
        </Col>
    </Row>
    <Divider/>
    <Row>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Card title={item.title} hoverable>{item.content}</Card>
            </a>
          </List.Item>
        )}
      />
    </Row>
    </>
  )
}

export default HelpPage