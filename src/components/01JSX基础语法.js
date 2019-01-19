/* eslint-disable jsx-a11y/alt-text */ // 这个是图片提示 eslint 注释代码

import React, { Component } from 'react'
import '../assets/css/Home.css'
import tu01 from '../assets/images/01.jpeg'

// class Home extends React.Componet{ // 第一种写法，用这一种就可以不引入 { Component }
class Home extends Component{  // 第二中写法
  
  // constructor() { // 不就进传值的写法
  // super()
  constructor(props) {
    super(props)  /* props用于父子组件传值 固定写法, 不进行传值 2个props 都可以不写*/


    // 定义数据 
    this.state = {
      name: '张东良',
      age: '18',
      type: '魔法',
      proptype: {
        aggressive: '10',
        defensive: '5'
      },
      color: 'green',
      // 样式的写法  ' - ' 分割符用大写代替
      style: {
        'color': 'blue',
        'fontSize': '40px'
      }
    }
  }

  // jsx 语法
  // 下面展示跟 正常的html 不一样的地方  单/双引号 没什么区别，
  // {} 花括号里可以直接写 js代码
  // 除了以下其他没什么区别。
  render() {
    return (
      <div>
        {/* 定义 class 类名 */}
        <h2 className='name'>姓名: {this.state.name}</h2>
        {/* 动态添加 clas 类名 */}
        <h3 className={this.state.color}>年龄: {this.state.age}</h3>
        <h3>类型: {this.state.type}</h3>
        <h3>攻击: {this.state.proptype.aggressive}</h3>
        <h3>防御: {this.state.proptype.defensive}</h3>

        <hr />

        {/* 插入属性 引入 远程图片 / 本地图片(2种方式) */}
        <p>引入图片方式一</p>
        <img src={tu01} className="tu01"/>
         <p>引入图片方式二</p>
        <img src={require("../assets/images/02.jpeg")} className="tu02"/>
        <p>引入图片方式三</p>
        <img title={this.state.name} src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3238533871,1471436148&fm=26&gp=0.jpg" />
        
        <p />

        <hr />

        {/* input属性 绑定 */}
        <p>input属性 绑定 </p>
        <label htmlFor="name">姓名：</label>  
        <input id="name" defaultValue="input属性绑定"/>  {/* defaultValue 获取的是 原生的Dom 中的 value */}
        
        <hr />
        <p>引入行内样式</p>
        {/* 引入行内样式    */}
        <div style={{'color': 'red'}}>我是一个带颜色的div --- 引入行内样方式一  </div>
        {/* 动态 样式的引入 */}
        <div style={this.state.style}>我是一个带颜色的div --- 引入行内样式方二  </div>

      </div>
    )
  }
}

// 导出/暴露 接口
export default Home