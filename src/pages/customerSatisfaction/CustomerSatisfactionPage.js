import React from 'react';
import { Tabs } from 'antd';
import CommentCard from '../../components/customerSatisfaction/CommentCard';

const { TabPane } = Tabs;


const items = [
  {
    key: '1',
    label: '★ 5',
    children: '給予五星評論的頁面',
    comments: [
      {
        buyerName: '買家A',
        stars: 5,
        content: '非常滿意，速度很快！',
        date: '2023-01-01',
      },
      {
        buyerName: '買家B',
        stars: 5,
        content: '非常滿意，速度很快！',
        date: '2023-01-01',
      },
    ],
  },
  {
    key: '2',
    label: '★ 4',
    children: '給予四星評論的頁面',
  },
  {
    key: '3',
    label: '★ 3',
    children: '給予三星評論的頁面',
  },
  {
    key: '4',
    label: '★ 2',
    children: '給予二星評論的頁面',
  },
  {
    key: '5',
    label: '★ 1',
    children: '給予一星評論的頁面',
  },
];


/**
 * 顯示買家評論的地方，目前是直接把評論丟在tab裡面做分類，未來串接後端時，需要改用useEffect, useState來使用
 * @returns 
 */
const CustomerSatisfactionPage = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      {items.map((item) => (
        <TabPane tab={item.label} key={item.key}>
          {item.comments && item.comments.length > 0 ? (
            item.comments.map((comment) => (
              // <Card key={comment.id} style={{margin: 20}} hoverable>
              //   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              //     <div>
              //       <p>{comment.buyerName}</p>
              //       <p>{'★'.repeat(comment.stars)} - {comment.content}</p>
              //       <p>{comment.date}</p>
              //     </div>
              //     <div>
              //       <Button icon={<ExclamationCircleOutlined />} onClick={() => handleReport(comment)}>
              //         舉報
              //       </Button>
              //     </div>
              //   </div>
              // </Card>
              <CommentCard comment={comment} />
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