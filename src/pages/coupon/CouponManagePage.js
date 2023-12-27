import React from 'react'
import { Typography } from 'antd';
import CouponCard from '../../components/coupon/CouponCard';
const { Title, Text } = Typography;

function CouponManage() {
    const couponsData = [
        {
          name: '優惠券 A',
          code: 'ABC123',
          discountAmount: '20%',
          startDate: '2023-01-01',
          endDate: '2023-12-31',
          minPurchaseAmount: '$50',
        },
        {
            name: '優惠券 B',
            code: 'ABC123',
            discountAmount: '100元',
            startDate: '2023-01-01',
            endDate: '2023-12-31',
            minPurchaseAmount: '$99',
          },
          {
            name: '優惠券 C',
            code: 'ABC123',
            discountAmount: '1000元',
            startDate: '2023-01-01',
            endDate: '2023-12-31',
            minPurchaseAmount: '$300',
          },
      ];
  return (
    <div>
      {couponsData.map((coupon, index) => (
        <CouponCard key={index} {...coupon} />
      ))}
    </div>
  )
}

export default CouponManage