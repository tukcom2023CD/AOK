import { useState } from "react";
import { Slider } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { Typography, Button,IconButton } from '@mui/material';
import BasicList from '../Components/List';
import Profile from '../Components/Profile';
import styled from 'styled-components';
import SelectBar from '../Components/SelectBar';
import EditIcon from '@mui/icons-material/Edit';
import DiscreteSlider from '../Components/Slider';
import FileList from '../Components/FileList';
import FeedBack from '../Components/FeedBack';
import UpsideGray from '../Components/UpsideGray';

const CustomSlider = withStyles({
    root: {
      color: "#FF9198",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#FF9198",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 4,
      borderRadius: 2
    },
    rail: {
      height: 4,
      borderRadius: 2
    }
  })(Slider);

export const theme = createTheme({
    palette: {
    primary: {
        light: "#838383",
        main: "#FF9198",
        dark: "#FFEFEF"
    },
    secondary: {
        light: '#F3F3F3',
        main: "#FFFFFF",
        dark: "#4A4A4A"
    },
    
    },
});

const useStyles = makeStyles({
    center: {
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
    },
});

function dateToSliderValue(date: Date, minDate: Date, maxDate: Date): number {
    const dateNum = date.getTime();
    const minDateNum = minDate.getTime();
    const maxDateNum = maxDate.getTime();
  return ((dateNum - minDateNum) * 100) / (maxDateNum - minDateNum);
}

function sliderValueToDate(sliderValue: number, minDate: Date, maxDate: Date): Date {
    const range = maxDate.getTime() - minDate.getTime();
    const valueInMs = Math.round((range * sliderValue) / 100);
    const newDate = new Date(minDate.getTime() + valueInMs);
    return newDate;
}

export default function DateSlider() {
    const classes = useStyles();

    const [value, setValue] = useState<number>(
    dateToSliderValue(new Date(), new Date("2023-01-01"), new Date("2023-12-31"))
    );

    const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
    };

    const valueToDate = sliderValueToDate(value, new Date("2023-01-01"), new Date("2023-12-31"));

    return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width:"800px", maxWidth:"800px", minWidth:"500px" }}>
        <CustomSlider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        />
        <div className={classes.center}>{valueToDate.toLocaleDateString()}</div>
    </Box>
    </ThemeProvider>
    );
    
}




