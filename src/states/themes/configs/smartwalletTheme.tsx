import { colors, darken, lighten, outlinedInputClasses, PaletteOptions, Theme, ThemeOptions } from '@mui/material';
import { THEME_MODE } from '../types';
import { buildVariant, pxToRem } from '../utils';
import { FontOpenSans } from 'src/constants';
import { ExpandMoreRounded } from '@mui/icons-material';
import { IconCheckedPrimary } from 'src/assets/icons/IconCheckedPrimary';

export function getSmartWalletThemeConfig(mode: THEME_MODE): ThemeOptions {
    const getColor = (darkColor: string, lightColor: string) => {
        return mode === 'dark' ? darkColor : lightColor;
    };

    const palette = {
        mode,
        divider: '#D3E8E7',
        background: {
            // paper: getColor('#121212', '#FFFFFF'),
            paper: getColor('#121212', '#FFFFFF'),
            default: '#09120E', // ? body background
            primary: getColor('#2D2D2D', '#F7F7F7'),
            secondary: getColor('#585F5A', '#D8D8D8'),
            content: getColor('linear-gradient(142deg, #005112 0%, #033700 35%, #220028 65%, #1C0051 100%)', 'linear-gradient(142deg, #CFEFD6 0%, #E9F6DF 35%, #FDF1FF 65%, #F0E8FF 100%)'), // ? color content background
            selection: 'linear-gradient(99deg, #0AE16B 0%, #8EFFC7 60.15%, #40FF96 100%)', // ? color selection sidebar
            hover: 'linear-gradient(90deg, #0E1713 0%, #0A4C31 48%, #0E1713 100%)',
            button: 'linear-gradient(99deg, #0AE16B 0%, #8EFFC7 60.15%, #40FF96 100%)',
            accordion: getColor('#121212', '#D8D8D8'),
            // border: getColor('#414141', '#E5E5E5'),
            border: getColor('#484848', '#E3E3E3'),
            // button: getColor('linear-gradient(275.09deg, #5BF193 4.05%, #00A278 50.05%, #015640 100%)', 'linear-gradient(276deg, #69F59D -12.14%, #00A178 53.02%, #02513D 100%)'),
        },

        primary: {
            main: getColor('#69F59D', '#3fc668'),
            light: '#69F59D',
            dark: '#02513D',
        },
        secondary: {
            main: getColor('#616161', '#131816'),
            light: getColor('#242c28', '#C3C4C3'), // mau nen button text
            dark: getColor('#484848', '#CCC'), //
        },
        action: {
            hover: getColor('#B5B5B5', '#8A8A8A'),
            active: getColor('#D4D4D4', '#484848'),
            focus: getColor('#D4D4D4', '#484848'),
        },
        info: {
            main: getColor('#EAF4FF', '#00527C'), // text color
            light: getColor('#00527C', '#EAF4FF'), // defaul bg color
            dark: getColor('#007CB4', '#91D0FF'), // filled bg color
        },

        warning: {
            main: getColor('#FFF1E3', '#5E4200'), // text color
            light: getColor('#5E4200', '#FFF1E3'), // defaul bg color
            dark: '#FFB800', // filled bg color
        },
        success: {
            main: getColor('#35EE9B', '#0C5132'), // text color
            light: getColor('#0C5132', '#CDFEE1'), // defaul bg color
            dark: getColor('#92FEC2', '#29845A'), // filled bg color
        },

        error: {
            main: getColor('#FD817A', '#8E1F0B'), // text color
            light: getColor('#2F0A04', '#FEE9E8'), // defaul bg color
            dark: getColor('#FD817A', '#E51C00'), // filled bg color
        },

        text: {
            primary: getColor('#FFFFFF', '#121212'),
            secondary: getColor('#CCC', '#616161'),
        },
    } as PaletteOptions;

    return {
        breakpoints: {
            keys: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl', 'xxl'],
            values: { xs: 0, xsm: 600, sm: 760, md: 960, lg: 1280, xl: 1440, xxl: 1800 },
        },
        shadows: [
            'none', // 0
            '0px 4px 8px 0px rgba(4, 62, 53, 0.25)', // 1
            '0px 4px 8px 0px rgba(44, 151, 143, 0.48)', // 2
            '1px 1px 3px 0px rgba(0, 0, 0, 0.20)', // 3
            '0px 2px 6px 0px rgba(0, 0, 0, 0.20)', // 4
            getColor('0px 3px 10px 4px rgba(255, 255, 255, 0.05), 0px 1px 3px 0px rgba(255, 255, 255, 0.15)', '0px 3px 10px 4px rgba(0, 0, 0, 0.05), 0px 1px 3px 0px rgba(0, 0, 0, 0.15)'), // 5
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ],
        palette,
        typography: {
            fontFamily: FontOpenSans,
            h1: { ...buildVariant(700, 52, 71) },
            h2: { ...buildVariant(700, 45, 61) },
            h3: { ...buildVariant(600, 30, 40) },
            h4: { ...buildVariant(600, 28, 38) },
            h5: { ...buildVariant(600, 24, 32) },
            h6: { ...buildVariant(600, 20, 26) },
            body1: { ...buildVariant(400, 16, 24) },
            body2: { ...buildVariant(400, 14, 20) },
            body3: { ...buildVariant(600, 12, 16) },
            subtitle1: buildVariant(600, 16, 24, 0),
            subtitle2: buildVariant(600, 14, 20, 0),
            caption: buildVariant(400, 14, 20, 0.15),
            caption2: buildVariant(500, 12, 16),
            button: {
                ...buildVariant(600, 14, 20),
                textTransform: 'none',
            },
        },
    };
}

