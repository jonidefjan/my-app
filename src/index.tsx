import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import Conteudo from './components/Conteudo';

ReactDOM.render(
  <Conteudo />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
