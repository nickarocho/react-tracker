import React from 'react'

const Lane = (props) => {

    // filtering tasks for specific progress level
    let filteredTasks = props.tasks.filter((task) => task.progressLevel === props.laneProgressLevel)

    // mapping over filtered tasks to create an array of JSX DOM nodes
    let taskList = filteredTasks.map(task => {
        return (
            <h3>{task.title}</h3>
        )
    })
    
    return (
        <div>
            { taskList }
        </div>
    )
        
}

export default Lane;