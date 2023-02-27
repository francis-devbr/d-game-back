const socketToServerPlayer = {};

const addPlayer = (socketId, playerId, serverId) => {
  console.log("player entrou "+ playerId)
  socketToServerPlayer[socketId] = { playerId, serverId };
};

const removePlayer = (socketId) => {
  delete socketToServerPlayer[socketId];
};

const getPlayer = (socketId) => {
  if (!socketToServerPlayer[socketId])
    throw new Error("Player is not in any server");
  return socketToServerPlayer[socketId];
};

module.exports = {
  addPlayer,
  removePlayer,
  getPlayer,
};
