import React from 'react';
import './TrainerList.scss';
import TrainerApi from '../../api/TrainerApi';

class TrainerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
    };
  }

  componentDidMount() {
    TrainerApi.getNotGroupedTrainers().then((trainers) => this.setState({ trainers }));
  }

  render() {
    return (
      <div className="trainers">
        <span className="trainers-tittle">讲师列表</span>
        {this.state.trainers.map((trainer) => (
          <ul>
            <li className="trainers-member">
              {trainer.id}.{trainer.name}
            </li>
          </ul>
        ))}
        <ul>
          <li>
            <button type="button" className="add-trainer">
              +添加讲师
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default TrainerList;
