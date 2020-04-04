import React, {Component} from 'react';

class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    handlClick = () => {
      const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
      this.setState({mood: newMood})
    }

    render() {
    return <div onClick={this.handlClick}>{this.state.mood}</div>
    }

}

export default SimpleComponent;
