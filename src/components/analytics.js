import * as tf from '@tensorflow/tfjs'
export default function analyse(X,Y,units,layers,x,xLen,yLen){
    const model = tf.sequential();
    for(let i = 0;i < layers ; i++){
        model.add(tf.layers.dense({units: units, useBias: true}))
      }
    model.add(tf.layers.dense({units: yLen, useBias: true}));
    const inputTensor = tf.tensor2d(X, [X.length, xLen]);
    const labelTensor = tf.tensor2d(Y, [Y.length, yLen]);
    const learningRate = 0.01;
    const optimizer = tf.train.sgd(learningRate);

    model.compile({
        optimizer: optimizer,
        loss: tf.losses.meanSquaredError,
        metrics: ['mse'],
    });
    model.fit(inputTensor, labelTensor, {
        epochs:100,
        shuffle: true
    });
    console.log("epoch")

    var yVal=tf.tensor2d(x, [1,xLen]);
    return model.predict(yVal).dataSync();
}