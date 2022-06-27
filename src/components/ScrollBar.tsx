import React from "react";
// @React-scrollbar
import SimpleBarReact from 'simplebar-react';
// material
import {alpha, styled} from '@mui/material/styles';
import {Box} from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden'
});


// ----------------------------------------------------------------------

interface IScrollBar {
    children: React.ReactNode,
    sx?: {}
};

export const Scrollbar: React.FC<IScrollBar> = ({children, sx, ...other}) => {


    const SimpleBarStyle = styled(SimpleBarReact)(({theme}) => ({
        direction: "rtl",
        maxHeight: '100%',
        '& .simplebar-scrollbar': {
            '&:before': {
                backgroundColor: alpha(theme.palette.grey[600], 0.48)
            },
            '&.simplebar-visible:before': {
                opacity: 1
            }
        },
        '& .simplebar-track.simplebar-vertical': {
            width: 10
        },
        '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
            height: 6
        },
        '& .simplebar-mask': {
            zIndex: 'inherit'
        }
    }));
    return (
        <RootStyle dir={"rtl"}>
            <SimpleBarStyle timeout={500} direction={"rtl"} clickOnTrack={false} sx={sx} {...other}>
                {children}
            </SimpleBarStyle>
        </RootStyle>
    );
}
