import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div className="lane">
                <form>
                    <label>
                        Add Title
                        <input type="text" />
                    </label>

                    <br/>

                    <label>
                        Add Description
                        <input type="text" />
                    </label>

                </form>
            </div>
        )
    }
}

export default AddTask;