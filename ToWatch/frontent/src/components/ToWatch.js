import React,{useState} from 'react';
import CreateTask from '../modals/CreateTask';

const ToWatch = () => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(modal);
    }
    
    return (
        <>
        <div className='Header text-center'>
            <h1 className='title'>/ToWatch</h1>
            <button className='btn btn-light mt-3' onClick = {() => setModal(true)}>Click Here</button>
        </div>
        <CreateTask toggle = {toggle} modal ={modal}/>
        </>
    );
};

export default ToWatch;