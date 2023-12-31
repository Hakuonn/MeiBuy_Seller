import React from 'react';
import { Result, Button } from 'antd';

const CompletionStep = ({ onSubmit, onPreviousStep }) => {
  const handlePrevious = () => {
    onPreviousStep();
  };

  const handleFinish = () => {
    onSubmit();
  };

  return (
    <Result
      status="success"
      title="商品新增完成！"
      subTitle="資料已成功提交。"
      extra={[
        <Button key="previous" shape="round" onClick={handlePrevious}>
          上一步
        </Button>,
        <Button type="primary" key="finish" shape="round" onClick={handleFinish}>
          完成
        </Button>,
      ]}
    />
  );
};

export default CompletionStep;
