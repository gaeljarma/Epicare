import { useState, useEffect } from "react";
import { readAsStringAsync } from "expo-file-system"; // Si usas Expo
import { Asset } from "expo-asset"; // Manejo de archivos estáticos

const loadModel = async () => {
  const jsonAsset = Asset.fromModule(require('./assets/model.json'));
  const binAsset = Asset.fromModule(require('./assets/group1-shard1of1.bin'));

  const jsonModel = await readAsStringAsync(jsonAsset.uri);
  const weightsBinary = await fetch(binAsset.uri).then((res) => res.arrayBuffer());

  return { model: JSON.parse(jsonModel), weights: new Float32Array(weightsBinary) };
};
