export default function peerDomain(peer) {
  return {
    __peer() { return peer },
    id() { return peer.id },
    connections() { return peer.connections },
  }
}
