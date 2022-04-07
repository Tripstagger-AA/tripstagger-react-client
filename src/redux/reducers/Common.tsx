import {Common} from '../../shared/models/Common';
import {CommonActionTypes} from '../../shared/types/actions/Common.action';

const INIT_STATE: Common = {
  error: '',
  loading: false,
  isAppDrawerOpen: false,
  updatingContent: false,
  message: '',
};

const CommonReducer = (state = INIT_STATE, action: CommonActionTypes): Common => {
  switch (action.type) {
    default:
      return state;
  }
};
export default CommonReducer;
