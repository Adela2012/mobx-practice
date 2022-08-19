import { observer } from 'mobx-react';
import React, { Component } from 'react';

@observer
class TimerView extends Component {
    state = {  } 
    onAdd = () => {
        this.props.appStore.addTimer()
    }
    render() { 
        return (
            <div>
                {this.props.appStore.timer}
                <button onClick={this.onAdd}>click</button>
            </div>
        );
    }
}
 
export default TimerView;