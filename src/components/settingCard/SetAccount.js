import { Card } from 'antd'
import React, { useState } from 'react'
import EditModal from './EditModal';
import SetAccountItem from './SetAccountItem';


export default function SetAccount() {

  return (
    <Card title={'帳戶'} style={{marginBottom:'2%'}}>
        <SetAccountItem  project={'密碼重設'}/>
        <SetAccountItem  project={'手機認證'}/>
        <SetAccountItem  project={'e-mail變更'}/>
        <SetAccountItem  project={'統一編號'}/>
    </Card>
  )
}

