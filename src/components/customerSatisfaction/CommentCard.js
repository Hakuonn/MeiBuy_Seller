import React from 'react'
import { Button, Card } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


function CommentCard({comment}) {
    const handleReport = (comment) => {
        // 處理舉報評論的邏輯
        console.log(`舉報評論：${comment.content}`);
        };
  return (
    <Card key={comment.id} style={{margin: 20}} hoverable>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
            <p>{comment.buyerName}</p>
            <p>{'★'.repeat(comment.stars)} - {comment.content}</p>
            <p>{comment.date}</p>
            </div>
            <div>
            <Button icon={<ExclamationCircleOutlined />} onClick={() => handleReport(comment)}>
                舉報
            </Button>
            </div>
        </div>
    </Card>
  )
}

export default CommentCard