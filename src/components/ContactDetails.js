import React from 'react';
// import { ContactCardWrapper } from './ContactCard.style';
import contactActions from '../redux/actions'
import { useSelector } from 'react-redux'; 
import { Avatar, Image } from 'antd';

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  const {seectedId,otherAttributes} = useSelector(state => state);
    // const dispatch = useDispatch();
  const name = seectedId.name ? seectedId.name : 'No Name';
  const extraInfos = [];
  otherAttributes.forEach(attribute => {
    const value = seectedId[attribute.value];
    if (value) {
      extraInfos.push(
        <div className="ContactCardInfos" key={attribute.value}>
          <p className="InfoLabel">{`${attribute.title}`}</p>
          <p className="InfoDetails">{value}</p>
        </div>
      );
    }
  });
  return (
      <>
    {seectedId ? (
        <div className="ContactCard">
        <div className="ContactCardHead">
            <div className="PersonImage">
            {/* {seectedId.avatar ? <img alt="#" src={seectedId.avatar} /> : ''} */}
            {seectedId.avatar ?
                <Avatar shape="square" size={200}
                    src={<Image src={seectedId.avatar} />}
                />: ''}
            </div>
            <h1 className="PersonName">{name}</h1>
        </div>
        <div className="ContactInfoWrapper">{extraInfos}</div>
        </div> )
        : (<span>NO CONTACT SELECTED</span>)}
    </>
  );
}