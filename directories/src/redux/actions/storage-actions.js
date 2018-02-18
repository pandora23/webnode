const STORAGE_BROKERNODE_ADD = 'directories/storage/brokernode/add';
const STORAGE_WEBNODE_ADD = 'directories/storage/webnode/add';
const STORAGE_GENESISHASH_ADD = 'directories/storage/genesishash/add';

const ACTIONS = Object.freeze({
  // actions
  STORAGE_BROKERNODE_ADD,
  STORAGE_WEBNODE_ADD,
  STORAGE_GENESISHASH_ADD,

  // actionCreators
  storageBrokerNodeAddAction: (item) => ({
    type: ACTIONS.STORAGE_BROKERNODE_ADD,
    payload: item
  }),
  storageWebNodeAddAction: (item) => ({
    type: ACTIONS.STORAGE_WEBNODE_ADD,
    payload: item
  }),
  storageGenesisHashAddAction: (item) => ({
    type: ACTIONS.STORAGE_GENESISHASH_ADD,
    payload: item
  })
});

export default ACTIONS;
