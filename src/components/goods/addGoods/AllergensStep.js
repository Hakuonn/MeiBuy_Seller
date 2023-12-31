import React, { useState } from 'react';
import { Checkbox, Button, Table } from 'antd';

const allergensList = [
  '甲殼類及其製品',
  '芒果及其製品',
  '花生及其製品',
  '牛奶、羊奶及其製品',
  '蛋及其製品',
  '堅果類及其製品',
  '芝麻及其製品',
  '含麩質之穀物及其製品',
  '大豆及其製品',
  '魚類及其製品',
  '使用亞硫酸鹽類'
];

const columns = [
    {
        title: '選擇',
        dataIndex: 'checkbox',
        key: 'checkbox',
        render: (text, record) => (
            <Checkbox value={record.allergen} />
        )
    },
    {
        title: '過敏原',
        dataIndex: 'allergen',
        key: 'allergen'
    },
  
];

const AllergensStep = ({ onNextStep, onPreviousStep }) => {
  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const handleCheckboxChange = (checkedValues) => {
    setSelectedAllergens(checkedValues);
  };

  const handleNext = () => {
    onNextStep({ allergens: selectedAllergens });
  };

  const data = allergensList.map(allergen => ({
    key: allergen,
    allergen
  }));

  return (
    <div style={{ marginTop: 30 }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{ marginBottom: '24px' }}
      />
      <div style={{ marginTop: '24px' }}>
        <Button style={{ marginRight: '8px' }} shape="round" onClick={onPreviousStep}>
          上一步
        </Button>
        <Button type="primary" shape="round" onClick={handleNext}>
          下一步
        </Button>
      </div>
    </div>
  );
};

export default AllergensStep;
