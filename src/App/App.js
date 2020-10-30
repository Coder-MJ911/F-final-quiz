import React, { Component } from 'react';
import './App.scss';
import HomeBody from '../component/HomeBody/HomeBody';

// TODO GTB-1: * 页面样式还原度还行，但分组列表无法验证
// TODO GTB-1: * 完成需求1，2，分组相关功能未实现，添加功能也未实现，且分组接口在讲师大于1时报500错
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 有划分分组列表和学员列表等组件，其中列表元素可以抽象成公共组件
// TODO GTB-3: * 使用了语义化标签，但还可以加强使用和更正错误
// TODO GTB-3: * 使用了Flex布局，scss及其特性（嵌套，变量，mixin）
// TODO GTB-3: * 运用了ES6+语法及axios，不过还可以加强和优化
// TODO GTB-3: * 运用React相关知识点，有的地方可以改进和优化
// TODO GTB-4: * 小步提交做的不错
// TODO GTB-4: * 有抽取API层，且做了拆分
// TODO GTB-4: * 有做组件拆分，但可以进一步优化抽象和复用

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <HomeBody />
      </div>
    );
  }
}

export default App;
