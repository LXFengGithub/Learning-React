import React, { Component } from 'react';
// 引入 组件 .js文件 必须大写开头
import Home from './components/01JSX基础语法.js';
import For from './components/02遍历';
import Mthis from './components/03事件获取thi指向3种方式';
import MyEvent from './components/04react事件方法';
import MyRef from './components/04.1ref获取数据绑定'
import MyKey from './components/04.2键盘事件获取数据'
import MModule from './components/04.3实现双向数据绑定'
import SetForm from './components/05.react获取表单的值'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>你好！------ 我是根组件</h1>
       {/* 插入组件 */}
        <Home />
        <br />
        <hr />
        <br />

        {/* 遍历元素 */}
        <For />

        <br />
        <hr />
        <br />

        {/* 点击事件 获取数据 改变this指向 方法传值 */}
        <Mthis />

        <br />
        <hr />
        <br />

        {/* react的事件方法 */}

        <MyEvent />
        <br />
        <MyRef />
        <br />
        <MyKey />
        <br />
        <MModule />


        <br />
        <hr />
        <br />

        {/* 获取表单数据 */}
        <SetForm />


        <br />
        <hr />
        <br />

        
      </div>
    );
  }
} 

export default App;
