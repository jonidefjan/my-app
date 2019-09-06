import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';

ReactDOM.render(
  <Home />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
