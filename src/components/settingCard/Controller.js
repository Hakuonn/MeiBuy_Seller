import React, { useEffect } from 'react';
import { Card, Segmented } from 'antd';
import { useThemeMode } from 'antd-style';
import { Flexbox } from 'react-layout-kit';


const options = [
  { label: '自動', value: 'auto' },
  { label: '亮白', value: 'light' },
  { label: '暗黑', value: 'dark' },
];


/**
 * 背景模式切換
 */
export default function ThemeSwitcher() {
  const { themeMode, setThemeMode } = useThemeMode('auto');

  const handleThemeChange = (v) => {
    setThemeMode(v);
    // 儲存明暗模式
    localStorage.setItem('themeMode', v);
  };

  // 檢查localStorage中是否有儲存的主題選擇
  useEffect(()=>{
    const storedThemeMode = localStorage.getItem('themeMode');
    if (storedThemeMode){
      setThemeMode(storedThemeMode);
    }
  },[setThemeMode]);

  return (
        <Flexbox horizontal align={'center'}  gap={20}>
          深色主題
          <Segmented
            value={themeMode}
            onChange={handleThemeChange}
            options={options}
          />
        </Flexbox>
  );
}
