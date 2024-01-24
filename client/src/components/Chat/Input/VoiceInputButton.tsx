import React from 'react';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import VoiceInputIcon from '~/components/svg/VoiceInputIcon';
import { cn } from '~/utils';

interface VoiceInputButtonProps {
    disabled?: boolean;
    onVoiceInput: (input: string) => void; // Add a callback function prop
}

const VoiceInputButton: React.FC<VoiceInputButtonProps> = ({ disabled, onVoiceInput }) => {
    const handleVoiceInput = () => {
        const speechConfig = sdk.SpeechConfig.fromSubscription('ff9fbcba23be4b64ab383130bc0170f2', 'chinaeast2');
        speechConfig.speechRecognitionLanguage = "zh-CN";
        const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
        recognizer.recognizeOnceAsync(
            (result) => {
                onVoiceInput(result.text);
                recognizer.close();
            },
            (err) => {
                console.error(err);
                recognizer.close();
            }
        );
    };

    return (
        <button
        className={cn(
            'enabled:bg-brand-purple  rounded-lg rounded-md border border-black p-0.5 p-1 text-white transition-colors enabled:bg-black disabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:disabled:bg-white ',
            'bottom-1.5 right-1.5 md:bottom-2.5 md:right-3 md:p-[2px]',
          )}
            disabled={disabled}
            onClick={handleVoiceInput}
        >
       <span className="" data-state="closed">
        <VoiceInputIcon size={24} />
      </span>
        </button>
    );
};

export default VoiceInputButton;
