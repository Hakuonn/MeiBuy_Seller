import { Card, Col, Row } from 'antd'
import React from 'react'
import TestChart from './chart/TestChart'


function DataAnalytics() {
  return (
    <Card hoverable>
        <Row>
            <Col xs={24} sm={24} md={12} lg={12} >
                <TestChart/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} >
              <TestChart/>
            </Col>
        </Row>
        <Row>
            <Col xs={24} sm={24} md={12} lg={12} >
                <TestChart/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} >
              <TestChart/>
            </Col>
        </Row>
    </Card>
  )
}

export default DataAnalytics