export default function peer(peer) {
  return {
    __peer() { return peer },
    id() { return peer.id },
    connections() { return peer.connections },
  }
}
