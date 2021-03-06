"use strict";


const waveDrawer = new WaveDrawer('audioWave', 1000, 100);
waveDrawer.start();
let onWebWorkMessageData = ({
    data
}) => {
    console.log("main.js onWebWorkMessageData");
    switch (data.type) {
        case 'original_data':
            waveDrawer.set_data(data.data);
            break;
        case 'stft_data':
            break;
        case 'stft_data':
            break;
        case 'stft_data':
            break;
    };

};


const microphone = new MicrophoneDataSource(
    'MicrophoneDataSourceWebWorker.js',
    onWebWorkMessageData,
    true,
    8000,
    undefined,
);

$('body').append(`<button id='open_btn'>Open</button>`);
const open_btn = document.querySelector('#open_btn');
$('body').append(`<button id='start_btn'>Start</button>`);
const start_btn = document.querySelector('#start_btn');
$('body').append(`<button id='stop_btn'>Stop</button>`);
const stop_btn = document.querySelector('#stop_btn');
$('body').append(`<button id='close_btn'>Close</button>`);
const close_btn = document.querySelector('#close_btn');


open_btn.onclick = async function () {
    microphone.open();
};

start_btn.onclick = async function () {
    microphone.start();
};

stop_btn.onclick = function () {
    microphone.stop();
};

close_btn.onclick = async function () {
    microphone.close();
};