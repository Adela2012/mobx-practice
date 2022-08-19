import { observer } from 'mobx-react';
import React, { Component } from 'react';

@observer
class TimerView extends Component {
    state = {  } 
    onAdd = () => {
        this.props.appStore.addTimer()
    }
    onReset = () => {
        this.props.appStore.resetTimer()
    }
    render() { 
        return (
            <div>
                {this.props.appStore.timer}
                <button onClick={this.onAdd}>onAdd</button>
                <button onClick={this.onReset}>onReset</button>
            </div>
        );
    }
}
 
export default TimerView;