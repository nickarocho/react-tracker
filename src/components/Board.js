import React, { Component } from 'react';
import tasks from './../seeds'

import Lane from './Lane';
import AddTask from './AddTask';

class Board extends Component {

    constructor() {
        super();
        this.state = tasks;
    }
    render() {
        return (
            <div className="board">
                <AddTask />
                <Lane tasks={this.state.tasks} laneProgressLevel="backlog" />
                <Lane tasks={this.state.tasks} laneProgressLevel="in-progress" />
                <Lane tasks={this.state.tasks} laneProgressLevel="complete" />
            </div>
        )
    }
}

export default Board;