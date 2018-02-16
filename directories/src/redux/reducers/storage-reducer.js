import storageActions from "redux/actions/storage-actions";

const initState = {
  brokerNode: ['11 - 122.255.211.55', '24 - 122.255.211.55', '35 - 122.255.211.55', ' 42 - 122.255.211.455', '53 - 122.255.211.55'],
  webNode: ['177 - 122.255.211.55', '258 - 122.255.211.55', '357 - 122.255.211.55', '456 - 122.255.211.55', '5155 - 122.255.211.55'],
  genesisHash: ['111 - 122.255.211.55', '212 - 122.255.211.55', '313 - 122.255.211.55', '414 - 122.255.211.55', '515 - 122.255.211.55']
};

const storageReducer = (state = initState, action) => {
  switch (action.type) {

    case storageActions.STORAGE_BROKERNODE_ADD:
      return {
        ...state,
        brokerNode: [
          ...state.brokerNode, action.payload
        ]
      };

    case storageActions.STORAGE_WEBNODE_ADD:
      return {
        ...state,
        webNode: [
          ...state.webNode, action.payload
        ]
      };
    
    case storageActions.STORAGE_GENESISHASH_ADD:
      return {
        ...state,
        genesisHash: [
          ...state.genesisHash, action.payload
        ]
      };

    default:
      return state;
  }
};

export default storageReducer;
