import React, { useState } from 'react'
import { Button, Typography, Divider, Row, Col, Form, Input, InputNumber, message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const { Text, Link } = Typography;
const layout = {
    labelCol: {
      span: 8,
    },
};
const validateMessages = {
required: '${label} is required!',
types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
},
number: {
    range: '${label} must be between ${min} and ${max}',
},
};
const onFinish = (values) => {
console.log(values);
};

// img upload
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
const beforeUpload = (file) => {
const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
if (!isJpgOrPng) {
    message.error('你只能上傳 JPG/PNG 檔!');
}
const isLt2M = file.size / 1024 / 1024 < 2;
if (!isLt2M) {
    message.error('必須小於 2MB!');
}
return isJpgOrPng && isLt2M;
};

function Basic() {
    // upload img
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
          setLoading(true);
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
          });
        }
      };
    const uploadButton = (
    <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div
        style={{
            marginTop: 8,
        }}
        >
        Upload
        </div>
    </div>
    );
  return (
    <>
    <Row>
        <Col>
            <Title level={3}>基本資料</Title>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={12}>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                maxWidth: 800,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item name='website' label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name='website' label={<InstagramIcon fontSize='large' htmlColor='red'/>}>
                    <Input />
                </Form.Item>
                <Form.Item name='website' label={<FacebookRoundedIcon fontSize='large' htmlColor='#1877f2'/>}>
                    <Input />
                </Form.Item>
                <Form.Item name='intro' label="商家簡介">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                }}
                >
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Col>
        <Col xs={24} sm={24} md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div className='upload_img'>
                {/* 圖片部分還要再研究 */}
                <Upload
                    name="upload_img"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                    ) : (
                    uploadButton
                    )}
                </Upload>
            </div>
        </Col>
    </Row>
    </>
  )
}

export default Basic