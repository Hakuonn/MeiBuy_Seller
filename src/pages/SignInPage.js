import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Form, Input, Layout, Row, Image } from 'antd';


function SignInPage() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        window.location.href = '/';
      };
      return (
        <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: 800 }}>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <h1>登入</h1>
                        <Form
                        name="normal_login"
                        style={{maxWidth: 600}}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        >
                        <Form.Item
                            name="account"
                            rules={[
                            {
                                required: true,
                                message: '請輸入帳號!',
                            },
                            ]}
                        >
                            <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="Account" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: '請輸入密碼!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>記住我</Checkbox>
                            </Form.Item>
                    
                            <a style={{float:'right'}} href="">
                                忘記密碼
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                                登入
                            </Button>
                            <br />
                            <a href="">立即註冊!</a>
                        </Form.Item>
                        </Form>                    
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <Image width={300} preview={false} src='https://i.imgur.com/pIgM94W.png' />
                        </div>
                    </Col>
                </Row>
            </Card>
        </Layout>
      );
    };

export default SignInPage