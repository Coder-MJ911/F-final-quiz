import React from 'react';
import './Group.scss';

class Group extends React.Component {
  constructor(props) {
    super(props);
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
