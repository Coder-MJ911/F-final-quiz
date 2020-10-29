import React from 'react';

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {
        id: 1,
        name: '组',
        trainers: [
          { id: 1, name: 'trainer1' },
          { id: 2, name: 'trainer2' },
        ],
        trainee: [
          { id: 1, name: 'trainee1' },
          { id: 2, name: 'trainee2' },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div className="groupInfo">
          <span className="gruopname">
            {this.state.group.id} {this.state.group.name}
          </span>
          <ul>
            <li>
              {this.state.group.trainers[0].id} {this.state.group.trainers[0].name}
            </li>
            <li>
              {this.state.group.trainers[1].id} {this.state.group.trainers[1].name}
            </li>
          </ul>
        </div>
        <div className="groupMembers">
          <ul>
            {this.state.group.trainers.map((trainer) => (
              <li className="member">
                {trainer.id}.{trainer.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Group;
