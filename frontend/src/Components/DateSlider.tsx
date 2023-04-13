import { useState } from "react";
import { Slider } from "@material-ui/core";

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

export default function DateSlide() {
  const [value, setValue] = useState<number>(
    dateToSliderValue(new Date(), new Date("2021-01-01"), new Date("2023-12-31"))
  );

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const valueToDate = sliderValueToDate(value, new Date("2021-01-01"), new Date("2023-12-31"));

  return (
    <div>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
      <div>{valueToDate.toLocaleDateString()}</div>
    </div>
  );
}

