import React from 'react'

class Mthis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我是一个方法 ---- 方式二',
      msg2: '我是一个方法 --- 方式三',
      username: '等待改变',
      username1: '等待改变'
    }
    // 在this 创建的时候，就保存到到这个函数
    this.getDate22 = this.getDate22.bind(this) 
  }
  // 可以直接在这里写事件

  getDate() {
    alert('我是一个方法 --- 方式一')
  }
  getDate2() {
    alert(this.state.msg)
  }
  getDate22 () {  /* 用的比较多的方式 */
    alert(this.state.msg)
  }
  getDate3 = () => { /* 通过箭头函数的方式调用, 只能这一种，箭头函数的方式。用的最多的方式 */
    alert(this.state.msg2)
  }
  getDate33 = () => {
    // setState 改变sate里的值
    this.setState({
      username: "我是改变后的，this"
    })
  }
  getDate333 = (str) => {
    this.setState({
      username1: str
    })
  }

  render() {
    return (
      <div className='Mthis'>
        <p>执行方法</p>
        <button onClick={this.getDate}>点击 执行方法</button> <p/>
        <p>获取数据 ----- 改变this 指向的方法</p>
        <button onClick={this.getDate2.bind(this)}>点击 获取数据 --- 方式一</button> <p/>
        <button onClick={this.getDate22}>点击 获取数据 --- 方式二</button> <p/>
        <button onClick={this.getDate3}>点击 获取数据 --- 方式三</button> <p/>

        <p>{this.state.username}</p>
        <button onClick={this.getDate33}>改变this里的值 (点击改变上方值)--- 方式一</button> <p/>
        {/* 通过bind 的方式，第一个参数 this, 后面可写一个 或 多个参数。 ---- 需与函数的行参个数对应 */}
        <p>{this.state.username1}</p>
        <button onClick={this.getDate333.bind(this, '张三')}>执行方法传值 (点击改变上方值)--- 方式二</button> <p/>
        {/* <button onClick={this.getDate333.bind(this, '张三', '李四')}>执行方法传值 (点击改变上方值)--- 方式二</button> <p/> */}
                
      </div>
    )
  }
}

export default Mthis