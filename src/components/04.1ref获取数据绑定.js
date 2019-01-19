import React from 'react'

/* ref 获取 数据 */
class MyRef extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  inputChange = () => {
    this.setState({
      username: this.refs.username.value
    })
  }

  getValue = () => {
    console.log(this.state.username)
  }

  render() {
    return (
      <div>
        {/*  ref 获取 数据
          1、 监听表单改变事件             onChange
          2、 在改变事件里获取表单的输入的值  ref refs获取
          3、把值赋值给 username            this.setState({}) 
          4、点击按钮获取 state里的值           this.state.值
        */}
        <input ref="username" onChange={this.inputChange}/> <button onClick={this.getValue}>ref实现获取value值</button>

              
      </div>
    )
  }

}

export default MyRef