import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import contactActions from '../redux/actions'
import Scrollbar from './customScrollBar';
import DeleteButton from './DeleteButton';
import { Avatar, Image } from 'antd';
import ContactDetails from './ContactDetails';



const ContactList = () => {
    const {contacts} = useSelector(state => state);
    const dispatch = useDispatch();
    // const [state, setState] = useState('');
    console.log(contacts)
    // const onChange =(event) => {
    //     setState({ search: event.target.value });
    //   }
    const singleContact = (contact) =>{
        const { seectedId, changeContact } = contactActions;
        const activeClass = seectedId === contact.id ? 'active' : '';
        const onChange = () => dispatch(changeContact(contact));
        return (
          <div
            key={contact.id}
            className={`${activeClass} SingleContact`}
            onClick={onChange}
          >
            {/* <div className="isoAvatar">
              {contact.avatar ? <img alt="#" src={contact.avatar} /> : ''}
            </div> */}
            {contact.avatar ?
            <Avatar
                src={<Image src={contact.avatar} />}
              />: ''}
            <div className="ContactName">
              <h3>{contact.name ? contact.name : 'No Name'}</h3>
            </div>
            <DeleteButton contact={contact} />
          </div>
        );
      }
    return (
        <div className='App'>
        {contacts && contacts.length > 0 ? (
          <div className="ContactList">
            <div
              className="contactListScrollbar"
              style={{ height: '1000px' }}
            >
              {contacts.map(contact => singleContact(contact))}
            </div>
          </div>
        ) : (
          <span className="NoResultMsg">
            {/* {<IntlMessages id="Component.contacts.noOption" />} */}
          </span>
        )}
        <ContactDetails />
        </div>
    );
};

export default ContactList;