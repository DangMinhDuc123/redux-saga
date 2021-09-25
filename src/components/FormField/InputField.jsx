import { TextField } from '@material-ui/core';
import React from 'react';
import { useController } from "react-hook-form";


export function InputField({ control, name, label, ...inputProps }) {
    const {
        field: { ref, value, onChange, onBlur },
        fieldState: { invalid },
    } = useController({
        name,
        control
    });

    return (
        <TextField
            display
            fullwidth
            size="small"
            margin="normal"
            variant="outlined"
            value={value}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            error={invalid}
            inputProps={inputProps}
        />
    );
};

