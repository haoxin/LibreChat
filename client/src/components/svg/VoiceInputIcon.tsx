import { cn } from '~/utils';

export default function VoiceInputIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={'0 0 24 24'}
      fill="none"
      className={cn('text-white dark:text-black', className)}
    >
    <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C14.7614 3 17 5.23858 17 8V13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13V8C7 5.23858 9.23858 3 12 3ZM14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8V13C8 14.6569 9.34315 16 11 16C12.6569 16 14 14.6569 14 13V8ZM12 20C13.6569 20 15 18.6569 15 17H9C9 18.6569 10.3431 20 12 20Z"
        fill="currentColor"
      />
    </svg>
  );
}
