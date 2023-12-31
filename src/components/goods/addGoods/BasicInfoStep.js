import React, { useState } from 'react';
import { Form, Input, Upload, Button, message, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const BasicInfoStep = ({ onNextStep }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    onNextStep(values);
  };

  const onFinishFailed = (errorInfo) => {
    message.error('請填寫所有必填項目');
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>上傳</div>
    </div>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: 30 }}>
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="餐點圖片"
        name="image"
        rules={[{ required: true, message: '請上傳餐點圖片' }]}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          beforeUpload={() => false}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item
        label="餐點名稱"
        name="name"
        rules={[{ required: true, message: '請輸入餐點名稱' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="餐點類別"
        name="category"
        rules={[{ required: true, message: '請選擇餐點類別' }]}
      >
        <Select>
            <Option value="速食">速食</Option>
            <Option value="日式">日式</Option>
            <Option value="美式">美式</Option>
            <Option value="中式">中式</Option>
            <Option value="台式">台式</Option>
            <Option value="素食">素食</Option>
            <Option value="手搖飲">手搖飲</Option>
            <Option value="炸物">炸物</Option>
            {/* 這邊類別要改一下吧？ */}
        </Select>
      </Form.Item>
      <Form.Item
        label="餐點描述"
        name="description"
        rules={[{ required: true, message: '請輸入餐點描述' }]}
      >
        <Input.TextArea rows={5} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" shape="round">
          下一步
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default BasicInfoStep;
