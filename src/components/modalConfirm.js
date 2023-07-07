
import {Modal, Button} from 'react-bootstrap';
import { deleteUser } from '../services/UserService';
import { toast } from 'react-toastify';
const ModalConfirm = (props) => {
const {show,handleClose,dataUserDelete,handleDeleteUserForm} = props

const confirmDelete = async ()=>{
 let res= await deleteUser(dataUserDelete.id);

 if(res && +res.statusCode ===204   ){
toast.success('Delete Success')
handleClose();
handleDeleteUserForm(dataUserDelete)
 }
else{
    toast.error(' error delete User')
}
}

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal
       backdrop="static"
        keyboard={false}
       show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='body-add-new'>    
            Are You Sure Delete  <br/>
            <b>
             {dataUserDelete.email}

            </b>
            ?
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>confirmDelete()} variant="primary">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalConfirm


