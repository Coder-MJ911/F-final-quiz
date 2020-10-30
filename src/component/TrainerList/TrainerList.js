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
            {/* TODO GTB-4: - 下面部分可以封装成可复用的组件，且包含删除功能 */}
            <li className="trainers-member">
              {trainer.id}.{trainer.name}
            </li>
          </ul>
        ))}
        {/* TODO GTB-4: - ul li多余了，button可以封装成可复用的组件 */}
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
