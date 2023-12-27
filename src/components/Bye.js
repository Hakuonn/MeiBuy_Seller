import React, { useEffect } from 'react';
import { Card, Segmented, Typography, Button, Flex } from 'antd';
import { Flexbox } from 'react-layout-kit';

const { Text, Link } = Typography;

/**
 * 內含了『回到MeiBuy』、『登出』還有『登入頁面(測試版)』
 */
function Bye() {
  return (
    <Flex wrap="wrap" gap="small" style={{marginRight:'2%'}}>
        <Button type='primary' href='/store/sign-in'>
            登入(測試用)
        </Button>
        <Button type="primary" shape="round" ghost>
            回到MeiBuy
        </Button>
        <Button type="primary" shape="round" danger ghost>
            登出
        </Button>
    </Flex>
  )
}

export default Bye