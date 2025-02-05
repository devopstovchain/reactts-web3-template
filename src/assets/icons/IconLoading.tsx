import { SvgIcon } from '@mui/material';
import { SvgComponent } from 'crypto-token-icon';

export const IconLoading: SvgComponent = (props) => (
    <SvgIcon {...props} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" sx={{ margin: 'auto', shapeRendering: 'auto', display: 'block', background: 'transparent', ...props.sx }}>
        <g>
            <circle strokeLinecap="round" fill="none" strokeDasharray="59.690260418206066 59.690260418206066" stroke="#6cb7d4" strokeWidth="3" r="38" cy="50" cx="50">
                <animateTransform values="0 50 50;360 50 50" keyTimes="0;1" repeatCount="indefinite" dur="1.8867924528301885s" type="rotate" attributeName="transform" />
            </circle>
            <circle
                strokeLinecap="round"
                fill="none"
                strokeDashoffset="53.40707511102649"
                strokeDasharray="53.40707511102649 53.40707511102649"
                stroke="#0ae16b"
                strokeWidth="3"
                r="34"
                cy="50"
                cx="50"
            >
                <animateTransform values="0 50 50;-360 50 50" keyTimes="0;1" repeatCount="indefinite" dur="1.8867924528301885s" type="rotate" attributeName="transform" />
            </circle>
            <g />
        </g>
    </SvgIcon>
);
