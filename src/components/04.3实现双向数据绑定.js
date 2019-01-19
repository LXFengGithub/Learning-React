import React,{Component} from 'react'

// 双向数据绑定
/* 什么是 双向数据绑定 ？
    module 改变影响Views  Views改变影响 moduel
*/
class MModule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mValue: '',
      mtest1: '<input defaultValue="我是原生Dom value" />',
      mtest2: '<input value={this.state.username} onChange={this.inputChange} /> '
    }
  }

  inputChange = (e) => {
    this.setState({
      mValue: e.target.value
    })
  }

  setmValue = () => {
    this.setState({
      mValue : '我是改变后的值：哒哒哒'
    })
  }
  render() {
    return (
      <div className='MModule'>
        {/* 实现 双向数据绑定 */}
        <br />
        <h2>实现 双向数据绑定</h2>
        <input value={this.state.mValue} onChange={this.inputChange}/>
        <p>数据展示区域：{this.state.mValue}</p>
        <button onClick={this.setmValue}>改变input value 的值</button>

       <div> 
          <br />
          {this.state.mtest1}
          <p/>
          非约束性组件： value 需要使用 defaultValue 获取的是原生的DOM 的value 值 
          <p/>
          {this.state.mtest2}
          <p />
          约束性组件： value 属性一在是一个 写死的值，他是 this.state.username   是由 this.inputChange 负责管理的
                     这个时候实际上 input 的 value 根本不上用户输入的内容。而是onchange 触发之后，由于 this.setState 导致了一次重新渲染。
                     不过React 会优化这个过程。
        </div>



      </div>
    )
  }
}

export default MModule