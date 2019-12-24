const path = require('path');
const protobuf = require('protobufjs');
const GAGlobals = require('./ga-globals');

const protoRoot = new protobuf.Root();
protoRoot.resolvePath = (origin, target) => {
  const {
    PROTO_BUFFER_DIRECTORY
  } = GAGlobals;
  const baseDir = !!PROTO_BUFFER_DIRECTORY ?
    PROTO_BUFFER_DIRECTORY :
    path.join(__dirname, '../lib');

  // we need to resolve each import to the lib directory instead of this one
  return protobuf.util.path.resolve(origin, path.resolve(baseDir, target));
};

module.exports = protoRoot;
