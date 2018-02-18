import React from 'react';
import { connect } from 'react-redux';

import storageActions from '../../redux/actions/storage-actions';
import StorageBootstrap from 'components/storage/storage-bootstrap';

const mapStateToProps = state => ({
	storage: state.storage
});

const mapDispatchToProps = dispatch => ({
  storageBrokerNodeAddFn: item =>
    dispatch(storageActions.storageBrokerNodeAddAction(item)),
   storageWebNodeAddFn: item =>
    dispatch(storageActions.storageWebNodeAddAction(item)),
   storageGenesisHashAddFn: item =>
    dispatch(storageActions.storageGenesisHashAddAction(item))
});

const Storage = ({ storage, storageBrokerNodeAddFn, storageWebNodeAddFn, storageGenesisHashAddFn}) => (
  <StorageBootstrap storage={storage} 
  	storageBrokerNodeAddFn={storageBrokerNodeAddFn}
  	storageWebNodeAddFn={storageWebNodeAddFn}
  	storageGenesisHashAddFn={storageGenesisHashAddFn}
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(Storage);
