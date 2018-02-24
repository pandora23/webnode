import React from 'react';
import { connect } from 'react-redux';

import storageActions from '../../redux/actions/storage-actions';
import StorageBootstrap from 'components/storage/storage-bootstrap';
<<<<<<< HEAD
=======

>>>>>>> 9ec25147cd99c2179f8d0941b05497007794d1d8

const mapStateToProps = state => ({
	storage: state.storage
});

const mapDispatchToProps = dispatch => ({
  storageBrokerNodeAddFn: item =>
    dispatch(storageActions.storageBrokerNodeAddAction(item)),
   storageWebNodeAddFn: item =>
    dispatch(storageActions.storageWebNodeAddAction(item)),
   storageGenesisHashAddFn: item =>
    dispatch(storageActions.storageGenesisHashAddAction(item)),
   storageExchangesAddFn: (transaction_id, need_requested) =>
    dispatch(storageActions.storageExchangesAddAction(transaction_id, need_requested)),
   storagePeerIdChangeFn: item =>
    dispatch(storageActions.storagePeerIdChangeAction(item))
});

const Storage = ({ storage, storageBrokerNodeAddFn, storageWebNodeAddFn, storageGenesisHashAddFn, storageExchangesAddFn, storagePeerIdChangeFn }) => (
<<<<<<< HEAD
=======

>>>>>>> 9ec25147cd99c2179f8d0941b05497007794d1d8
  <StorageBootstrap storage={storage} 
  	storageBrokerNodeAddFn={storageBrokerNodeAddFn}
  	storageWebNodeAddFn={storageWebNodeAddFn}
  	storageGenesisHashAddFn={storageGenesisHashAddFn}
    storageExchangesAddFn={storageExchangesAddFn}
    storagePeerIdChangeFn={storagePeerIdChangeFn}
<<<<<<< HEAD
=======

>>>>>>> 9ec25147cd99c2179f8d0941b05497007794d1d8
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(Storage);
