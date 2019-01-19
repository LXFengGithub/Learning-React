
/* 
  事件对象、 键盘事件、   表单事件 、 ref获取dom节点 、 React 实现类似vues双向数据绑定

  事件对象： 在触发DOM 上的某好事件时， 会产生一个事件对象event, 这个对象中包含着所有与事件相关的信息

*/

import React from 'react'

class myEvent extends React.Component {
  /*  子类 必须在constuctor 方法中调用supr 方法， 否则新建实例时会报错。
  这是因为子类 没有自己的 this对象，而是继承父类的 this对象 */
  constructor(props) {
    super(props)
    this.state = {
      msg: 1,
      username: ''
    }
  }

  // 通过es6 的方式来改变this的指向
  run = (event) => {
    console.log(event.target)  /* 通过 e 获取到dom 元素 */
    event.target.style.background = 'red'  /* 点击改变其 bgc颜色 */

  }

  // 获取数据
  inputChange = (e) => {
    console.log(e.target.value)
    // this.setState 可动态改变 state 里面的值  this.state 可获取里面的数据
    this.setState({ 
      username: e.target.value
    })

  }
  inputValue = (e) => {
    console.log(this.state.username)
  }

  render() {
    return (
      <div className='myEvent'>
        {this.state.msg} 

        {/* 事件对象 */}

        <h2>事件对象的演示</h2>
        <button onClick={this.run}>事件对象</button>

        <br />
        <br />

        {/* 表单事件
          1. 给表单添加监听事件  onChange
          2. 通过事件对象 e 获取里面的value 值
          3. 在state上挂载一个 储存地址
          4. 拿到这个value值 通过this.setState 进行赋值 
        */}

        <h2>表单事件</h2>
        <input onChange={this.inputChange} /> <button onClick={this.inputValue}> 获取value值 </button>

      </div>
    )
  }
}

export default myEvent