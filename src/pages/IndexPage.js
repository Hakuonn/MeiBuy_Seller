import { Col, Row, Divider } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import Todo from '../components/index/Todo'
import DataAnalytics from '../components/index/DataAnalytics'
import Earning from '../components/index/Earning'


/**
 * 首頁
 * @returns 
 */
function IndexPage() {
  return (
    <>
    <div className='todo_and_earning'>
        <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
                <Title level={2}>待辦事項</Title>
                <Todo/>  
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Title level={2}>與上月相比</Title>
                <Earning/>
            </Col>
        </Row>
    </div>
    <Divider/>
    <div className='chart'>
        <Row>
            <Col xs={24} sm={24} md={24}>
                <Title level={2}>商家數據</Title>
            </Col>
        </Row>
        <Row>
            <Col xs={24} sm={24} md={24}>
                <DataAnalytics/>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default IndexPage