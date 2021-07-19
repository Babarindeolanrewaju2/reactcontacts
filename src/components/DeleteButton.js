import React from 'react';
// import Popconfirm from './Popconfirm';
import { Button } from 'antd';
import notification from './Notification';
import contactActions from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
import {Trash} from 'react-feather';


// eslint-disable-next-line import/no-anonymous-default-export
export default function({ contact }) {
  const { seectedId, deleteContact, changeContact } = contactActions;
  const dispatch = useDispatch();

  console.log(deleteContact)
  let name = '';
  if (contact.firstName) {
    name = `${contact.firstName} `;
  }
  if (contact.lastName) {
    name = `${name}${contact.lastName}`;
  }
  if (!name) {
    name = 'No Name';
  }
  return (
    <div>
    <Popconfirm
      title={`Sure to delete ${name}?`}
      okText="DELETE"
      cancelText="No"
      onConfirm={() => {
        notification('error', `${name} Deleted`, '');
        dispatch(deleteContact(contact.id))
      }}
    >
      <Button icon={<Trash color="black" size={15}/>} type="default" className="DeleteBtn" size="small" style={{ border: 'none' }}/>
    </Popconfirm>
    </div>
  );
}