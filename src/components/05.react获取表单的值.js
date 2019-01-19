import React,{Component} from 'react'

class SetForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '获取表单元素'
    }
  }



  render() {
    return (
      <div className='SetForm'>
        <h2>{this.state.title}</h2>
          
      </div>
    )
  }
}

export default SetForm