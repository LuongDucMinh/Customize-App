import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { fetchAlUser } from '../services/UserService'
import ReactPaginate from 'react-paginate'
import ModalAddNew from './ModalAddNew'
import ModalEditUser from './ModalEditUser'
import _ from 'lodash'
import ModalConfirm from './modalConfirm'

const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([])

  const [totalUsers, setTotalUsers] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const [isShowModalAddNew, setisShowModalAddNew] = useState(false)
  const [isShowModalEdit, setisShowModalEdit] = useState(false)
  const [dataUserEdit, setdataUserEdit] = useState({})
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataUserDelete, setdataUserDelete] = useState({})
  const handleClose = () => {
    setisShowModalAddNew(false)
    setisShowModalEdit(false)
    setIsShowModalDelete(false)
  }

  const handleUpadteTable = (user) => {
    setListUsers([user, ...listUsers])
  }

  //  handle Edit Ủe
  const handleEditUser = (user) => {
    setdataUserEdit(user)
    setisShowModalEdit(true)
  }

  const handleEditUserFromModal = (user) => {
    let cloneListUser = _.cloneDeep(listUsers)

    let index = listUsers.findIndex((item) => item.id === user.id)
    cloneListUser[index].first_name = user.first_name
    console.log('check inxdex', user)
    setListUsers(cloneListUser)
  }

  //delete User

  const handleDeleteUser = (user) => {
    setIsShowModalDelete(true);
    setdataUserDelete(user)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async (page) => {
    let res = await fetchAlUser(page)

    if (res && res.data) {
      // console.log(res)

      setTotalUsers(res.total)
      setListUsers(res.data)
      setTotalPages(res.total_pages)
    }
  }

  // console.log(listUsers)

  const handlePageClick = (event) => {
    getUsers(+event.selected + 1)
  }
  

const handleDeleteUserForm =(user)=>{
  let cloneListUser = _.cloneDeep(listUsers)

  cloneListUser= cloneListUser.filter(item => item.id!==user.id)
  
    setListUsers(cloneListUser)
}

  return (
    <>
      <div className="my-3 add-new">
        <span>
          {' '}
          <b> List Users:</b>{' '}
        </span>
        <button
          className="btn btn-success"
          onClick={() => setisShowModalAddNew(true)}
        >
          {' '}

       
          Add New User
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr> 
            <th>ID
             </th>
            <th>Email </th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users=${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleEditUser(item)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(item)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={totalPages}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
        <ModalAddNew
          show={isShowModalAddNew}
          handleClose={handleClose}
          handleUpadteTable={handleUpadteTable}
        />

        <ModalEditUser
          show={isShowModalEdit}
          dataUserEdit={dataUserEdit}
          handleClose={handleClose}
          handleEditUserFromModal={handleEditUserFromModal}
        />

        <ModalConfirm 
        
        show={isShowModalDelete} handleClose={handleClose} 
        dataUserDelete={dataUserDelete}
        handleDeleteUserForm={handleDeleteUserForm}
        />
      </Table>
    </>
  )
}

export default TableUsers
