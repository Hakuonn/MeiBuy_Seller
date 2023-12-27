import React from 'react'
import { Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useSpring, animated } from '@react-spring/web';
import { Typography } from 'antd';
const { Text, Link } = Typography;


function Earning() {
    // 假設這個值是與上個月相比的收益變化
    const monthlyChange = 1100; 
    // 確定是否為正數，以決定顏色和箭頭方向
    const isPositiveChange = monthlyChange > 0;

    // react-spring
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: monthlyChange },
        config: { duration: 1000 }, // 持續時間（1秒）
      });

  return (
    <Card hoverable>
      <Row align="middle" justify="center" gutter={16} style={{marginTop:'5%', marginBottom:'5%'}}>
        <Col>
          {isPositiveChange ? (
            <ArrowUpOutlined style={{ color: 'green', fontSize: '30px' }} />
          ) : (
            <ArrowDownOutlined style={{ color: 'red', fontSize: '30px' }} />
          )}
        </Col>
        <Col>
          <animated.div
            style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: isPositiveChange ? 'green' : 'red',
            }}
          >
            {number.to(val => val.toFixed(0))}
          </animated.div>
        </Col>
        <Col>
          <Row>
            <Text type="secondary">上月收益：$0</Text>
          </Row>
          <Row>
            <Text type="secondary">本月收益: $1100</Text>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default Earning