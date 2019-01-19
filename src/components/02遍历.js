import React from 'react'

class For extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['遍历方式一', '遍历方式一', '遍历方式一'],
      list2: [<h2 key='1'>遍历方式二</h2>, <h2 key='2'>遍历方式二</h2>],
      list3: [
        {title: '看戏 遍历方式三'},
        {title: '看漫画'},
        {title: '看动漫'},
      ]
    }
  }

  render() {

    // 循环遍历 数组，生成标签 ，需要指定 key 值
    // 方式一 （模板外引入）    map 表示 循环遍历这个数字。
    let listResult = this.state.list.map(function(value, key) {
      return <li key={key}>{value}</li>
    })

   
    return (
      <div className='For'>
        <p>遍历元素</p>
        {/* 方式一 在render 里定义的可以直接引入 */}
        {listResult}

        {/* 方式二 */}
        {/* 直接在 数组里面写 标签元素，但是要绑定一个key, 不然会被警告 */}
        {this.state.list2}

        {/* 方式三 */}
        {/* 在 render return 里直接写 代码， 这个是jsx 特性 */}
        <ul>
          {
            this.state.list3.map(function(value, key) {
              // return <li key={key}>{value.title}</li>   /* 单行代码 引入方式 */
              return (                                     /* 多行代码 引入方式 () */
                <li key={key}>
                  {value.title}
                </li>
              )  
            })
          }
        </ul>
      </div>
    )
  }
}
export default For