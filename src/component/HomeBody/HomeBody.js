import React from 'react';
import Header from '../Header/Header';
import GroupList from '../GroupList/GroupList';
import TrainerList from '../TrainerList/TrainerList';
import TraineeList from '../TraineeList/TraineeList';
import './HomeBody.scss';

class HomeBody extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="home-body">
        <Header />
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default HomeBody;
