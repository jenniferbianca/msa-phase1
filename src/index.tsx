import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { render } from 'react-dom'; // new
import App from './App';
import './App.css';
// import AvatarComponent from './components/AvatarComponent'; // and new
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
