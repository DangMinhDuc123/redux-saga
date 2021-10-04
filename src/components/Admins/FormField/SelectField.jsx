import { MenuItem } from '@material-ui/core';
import React from 'react';
import { useController } from "react-hook-form";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


export function SelectField({ control, name, label, options, disabled }) {
    const {
        field: { value, onChange, onBlur },
        fieldState: { invalid },
    } = useController({
        name,
        control
    });

    return (
        <FormControl variant="outlined" size="small" fullWidth margin="normal" disabled={disabled} error={invalid} >
            <InputLabel id={`${name}_label`}>{label}</InputLabel>
            <Select
                labelId={`${name}_label`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                label={label}
                error={invalid}
            >
                {options.map(option => (
                    <MenuItem value={option.value} key={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

