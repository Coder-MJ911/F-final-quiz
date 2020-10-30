import React from 'react';
import './Group.scss';

// TODO GTB-4: - 纯UI组件可以使用函数组件
class Group extends React.Component {
  constructor(props) {
    super(props);
    // TODO GTB-3: - 没有必要设置state，直接使用props就好
    this.state = {
      group: this.props.group,
    };
  }

  render() {
    return (
      <div className="groupBody">
        <div className="groupInfo">
          <span className="groupName">
            {this.state.group.id} {this.state.group.name}
          </span>
          {/* TODO GTB-4: - 这里不是nav，直接使用ul就好 */}
          <nav>
            <ul className="trainersMember">
              <li>
                {this.state.group.trainers[0].id} {this.state.group.trainers[0].name}
              </li>
              <li>
                {this.state.group.trainers[1].id} {this.state.group.trainers[1].name}
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="groupMembers">
            {this.state.group.trainees.map((trainee) => (
              // TODO GTB-3: - 循环渲染需要给子元素设置key，可参见error
              <li className="member">
                {trainee.id}.{trainee.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Group;
