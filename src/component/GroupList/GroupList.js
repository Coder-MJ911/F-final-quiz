import React from 'react';
import Group from '../Group/Group';
import GroupApi from '../../api/GroupApi';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
    };
  }

  componentDidMount() {
    GroupApi.getGroups().then((groupList) =>
      this.setState({
        groupList,
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.groupList.map((group) => (
          <Group group={group} />
        ))}
      </div>
    );
  }
}

export default GroupList;
