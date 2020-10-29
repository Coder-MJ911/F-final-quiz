import React from 'react';
import Group from '../Group/Group';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [
        {
          id: 111,
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
        {
          id: 222,
          name: '组',
          trainers: [
            { id: 3, name: 'trainer3' },
            { id: 4, name: 'trainer4' },
          ],
          trainee: [
            { id: 3, name: 'trainee3' },
            { id: 4, name: 'trainee4' },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        $
        {this.state.groupList.map((group) => (
          <Group group={group} />
        ))}
      </div>
    );
  }
}

export default GroupList;
