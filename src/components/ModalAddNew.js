import React, { useState } from 'react';
import {postCreateUser} from '../services/UserService'
import {Modal, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalAddNew = (props) => {
const {show,handleClose,handleUpadteTable} = props
const [name,setName]=useState('')
const [job,setJob]=useState('')


const handleSaveUser = async ()=>{
  let res =await postCreateUser(name,job)


    if(res && res.id){
      handleClose();
      setName('');
setJob('');
toast.success('Create is Done');
handleUpadteTable({first_name:name, id:res.id})
    }
    else{
toast.error('Error...')
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
          <Modal.Title> Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='body-add-new'>
            <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input 
    type="text" className="form-control" id="exampleInputEmail1" value={name} aria-describedby="emailHelp"
onChange={(event)=>setName(event.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Job</label>
    <input
     type="text" className="form-control" value={job} id="exampleInputJob"
     onChange={(event)=>setJob(event.target.value)}
     />
  </div>
 
</form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>handleSaveUser()} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalAddNew


