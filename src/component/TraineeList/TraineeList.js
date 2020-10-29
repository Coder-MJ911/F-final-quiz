import React from 'react';
import './TraineeList.scss';
import TraineeApi from '../../api/TraineeApi';

class TraineeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
    };
  }

  componentDidMount() {
    TraineeApi.getNotGroupedTrainees().then((trainees) => this.setState({ trainees }));
  }

  render() {
    return (
      <div className="trainees">
        <span className="trainees-tittle">学员列表</span>
        {this.state.trainees.map((trainee) => (
          <ul>
            <li className="trainee-member">
              {trainee.id}.{trainee.name}
            </li>
          </ul>
        ))}
        <ul>
          <li>
            <button type="button" className="add-trainee">
              +添加学员
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default TraineeList;
