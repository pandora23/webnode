import React, { Component } from "react";

class StorageBootstrap extends Component {

  constructor(props) {
    super(props);
    const {
      storage,
      storageBrokerNodeAddFn, 
      storageWebNodeAddFn,
      storageGenesisHashAddFn
    } = props;

    console.log("Storage BrokerNode -> " + storage.brokerNode);
    console.log("Storage WebNode -> " + storage.webNode);
    console.log("Storage GenesisHash -> " + storage.genesisHash);

    storageBrokerNodeAddFn('Next BrokerNode');
    storageWebNodeAddFn('Next WebNode');
    storageGenesisHashAddFn('Next GenesisHash');

    this._getRandomItemFn(storage);
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
    let storageTitle = [];
    if(random === 0) {
      storageTitle = 'storage.brokerNode';
    } else {
      storageTitle = 'storage.webNode';
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
