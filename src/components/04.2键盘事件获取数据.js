import React from 'react'

/* 键盘事件获取数据 */
class MyKey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  inputKeyDown = (e) => {
    console.log(e.keyCode)

    if(e.keyCode === 13 ){
      // console.log(e.target.value)
      this.setState({
        inputValue: e.target.value
      })
      console.log(this.state.inputValue)
    }
  }

  inputKeyUp = (e) => {
    if(e.keyCode === 13){
      console.log(e.target.value)
      this.setState({
        inputValue: e.target.value
      })
      console.log(this.state.inputValue) // 第一个这个值 是空值
    }
  }

  render() {
    return (
      <div>
        <input onKeyDown={this.inputKeyDown}/> 按下事件
        <br />
        <br />
        <input onKeyUp={this.inputKeyUp} />  抬起事件
        <p>其它键盘事件 js 差不多</p>

      </div>
    )
  }
}

export default MyKey