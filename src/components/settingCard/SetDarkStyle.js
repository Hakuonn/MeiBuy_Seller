import { Card } from 'antd'
import React from 'react'
import ThemeSwitcher from './Controller'

const gridStyle ={
    width: '100%',
}

/**
 * 主題(深、淺、自動)
 * @returns 
 */
function SetDarkStyle() {
  return (
    <Card title={'主題'} style={{marginBottom:'2%'}}>
        <Card.Grid style={gridStyle}>
            <ThemeSwitcher/>
        </Card.Grid>
    </Card>
  )
}

export default SetDarkStyle