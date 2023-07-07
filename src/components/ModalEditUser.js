import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import {putUpdateUser} from '../services/UserService';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';

const ModalEditUser = (props) => {
  const { show, handleClose, dataUserEdit ,handleEditUserFromModal} = props
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  const handleEditUser =  async () => {
   let res= await putUpdateUser(name,job)
   if(res && res.updatedAt){
    handleEditUserFromModal({
      first_name:name,
      id:dataUserEdit.id
    })
    handleClose()
    toast.success(' Edit success ')
   }
   console.log('check res modal',res)
  };



  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name)
    }
  }, [dataUserEdit])

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
          <Modal.Title> Edit A User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={name}
                  aria-describedby="emailHelp"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Job</label>
                <input
                  type="text"
                  className="form-control"
                  value={job}
                  id="exampleInputJob"
                  onChange={(event) => setJob(event.target.value)}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => handleEditUser()} variant="primary">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalEditUser
