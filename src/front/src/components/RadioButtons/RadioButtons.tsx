import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { Container } from "./RadioButtons.styles";

interface IRadio {
    label: string;
    buttonFirstLabel: string;
    buttonSecondLabel: string;
    onChange: (value: string) => void; 
}

export const RadioButtons: React.FC<IRadio> = ({label, buttonFirstLabel, buttonSecondLabel, onChange}) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = (event.target as HTMLInputElement).value;
        setValue(selectedValue);
        onChange(selectedValue);
    };

    return (
        <Container>
            <FormControl>
                <FormLabel id="radio-buttons-group">{label}</FormLabel>
                <RadioGroup
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    row
                    sx={{justifyContent: 'center'}}
                >
                    <FormControlLabel value={buttonFirstLabel} control={<Radio />} label={buttonFirstLabel} />
                    <FormControlLabel value={buttonSecondLabel} control={<Radio />} label={buttonSecondLabel} />
                </RadioGroup>
            </FormControl>
        </Container>
    );
};