export function getSmartWalletThemedComponent(theme: Theme, mode: THEME_MODE): ThemeOptions {
    return {
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '.SnackbarItem-wrappedRoot .SnackbarItem-contentRoot .SnackbarItem-message': {
                        ...theme.typography.body3,
                    },
                    // disable arrow from input number
                    // Chrome, Safari, Edge, Opera
                    'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                    // Firefox
                    'input[type=number]': {
                        MozAppearance: 'textfield',
                    },
                    'body::-webkit-scrollbar-thumb': {
                        background: 'linear-gradient(0deg, #f3eaff94 -12.14%, #f2f3eed1 53.02%, #d2efd69e 100%)',
                    },
                    '*': {
                        '::-webkit-scrollbar': {
                            height: '8px' /* height of horizontal scrollbar ← You're missing this */,
                            width: '8px' /* width of vertical scrollbar */,
                        },
                        '::-webkit-scrollbar-track': {
                            borderRadius: 0,
                            background: 'transparent',
                        },

                        '::-webkit-scrollbar-thumb': {
                            borderRadius: 4,
                            background: theme.palette.mode == 'dark' ? '#484848' : '#E3E3E3',
                            cursor: 'pointer',
                            '&:hover': {
                                background: '#d3d3d3',
                            },
                        },
                    },
                },
            },
            MuiContainer: {
                defaultProps: {
                    maxWidth: false,
                },
                styleOverrides: {
                    root: {
                        maxWidth: '1178px!important',
                        paddingBottom: '65px',
                        [theme.breakpoints.down('xsm')]: {
                            paddingLeft: '8px!important',
                            paddingRight: '8px!important',
                        },
                    },
                },
            },

            MuiFormControl: {
                styleOverrides: {
                    root: {
                        '--iconOpenSelectMenuColor': theme.palette.primary.light,
                    },
                },
            },
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        backdropFilter: 'blur(3px)',
                    },
                },
            },

            MuiTextField: {
                defaultProps: { size: 'medium' },
                styleOverrides: {
                    root: {},
                },
            },
            MuiSelect: {
                defaultProps: {
                    IconComponent: ExpandMoreRounded,
                    size: 'small',
                },
                styleOverrides: {
                    root: {
                        borderRadius: '30px',
                        background: (theme.palette.mode == 'dark' ? '#484848' : '#E3E3E3') + '!important',
                        '& .MuiSelect-select': {
                            padding: '4px 30px 4px 8px!important',
                            fontSize: '14px',
                        },
                    },
                    icon: {
                        color: theme.palette.text.primary,
                    },
                    filled: {},
                    select: {},
                },
            },
            MuiFormLabel: {
                //* Label of item like TextField_Outlined
                styleOverrides: {
                    root: {
                        color: theme.palette.primary.main,
                    },
                    colorSecondary: {
                        color: theme.palette.secondary.main,
                    },
                },
            },
            MuiInputLabel: {
                //* title of text field outline
                defaultProps: {},
                styleOverrides: {
                    root: {
                        marginLeft: '6px',
                    },
                },
            },
            MuiInputBase: {
                //* input of text field
                styleOverrides: {
                    root: {
                        fontSize: '14px',
                        height: '48px',
                        '--outlineInputBorderColor': theme.palette.mode == 'dark' ? '#484848' : '#CCC',
                        '--hoverOutlineInputBorderColor': theme.palette.action.hover,
                        '--hoverOutlineInputBackgroundColor': theme.palette.mode == 'dark' ? '#2D2D2D' : '#FAFAFA',
                        '--focusedOutlineInputBackgroundColor': theme.palette.mode == 'dark' ? '#484848' : '#F7F7F7',
                        '--focusedOutlineInputBorderColor': theme.palette.action.active,

                        '--filledInputPadding': '10px 14px',
                        color: theme.palette.text.primary,
                        '&.MuiInputBase-adornedEnd': {
                            paddingRight: '8px',
                        },
                    },
                    sizeSmall: {
                        '--filledInputPadding': '8.5px 12px',
                        height: '40px',
                    },

                    error: {
                        color: theme.palette.error.main,
                        '--outlineInputBorderColor': theme.palette.error.main,
                        '--iconOpenSelectMenuColor': theme.palette.error.main,
                        '--hoverOutlineInputBorderColor': theme.palette.error.main,
                        '--hoverOutlineInputBackgroundColor': theme.palette.error.light,
                        '--focusedOutlineInputBackgroundColor': theme.palette.error.light,
                        '--focusedOutlineInputBorderColor': theme.palette.error.main,
                    },
                    colorSecondary: {
                        '--outlineInputBorderColor': theme.palette.success.main,
                        '--iconOpenSelectMenuColor': theme.palette.success.main,
                        '--hoverOutlineInputBorderColor': theme.palette.success.main,
                        '--hoverOutlineInputBackgroundColor': theme.palette.success.light,
                        '--focusedOutlineInputBackgroundColor': theme.palette.success.light,
                        '--focusedOutlineInputBorderColor': theme.palette.success.main,
                    },
                    multiline: {
                        height: 'auto',
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: '12px',
                        //* border of text fields
                        [`.${outlinedInputClasses.notchedOutline}`]: {
                            //* background of text title of text field
                            ['& > legend']: {
                                marginLeft: '6px',
                            },
                            borderColor: 'var(--outlineInputBorderColor)',
                        },
                        '&:hover': {
                            background: 'var(--hoverOutlineInputBackgroundColor)',
                        },
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--hoverOutlineInputBorderColor)',
                        },
                        '&.Mui-focused': {
                            background: 'var(--focusedOutlineInputBackgroundColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--focusedOutlineInputBorderColor)',
                        },
                        '& .MuiInputBase-input': {
                            padding: 'var(--filledInputPadding)',
                        },
                    },
                    error: {
                        background: theme.palette.error.light,
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.mode == 'dark' ? '#484848' : '#FAFAFA',
                        '&:hover': {
                            background: 'var(--hoverOutlineInputBackgroundColor)',
                        },
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--hoverOutlineInputBorderColor)',
                        },
                        '&.Mui-focused': {
                            background: 'var(--focusedOutlineInputBackgroundColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--focusedOutlineInputBorderColor)',
                        },
                        borderRadius: '12px',
                        border: 'none',
                        '&:after, &:before': {
                            display: 'none',
                        },
                        '& .MuiInputBase-input': {
                            padding: 'var(--filledInputPadding)',
                        },
                    },
                    error: {
                        background: theme.palette.error.light,
                    },
                },
            },
            MuiAutocomplete: {
                defaultProps: {
                    popupIcon: <ExpandMoreRounded />,
                    disableClearable: true,
                },
                styleOverrides: {
                    root: {
                        // '& > .MuiFormControl-root > .MuiOutlinedInput-root': {
                        //     paddingLeft: '14px',
                        // },
                    },
                    listbox: {
                        padding: '4px',
                        '& li': {
                            fontSize: '14px',
                            minHeight: '40px',
                            borderRadius: '12px',
                            padding: '8px 10px!important',
                        },
                        '& li.Mui-focused': {
                            background: theme.palette.background.button,
                            fontWeight: 600,
                            color: '#09120E',
                            cursor: 'pointer',
                            p: {
                                fontWeight: 600,
                                color: '#09120E',
                            },
                        },
                        '& li:active': {
                            background: theme.palette.primary.main,
                        },
                    },
                },
            },
            MuiButtonBase: {
                styleOverrides: {
                    root: {
                        // '&.MuiMenuItem-root.Mui-selected': {
                        //     color: '#09120E',
                        //     background: theme.palette.background.button,
                        //     fontWeight: 600,
                        // },
                    },
                },
            },
            MuiButton: {
                defaultProps: {},
                styleOverrides: {
                    root: {
                        textTransform: 'capitalize',
                        borderRadius: '22px',
                        boxShadow: 'none',
                    },
                    sizeMedium: {
                        ...theme.typography.button,
                        lineHeight: 1,
                        height: '40px',
                        padding: '8px 16px',
                    },
                    sizeLarge: {
                        height: '50px',
                        padding: '12px 20px',
                    },
                    sizeSmall: {
                        padding: '4px 8px',
                        minWidth: '55px',
                        height: '30px',
                    },

                    containedPrimary: {
                        background: theme.palette.background.button,
                        color: '#09120E',
                        '&:hover, &.Mui-focusVisible': {
                            backgroundColor: darken(theme.palette.primary.main, 0.1),
                            // boxShadow: ' 0px 0px 5px 0px ' + theme.palette.primary.main,
                        },
                        '&.Mui-disabled': {
                            color: theme.palette.mode === 'dark' ? '#484848' : '#B5B5B5',
                            background: theme.palette.mode === 'dark' ? '#1c1c1c' : 'rgba(0, 0, 0, 0.12)',
                        },
                    },
                    containedSecondary: {
                        backgroundColor: theme.palette.secondary.main,
                        color: '#FFFFFF',
                        '&:hover, &.Mui-focusVisible': {
                            backgroundColor: darken(theme.palette.secondary.main, 0.2),
                        },
                    },
                    containedSuccess: {
                        backgroundColor: theme.palette.background.primary,
                        color: theme.palette.primary.main,
                        '&:hover, &.Mui-focusVisible': {
                            backgroundColor: darken(theme.palette.background.primary, 0.01),
                            boxShadow: '0px 2px 5px 0px ' + theme.palette.background.primary,
                        },
                    },
                    outlinedPrimary: {
                        borderColor: '#04B885',
                        color: '#0FAD7D',
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: ' 0px 2px 5px 0px ' + '#04B885',
                        },
                    },
                    textSecondary: {
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.mode == 'dark' ? '#888d8b' : '#585F5A',
                    },
                    textPrimary: {
                        '&:hover': {
                            backgroundColor: lighten(theme.palette.primary.main, 0.85),
                        },
                    },
                },
                variants: [
                    {
                        props: { variant: 'gradient' },
                        style: {
                            color: theme.palette.common.white,
                            background: theme.palette.background.button,
                            transition: 'all 250ms ease',
                            '&:hover, &.Mui-focusVisible': {
                                opacity: 0.9,
                            },
                        },
                    },
                ],
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        '&.Mui-disabled': {
                            color: theme.palette.mode === 'dark' ? '#484848' : '#B5B5B5',
                            background: theme.palette.mode === 'dark' ? '#1c1c1c' : 'rgba(0, 0, 0, 0.12)',
                        },
                    },
                },
            },
            MuiCheckbox: {
                defaultProps: {
                    checkedIcon: <IconCheckedPrimary />,
                },
            },
            MuiTypography: {
                defaultProps: {
                    variant: 'body1',
                    fontFamily: FontOpenSans,
                    fontStyle: 'normal',
                    variantMapping: {
                        h1: 'h1',
                        h2: 'h2',
                        h3: 'h3',
                        h4: 'h4',
                        h5: 'h5',
                        h6: 'h6',
                        body1: 'p',
                        body2: 'p',
                        body3: 'p',
                        subtitle1: 'p',
                        subtitle2: 'p',
                        button: 'p',
                        caption: 'p',
                        caption2: 'p',
                    },
                },
                styleOverrides: {
                    root: {
                        fontOpticalSizing: 'auto',
                    },
                },
            },

            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        fontSize: pxToRem(20),
                    },
                    fontSizeSmall: {
                        fontSize: pxToRem(16),
                    },
                    fontSizeLarge: {
                        fontSize: pxToRem(24),
                    },
                },
            },
            MuiPaper: {
                defaultProps: {
                    elevation: 2,
                },
                styleOverrides: {
                    root: {
                        borderRadius: '10px',
                        // boxShadow: theme.shadows[4],
                    },
                },
            },
            MuiDialog: {
                defaultProps: {
                    scroll: 'paper',
                    PaperProps: {
                        elevation: 0,
                        sx: {
                            borderRadius: '16px',
                        },
                    },
                },
            },
            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        paddingTop: theme.spacing(5),
                        // paddingTop: `${theme.spacing(2.5)} !important`, // prevent override
                        background: theme.palette.background.paper,
                    },
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(2, 2.5),
                        backgroundColor: theme.palette.mode == 'light' ? '#F7F7F7' : '#2D2D2D',
                        '&.MuiDialogTitle-root+.MuiDialogContent-root': {
                            paddingTop: theme.spacing(2.5),
                        },
                    },
                },
            },
            MuiUseMediaQuery: {
                defaultProps: {
                    noSsr: true,
                },
            },
            MuiTooltip: {
                defaultProps: {
                    arrow: true,
                    placement: 'top',
                },
                styleOverrides: {
                    tooltip: {
                        ...theme.typography.body3,
                        boxShadow: theme.palette.mode == 'dark' ? 'rgb(255 255 255 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 2px 10px' : 'rgb(0 0 0 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 2px 10px',
                        background: theme.palette.background.paper,
                        padding: theme.spacing(1),
                        maxWidth: 400,
                        color: theme.palette.text.primary,
                    },
                    arrow: {
                        '&:before': {
                            boxShadow:
                                theme.palette.mode == 'dark' ? 'rgb(255 255 255 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 2px 10px' : 'rgb(0 0 0 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 2px 10px',
                            background: theme.palette.background.paper,
                        },
                        color: theme.palette.text.primary,
                    },
                },
            },
            MuiAlert: {
                defaultProps: {
                    variant: 'outlined',
                },
                styleOverrides: {
                    root: {
                        background: 'var(--bgAlertColor)',
                        color: 'var(--colorTextAlert)!important',
                    },
                    outlinedWarning: {
                        '--bgAlertColor': theme.palette.warning.light,
                        '--colorTextAlert': theme.palette.warning.main,
                    },
                    outlinedSuccess: {
                        '--bgAlertColor': theme.palette.success.light,
                        '--colorTextAlert': theme.palette.success.main,
                    },
                    outlinedError: {
                        '--bgAlertColor': theme.palette.error.light,
                        '--colorTextAlert': theme.palette.error.main,
                    },
                    filled: {
                        '--colorTextAlert': theme.palette.mode == 'dark' ? '#2f0a04' : '#fffbfb',
                    },
                    filledError: {
                        '--bgAlertColor': theme.palette.error.dark,
                    },
                    filledWarning: {
                        '--bgAlertColor': theme.palette.warning.dark,
                    },
                    filledSuccess: {
                        '--bgAlertColor': theme.palette.success.dark,
                    },
                },
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.mode == 'light' ? '#F7F7F7' : '#2D2D2D',
                        overflow: 'hidden',
                        borderRadius: '24px',
                        '&:first-of-type, &:last-of-type': {
                            borderRadius: '24px !important',
                        },
                        '&:before': {
                            display: 'none',
                        },
                        '&.Mui-expanded': {
                            // backgroundColor: theme.palette.background.accordion,
                        },
                        boxShadow: 'none',
                        border: '1px solid ',
                        borderColor: theme.palette.mode == 'dark' ? '#484848' : '#E3E3E3',
                    },
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: {
                        background: 'none',
                        '&.Mui-expanded': {
                            // background: theme.palette.background.paper,
                            // boxShadow: 'inset 0px 0px 6px #D5D9D985, 0px 3px 6px #00000014',
                        },
                        '& .MuiAccordionSummary-content': {
                            margin: 0,
                            '&.Mui-expanded': {
                                margin: 0,
                            },
                        },
                    },
                },
            },
            MuiInputAdornment: {
                styleOverrides: {
                    root: {
                        margin: '0px',
                        '& .MuiInputBase-root': {
                            height: '36px',
                        },
                    },
                },
            },
            MuiAccordionDetails: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1),
                    },
                },
            },
            MuiButtonGroup: {
                styleOverrides: {
                    root: {
                        border: '1px solid',
                        borderColor: theme.palette.mode == 'dark' ? '#2b332f' : '#B8BEB9',
                        backgroundColor: theme.palette.secondary.light,
                        borderRadius: '18px',

                        padding: '3px',

                        overflow: 'hidden',
                    },
                    middleButton: {
                        borderRadius: '15px',
                        borderColor: 'transparent',
                    },
                    lastButton: {
                        borderRadius: '15px',
                        borderColor: 'transparent',
                    },
                    firstButton: {
                        borderRadius: '15px',
                        borderColor: 'transparent',
                    },
                    grouped: {
                        borderRadius: '18px',
                        minWidth: '85px',
                    },
                },
            },

            MuiPopover: {
                styleOverrides: {
                    root: {
                        '& .MuiBackdrop-root': {
                            backdropFilter: 'none',
                        },
                    },
                    paper: {
                        // color: theme.palette.text.secondary,
                        background: theme.palette.background.paper,
                    },
                },
            },
            MuiMenu: {
                styleOverrides: {
                    paper: {
                        background: theme.palette.mode == 'dark' ? '#2D2D2D' : '#F7F7F7',
                        boxShadow: '0px 3px 10px 4px rgba(0, 0, 0, 0.05), 0px 1px 3px 0px rgba(0, 0, 0, 0.15)',
                        padding: '0px 8px',
                        borderRadius: '16px',
                    },
                },
            },
            MuiList: {
                styleOverrides: {
                    root: {},
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        padding: '0px',
                        borderRadius: '12px',
                        minHeight: '40px!important',
                        color: theme.palette.text.secondary,
                        '&:hover': {
                            background: theme.palette.mode == 'dark' ? '#dcdcdc2e' : '#cecece75',
                        },
                        '&.Mui-selected': {
                            color: theme.palette.text.primary + '!important',
                            background: 'linear-gradient(99deg, rgba(10, 225, 107, 0.12) 0%, rgba(142, 255, 199, 0.12) 60.15%, rgba(64, 255, 150, 0.12) 100%)!important',
                        },
                    },
                },
            },
            MuiPagination: {
                defaultProps: {
                    color: 'primary',
                    shape: 'rounded',
                },
            },
            MuiPaginationItem: {
                styleOverrides: {
                    root: {
                        '&.Mui-selected': {
                            color: '#fff',
                            boxShadow: '0px 0px 10px 1px rgba(196, 196, 196, 0.5)',
                        },
                    },
                },
            },
        },
    };
}
