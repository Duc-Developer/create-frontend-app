import React from 'react';
import CommonStore from '@src/Stores/commonStore';

const stores = {
    commonStore: new CommonStore(),
};

const storeContext = React.createContext(stores);
export const useStores = () => React.useContext(storeContext);

export default stores;
