import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import CommentCard from '../../components/customerSatisfaction/CommentCard';

const { TabPane } = Tabs;


// 測試資料
const commentData = [
  {
    buyerName: '買家A',
    stars: 5,
    content: '非常滿意，速度很快！',
    date: '2024-01-01',
  },
  {
    buyerName: '買家B',
    stars: 5,
    content: '非常滿意，速度很快！',
    date: '2024-01-01',
  },
  {
    buyerName: '買家C',
    stars: 5,
    content: '非常滿意，速度很快！',
    date: '2024-01-01',
  },
  {
    buyerName: '買家D',
    stars: 4,
    content: '非常滿意，速度很快！',
    date: '2023-12-31',
  },
];

/**
 * 顯示買家評論的地方，目前是直接把評論丟在tab裡面做分類，未來串接後端時，需要改用useEffect, useState來使用
 * @returns 
 */
const CustomerSatisfactionPage = () => {

  const [items, setItems] = useState([]);
  // 測試資料

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    // 根據 評論星級(stars) 分類 commentData
    const categorizedItems = Array.from({ length: 5 }, (_, i) => i + 1)
    .reverse() // 5 到 1 星
    .map(star => {
      const starStr = star.toString();
      const comments = commentData.filter(comment => comment.stars === star);
      return {
        key: starStr,
        label: `★ ${starStr}`,
        children: `給予${starStr}星評論的頁面`,
        comments: comments || [],
      };
    });
    setItems(categorizedItems);
  }, [commentData]);

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      {items.map((item) => (
        <TabPane tab={item.label} key={item.key}>
          {item.comments && item.comments.length > 0 ? (
            item.comments.map((comment, index) => (
              <CommentCard key={index} comment={comment} />
            ))
          ) : (
            <p>暫無評論</p>
          )}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default CustomerSatisfactionPage;