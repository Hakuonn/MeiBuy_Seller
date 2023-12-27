import React from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import '../../css/NewCouponPage.css';


const { Option } = Select;

function NewCouponPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Submitted:', values);
    // 在這裡處理表單提交後的邏輯，可以將收集到的資訊送往後端或進行其他操作
    form.resetFields(); // 清空表單欄位
  };

  return (
    <div className="centered-form">
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      <Form.Item label="名稱" name="name" rules={[{ required: true, message: '請輸入名稱' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="序號" name="code" rules={[{ required: true, message: '請輸入序號' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="折價類型" name="discountType" rules={[{ required: true, message: '請選擇折價類型' }]}>
        <Select defaultValue="percentage">
          <Option value="amount">金額</Option>
          <Option value="percentage" >百分比</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.discountType !== currentValues.discountType
        }
      >
        {({ getFieldValue }) => {
          return getFieldValue('discountType') === 'amount' ? (
            <Form.Item
              label="金額"
              name="amount"
              rules={[{ required: true, message: '請輸入金額' }]}
            >
              <Input type="number" />
            </Form.Item>
          ) : (
            <Form.Item
              label="百分比"
              name="percentage"
              rules={[{ required: true, message: '請輸入百分比' }]}
            >
              <Input type="number" />
            </Form.Item>
          );
        }}
      </Form.Item>
      <Form.Item
        label="最低消費限制"
        name="minPurchase"
        rules={[{ required: true, message: '請輸入最低消費限制' }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item label="起始日" name="startDate" rules={[{ required: true, message: '請選擇起始日' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="終止日" name="endDate" rules={[{ required: true, message: '請選擇終止日' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          新增優惠券
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}

export default NewCouponPage;
