import React, { Component } from 'react';

class StorageBootstrap extends Component {

  constructor(props) {
    super(props);
    const {
      storage,
      storageBrokerNodeAddFn, 
      storageWebNodeAddFn,
      storageGenesisHashAddFn,
      storageExchangesAddFn,
      storagePeerIdChangeFn
    } = props;

    console.log('Storage BrokerNode -> ' + storage.brokerNode);
    console.log('Storage WebNode -> ' + storage.webNode);
    console.log('Storage GenesisHash -> ' + storage.genesisHash);

    storageBrokerNodeAddFn('Next BrokerNode');
    storageWebNodeAddFn('Next WebNode');
    storageGenesisHashAddFn('Next GenesisHash');
    storageExchangesAddFn('transaction_id_0', 'BrokerNode1');
    storageExchangesAddFn('transaction_id_1', 'BrokerNode2');
    storageExchangesAddFn('transaction_id_2', 'BrokerNode3');
    storagePeerIdChangeFn('peer-client');

    this._getRandomItemFn(storage);

    console.log('DEMO 2');
    const randomStorage = this._getRandomStorage();
    console.log('randomStorage ' + randomStorage);
    storage.exchanges.map((item) => console.log('exchanges transaction_id ' + item.transaction_id + " need_requested " + item.need_requested));
    console.log('peerId ' + storage.peerId);
  }

  _getRandomStorage() {
    const random = this._randomFn(2);
    const storageTitle = this._getStorageNameFn(random);
    return storageTitle;
  }

  _getStorageNameFn(random) {
    let storageTitle = '';
    console.log(random);
    switch(random){
      case 0:
        storageTitle = 'broker_address';
        break;
      case 1:
        storageTitle = 'webnode_address';
        break;
      case 2:
        storageTitle = 'genesis_hash';
        break;
      default:
        storageTitle = '_getStorageTitleFn -> default';
    }
    return storageTitle;
    
  }

  _getRandomItemFn(storage) {
    const storageRandom = this._randomFn(1);
    console.log('Random number storage ->' + storageRandom);
    
    const storageType = this._getStorageFn(storage, storageRandom);
    const storageTitle = this._getStorageTitleFn(storageRandom);
    const storageCount = storageType.length;
    console.log('StorageType -> ' + storageType);
    console.log('StorageTypeCount -> ' + storageCount);
    
    const itemRandom =this._randomFn(storageCount)
    console.log('Random number item -> ' + itemRandom);

    const storageItem = this._getItemFn(storageType, itemRandom);
    console.log('StorageItem -> ' + storageItem + ' -> from -> ' + storageTitle);
  }

  _getItemFn(storage, random) {
    return storage[random];
  }

  _getStorageTitleFn(random) {

    let storageTitle = '';
    switch(random){
      case 0:
        storageTitle = 'storage.brokerNode';
        break;
      case 1:
        storageTitle = 'storage.webNode';
        break;
      case 2:
        storageTitle = 'storage.genesisHash';
        break;
      default:
        storageTitle = '_getStorageTitleFn -> default';

    }
    return storageTitle;
  }

  _getStorageFn(storage, random) {
    let storageType = [];
    if(random === 0) {
      storageType = storage.brokerNode;
    } else {
      storageType = storage.webNode
    }
    return storageType;
  }

  _randomFn(maxNumber) {
    const random = Math.floor(Math.random() * (maxNumber + 1));
    return random;
  }

  render() {
    return(<div></div>);
  }
}

export default StorageBootstrap;
