import React from 'react';
import { Form, Input, Button, Layout, Card, Row, Col, Image } from 'antd';

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // 在這裡處理表單提交的邏輯
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const validatePassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('兩次輸入的密碼不一致!'));
    },
  });

  return (
    <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: 800 }}>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <h1>註冊</h1>
            <Form
              name="register"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="商家名稱"
                name="businessName"
                rules={[
                  {
                    required: true,
                    message: '請輸入商家名稱!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="電子郵件"
                name="email"
                rules={[
                  {
                    required: true,
                    message: '請輸入電子郵件!',
                    type: 'email',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="登入帳號"
                name="account"
                rules={[
                  {
                    required: true,
                    message: '請輸入登入帳號!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密碼"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '請輸入密碼!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="再次輸入密碼"
                name="confirmPassword"
                dependencies={['password']} //dependencies用於指定依賴於 password 欄位，代表密碼改變時，也會觸發驗證
                rules={[
                  {
                    required: true,
                    message: '請再次輸入密碼!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) { // 這裡必須添加 !value，這樣才不會出現兩個錯誤提醒訊息
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('兩次輸入的密碼不一致!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  註冊
                </Button>
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

export default RegisterPage;
