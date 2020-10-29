import React from 'react';
import './TrainerList.scss';

class TrainerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [
        { id: 1, name: 'trainer1', grouped: false },
        { id: 2, name: 'trainer2', grouped: false },
      ],
    };
  }

  render() {
    return (
      <div className="trainers">
        <span className="trainers-tittle">讲师列表</span>
        {this.state.trainers
          .filter((trainer) => trainer.grouped === false)
          .map((trainer) => (
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
