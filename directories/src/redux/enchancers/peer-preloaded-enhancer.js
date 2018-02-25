import peerDomain from '../../domain/peer';

export default function peerPreloadedEnhancer(preloadedState) {
  return {
    ...preloadedState,
    peer: peerDomain({}),
  };
}
