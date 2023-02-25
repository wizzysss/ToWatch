import React,{useState} from 'react';
import CreateTask from '../modals/CreateTask';

const ToWatch = () => {
    const [modal, setModal] = useState(false);
    const [taskList,settaskList] = useState([])

    const toggle = () => {
        setModal(modal);
    }
    const saveTask = (taskObj) => {
        let tempList =  taskList
        tempList.push(taskObj)
        settaskList(tempList)
        setModal(false)
    }

    return (
        <>
        <div className='Header text-center'>
            <h1 className='title'>/ToWatch</h1>
            <button className='btn btn-light mt-3' onClick = {() => setModal(true)}>Click Here</button>
        </div>
        <div className='task-container'>
{taskList.map((obj) => <li>{obj.Name}</li>)}
            </div>
        <CreateTask toggle = {toggle} modal ={modal} save ={saveTask}/>
        </>
    );
};

export default ToWatch;