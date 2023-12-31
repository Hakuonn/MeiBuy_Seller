import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Typography, Image } from 'antd';
import Title from 'antd/es/typography/Title';
import CategoryIcon from '@mui/icons-material/Category';
import DiscountIcon from '@mui/icons-material/Discount';
import ListIcon from '@mui/icons-material/List';
import StoreIcon from '@mui/icons-material/Store';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import SchoolIcon from '@mui/icons-material/School';
import WalletIcon from '@mui/icons-material/Wallet';

import IndexPage from './IndexPage';
import SettingPage from './SettingPage';
import HelpPage from './HelpPage';
import IntroPage from './IntroPage';
import Bye from '../components/Bye';
import CouponManagePage from './coupon/CouponManagePage';
import NewCouponPage from './coupon/NewCouponPage';
import CustomerSatisfactionPage from './customerSatisfaction/CustomerSatisfactionPage'
import PendingPage from './order/PendingPage';
import GoodsOverviewPage from './goods/GoodsOverViewPage';
import logo from '../imgs/logo.png'
import AddGoodsPage from './goods/AddGoodsPage';

const { Text, Link } = Typography;

const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}

const items = [
  getItem('首頁', '1', <HomeOutlined />),
  getItem('產品管理', 'sub1', <CategoryIcon/>, [
    getItem('產品總覽', '2'),
    getItem('新增產品', '3'),
    getItem('違規產品(這有需要嗎？)', '4'),
  ]),
  getItem('訂單管理', 'sub2', <ListIcon/>, [
    getItem('待處理訂單', '5'),
    getItem('運送中訂單(廢棄)', '6'),
    getItem('待取貨訂單', '7'),
    getItem('訂單取消', '8'),
    getItem('退貨訂單(這不需要了吧？)', '9'),
  ]),
  getItem('優惠卷', 'sub3', <DiscountIcon/>, [
    getItem('優惠卷管理','10'),
    getItem('優惠券新增','11')
  ]),
  getItem('商店佈置', '12', <StoreIcon/>),
  getItem('商家評價', '13', <ReviewsOutlinedIcon/>),
  getItem('商家知識專區撰寫', '14', <SchoolIcon/>),
  getItem('錢包', '15', <WalletIcon/>),
  getItem('設定', '99', <SettingOutlined/>),
  getItem('幫助', '100', <QuestionCircleOutlined />),
];

/**
 * 此網站的所有佈局都從這裡開始，包括左邊的Sider，上方的Header，以及跳轉後所呈現的content都在這管理
 * @returns 
 */
const Home = () => {
  const [collapsed, setCollapsed] = useState(false); //side-nav收合
  const [selectedNav, setSelectedNav] = useState('1'); //頁籤
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}
        style={{
            overflow: 'auto',
            background: colorBgContainer,
            height: '100vh',
            left: 0,
            top: 0,
            bottom: 0,
        }}
      >
        {collapsed === false ?
          <div style={{padding: 10}}>
            {/* webSite logo */}
            <Image width={150} preview={false} src={logo} />
          </div>
        :
          <div style={{padding: 10}}>
            {/* webSite logo */}
            <Image width={60} preview={false} src={logo} />
          </div>
        }
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          onSelect={({ key }) => setSelectedNav(key)}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <Text style={{ marginLeft: 5, fontSize:23, fontWeight:'bold' }}>MeiBuy測試店家</Text>
            </div>
            <Bye/>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {selectedNav === '1' && <IndexPage/>}
          {selectedNav === '2' && <GoodsOverviewPage/>}
          {selectedNav === '3' && <AddGoodsPage/> }
          {selectedNav === '5' && <PendingPage/>}
          {selectedNav === '10' && <CouponManagePage/>}
          {selectedNav === '11' && <NewCouponPage/>}
          {selectedNav === '12' && <IntroPage/>}
          {selectedNav === '13' && <CustomerSatisfactionPage/>}
          {selectedNav === '99' && <SettingPage/>}
          {selectedNav === '100' && <HelpPage/>}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;