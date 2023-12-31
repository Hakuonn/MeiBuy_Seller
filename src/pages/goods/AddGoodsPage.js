import React, { useState } from 'react';
import BasicInfoStep from '../../components/goods/addGoods/BasicInfoStep';
import AllergensStep from '../../components/goods/addGoods/AllergensStep';
import CompletionStep from '../../components/goods/addGoods/CompletionStep';
import { Steps, Button, message } from 'antd';
// import axios from 'axios';

const { Step } = Steps;

const AddGoodsPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  console.log(formData)

  const handleNextStep = (data) => {
    // 跳下一步
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    // 返回上一步
    setCurrentStep(currentStep - 1);
  };

  const handleCompletion = () => {
    // // 將資料透過 Axios 傳送到後端
    // axios.post('YOUR_API_ENDPOINT', formData)
    //   .then(response => {
    //     message.success('商品已成功新增');
    //     setFormData({}); // 清空表單資料
    //     setCurrentStep(0); // 回到第一步
    //   })
    //   .catch(error => {
    //     message.error('新增商品失敗');
    //     console.error(error);
    //   });
  };

  const steps = [
    {
      title: '基本資訊',
      content: <BasicInfoStep onNextStep={handleNextStep} />,
    },
    {
      title: '過敏原',
      content: <AllergensStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />,
    },
    {
      title: '完成',
      content: <CompletionStep onSubmit={handleCompletion} onPreviousStep={handlePreviousStep} />,
    },
  ];

  return (
    <div>
      <Steps current={currentStep}>
        {steps.map((item, index) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[currentStep].content}</div>
    </div>
  );
};

export default AddGoodsPage;
