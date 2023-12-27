import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';

const EditModal = ({ field, visible, onOk, onCancel }) => {
    const [inputValue, setInputValue] = useState('');

    const handleOk = () => {
        onOk(field, inputValue)
    };

    const handleCancel = () => {
        onCancel()
    };

    return (
        <Modal title={`${field}`} visible={visible} onOk={handleOk} onCancel={handleCancel}>
            <Form>
                <Form.Item label="更改">
                    <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditModal;
