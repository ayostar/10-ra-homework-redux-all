import { configureStore } from '@reduxjs/toolkit';

import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceFilterReducer from '../reducers/serviceFilter';

export default configureStore({
  reducer: {
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    serviceFilter: serviceFilterReducer,
  },
});
