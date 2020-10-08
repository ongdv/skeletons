import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';

// Antd 언어팩 설정
import { ConfigProvider } from 'antd';
import koKR from 'antd/es/locale/ko_KR';

//ant-design css
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ConfigProvider locale={koKR}>
        <App />
      </ConfigProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
