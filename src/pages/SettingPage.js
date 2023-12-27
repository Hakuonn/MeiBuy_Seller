import { Col, Divider, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import SetAccount from '../components/settingCard/SetAccount'
import SetDarkStyle from '../components/settingCard/SetDarkStyle'

function SettingPage() {
  return (
    <>
      <Row>
        <Col>
          <Title level={2}>設定</Title>
        </Col>
      </Row>
      <Divider/>
      <SetAccount/>
      <SetDarkStyle/>
    </>
  )
}

export default SettingPage