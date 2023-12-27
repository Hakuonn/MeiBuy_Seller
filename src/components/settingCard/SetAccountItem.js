import React, { useState } from 'react'
import { Card } from 'antd'
import EditModal from './EditModal';


function SetAccountItem({ project }) {
    const [editField, setEditField] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (field) => {
        setEditField(field);
        setIsModalVisible(true);
    };

    const handleEdit = (field, value) => {
        // 處理編輯後數據
        console.log(`Editing ${field} with value: ${value}`);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
  return (
    <>
    <Card.Grid style={gridStyle} onClick={() => showModal(project)}>
        {project}
    </Card.Grid>
    <EditModal
        field={editField}
        visible={isModalVisible}
        onOk={handleEdit}
        onCancel={handleCancel}
    />
    </>
  )
}


const gridStyle ={
    width: '100%',
}
export default SetAccountItem