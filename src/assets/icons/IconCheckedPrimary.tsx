import { SvgComponent } from 'crypto-token-icon';
import { SvgIcon } from '@mui/material';

export const IconCheckedPrimary: SvgComponent = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_6656_14210_checked_primary)">
                <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z"
                    fill="url(#paint0_linear_6656_14210_checked_primary)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0303 5.21967C12.3232 5.51256 12.3232 5.98744 12.0303 6.28033L7.53033 10.7803C7.23744 11.0732 6.76256 11.0732 6.46967 10.7803L4.21967 8.53033C3.92678 8.23744 3.92678 7.76256 4.21967 7.46967C4.51256 7.17678 4.98744 7.17678 5.28033 7.46967L7 9.18934L10.9697 5.21967C11.2626 4.92678 11.7374 4.92678 12.0303 5.21967Z"
                    fill="#121212"
                />
            </g>
            <defs>
                <linearGradient id="paint0_linear_6656_14210_checked_primary" x1="0" y1="0" x2="18.0967" y2="2.89548" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0AE16B" />
                    <stop offset="0.601491" stopColor="#8EFFC7" />
                    <stop offset="1" stopColor="#40FF96" />
                </linearGradient>
                <clipPath id="clip0_6656_14210_checked_primary">
                    <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
};
