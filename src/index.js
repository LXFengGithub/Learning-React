// 2个react 核心的文件
import React from 'react';
import ReactDOM from 'react-dom';
// 这个可以删掉
// import './index.css';
import App from './App';

// 加速react运行速度的一个js文件
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
