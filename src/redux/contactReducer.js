import contactActions from './actions';
import {contacts,otherAttributes} from './data';


const initState = {
  contacts,
  seectedId: false,
  editView: false,
  otherAttributes
};



export default function contactReducer(state = initState, action) {
  switch (action.type) {
    case contactActions.CHANGE_CONTACT:
      return {
        ...state,
        seectedId: action.id,
        editView: false,
      };
    case contactActions.ADD_CONTACT:
      return {
        ...state,
        contacts: action.contacts,
        seectedId: action.selectedId,
        editView: true,
      };
    case contactActions.EDIT_CONTACT:
      return {
        ...state,
        contacts: action.contacts,
      };
    case contactActions.DELETE__CONTACT:
      return {
        ...state,
        contacts: action.contacts,
        seectedId: action.seectedId,
      };
    case contactActions.EDIT_VIEW:
      return {
        ...state,
        editView: action.view,
      };
    default:
      return state;
  }
}

export { contacts };