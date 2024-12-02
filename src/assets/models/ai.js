import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

const getTensor = async () => {
  const modelJson = require('./model.json');
  const modelWeight = require('../../assets/models/group1-shard1of1.bin');

  const model = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));
  return model;
};
