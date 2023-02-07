import React from 'react';
import LottieView from 'lottie-react-native';

function Loading({ loading }) {

    if (loading == 1) {
        return (<LottieView source={require('../../asstes/loading.json')} autoPlay />);
    }
    else {
        return (<LottieView source={require('../../asstes/loadingstart.json')} autoPlay  />);
    }
}

export default Loading;