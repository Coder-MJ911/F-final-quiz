import React from 'react';
import './TraineeList.scss';

class TraineeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [
        { id: 1, name: 'trainee1', grouped: false },
        { id: 2, name: 'trainee2', grouped: false },
      ],
    };
  }

  render() {
    return (
      <div className="trainees">
        <span className="trainees-tittle">学员列表</span>
        {this.state.trainees
          .filter((trainee) => trainee.grouped === false)
          .map((trainee) => (
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
