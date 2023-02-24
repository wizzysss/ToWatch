import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal,toggle}) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add your anime</ModalHeader>
        <ModalBody>
         <form>

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