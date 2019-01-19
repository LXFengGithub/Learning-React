import React,{Component} from 'react'

class SetForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '获取表单元素',
      name:'',  
      sex:'1',     
      city:'',      
      citys:[ 
          '北京','上海','深圳'            
      ],
      hobby:[   
          {  
              'title':"睡觉",
              'checked':true
          },
          {  
              'title':"吃饭",
              'checked':false
          },
          {  
              'title':"敲代码",
              'checked':false
          }
      ],
      info:''
    }
  }

  handelSubmit = (e) => {
    e.preventDefault();  // 取消表单默认提交
    console.log(this.state.name, this.state.sex, this.state.city, this.state.hobby, this.state.info)
  }

  inputName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  inputSex = (e) => {
    this.setState({
      sex: e.target.value
    })
  }

  inputCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  inputHobby = (key) => {
    var hobby = this.state.hobby   /* 获取state 的hobby 的值 */
    hobby[key].checked = !hobby[key].checked /* 重复点击 取反 */
    this.setState({  
        hobby: hobby  /* 把当前 新的hobby 值 赋值给 state.hobby */
    })
  }

  inputInfo(e) {
    this.setState({
      info: e.target.value
    })
  }


  render() {
    return (
      <div className='SetForm'>
      
        <h2>{this.state.title}</h2>
      
        <form onSubmit={this.handelSubmit}>
          
          名字：<input onChange={this.inputName}/>
          <br />

          性别：<input type="radio" value="1" checked={this.state.sex === '1'} onChange={this.inputSex}/> 男
               <input type="radio" value="2" checked={this.state.sex === '2'} onChange={this.inputSex}/> 女
          <br />

          居住城市：<select value={this.state.value} onChange={this.inputCity}>
              {
                // 这是 可以会 因为 this 的原因拿不到 值，一定要注意。this的 指向
                this.state.citys.map(function(value, key) {
                  return <option key={key}>{value}</option>
                })
              }
          </select>
          <br />
          
          爱好：{
            // 注意this  指向
            this.state.hobby.map((value, key) => {  /* 通过map 的方法循环遍历 数组 */
              return (
                <span key={key}>   {/* 多行代码 需要用 () 并且，需要一个 父盒子 包裹 */}
                  <input type="checkbox" 
                  checked={value.checked} 
                  onChange={this.inputHobby.bind(this, key)} 
                  />{value.title} 
                  {/*  bind(this, key) 把this 指向当前的 对象 {} 并把当前的 key值 传过去。
                      通过key 值，获取hobby 对应的对象。
                      在通过onChange 监听CheckBox 的变化。
                  */}
                </span>
              )
            })
          }
          <br />

          备注：<textarea onChange={this.inputInfo.bind(this)}>

          </textarea>



          <br />
          <input type="submit" defaultValue="提交"/>
          <br />
        </form> 

      </div>
    )
  }
}

export default SetForm