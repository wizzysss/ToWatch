import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal,toggle}) => {
  const[taskName, setTaskName] = useState('');
  const [description, setDescription] =useState('');
    return (
        <div >
            <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} >/ADD YOUR ANIME</ModalHeader>
        <ModalBody>
         <form>
             <div className='form-group'>
              <label className='sauce'>Sauce</label>
              <input type="text" className='animename form-control' value ={taskName}/>
             </div>
             <div className='form-group'>
              <label className='sauce'>description</label>
              <textarea rows ="3" className='sauce form-control' value ={description}></textarea>
             </div>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default CreateTask;