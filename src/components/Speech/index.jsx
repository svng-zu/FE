import React, { useState, useRef, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import microphoneIcon from '../../assets/images/mic.svg';

const Voice = ({ onTranscript }) => {

    const commands = [
        {
            command: "open *",
            callback: (website) => {
                window.open("http://" + website.split(" ").join(""));
            },
        },
        {
            command: "change background colour to *",
            callback: (color) => {
                document.body.style.background = color;
            },
        },
        {
            command: "reset",
            callback: () => {
                handleReset();
            },
        },
        {
            command: "reset background colour",
            callback: () => {
                document.body.style.background = `rgba(0, 0, 0, 0.8)`;
            },
        },
    ];
    // 수정 후 빈 객체가 삭제되었습니다.


    const { transcript, resetTranscript } = useSpeechRecognition({ commands });
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);
    
    useEffect(() => {
        if (transcript !== '') {
            onTranscript(transcript); // onTranscript 함수에 최종 transcript를 전달
            resetTranscript(); // 최종 transcript를 처리한 후 reset
        }
    }, [onTranscript, transcript, resetTranscript]);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
            <div className='microphone-container'>
                Browser is not Support Speech Recognition.
            </div>
        );
    }

    const handleListening = () => {
        setIsListening(true);
        microphoneRef.current.classList.add('listening');
        SpeechRecognition.startListening({
            language: 'ko'
        });
    };

    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current.classList.remove('listening');
        SpeechRecognition.stopListening();
    };

    const handleReset = () => {
        stopHandle();
        resetTranscript();
    };

    console.log(transcript)

    return (
        <div className='microphone-wrapper'>
            <div className='microphone-container'>
                <div
                    className='microphone-icon-container'
                    ref={microphoneRef}
                    onClick={handleListening}
                >
                    <img src={microphoneIcon} className='microphone-icon' alt='icon' />
                </div>
                <div className='microphone-status'>
                    {isListening ? "음성 입력 중입니다" : ""}
                </div>
                {isListening && (
                    <button className='microphone-stop btn' onClick={stopHandle}>
                        완료
                    </button>
                )}
            </div>
            {transcript && (
                <div className='microphone-result-container' >
                    <div className='microphone-result-text'>{transcript}</div>
                    <button className='microphone-reset btn' onClick={handleReset}>
                        다시하기
                    </button>
                </div>
            )}
        </div>
    );
};

export { Voice };