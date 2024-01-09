import React from 'react';
import { Flex, Spin } from 'antd';

export default function LoadingComponent() {
  return (
    <div className="w-full h-screen flex justify-center items center">
      <Flex align="center" gap="middle">
          <Spin tip="Loading" size="large">
              <div className="content" />
          </Spin>
      </Flex>
    </div>
  )
}
