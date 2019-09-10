import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD
import "antd/dist/antd.css";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';

ReactDOM.render(
  <Home />,
=======
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import Conteudo from './components/Conteudo';

ReactDOM.render(
  <Conteudo />,
>>>>>>> origin/master
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
