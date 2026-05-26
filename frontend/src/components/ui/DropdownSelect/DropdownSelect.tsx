import { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ArrowIcon from './images/arrow.svg';

import type { SelectProps } from './Dropdown.props';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { SvgIconProps } from '@mui/material/SvgIcon';

const SelectArrowIcon = (props: SvgIconProps) => (
  <ArrowIcon
    {...props}
    width={14}
    height={8}
    style={{
      ...props.style,
      display: 'block',
      flexShrink: 0,
    }}
  />
);

const menuItemSx = {
  color: '#8B8B8B',
  fontSize: 16,
  '&:hover': {
    backgroundColor: '#F4F4F4',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#F4F4F4',
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    color: '#282828',
    '&:hover': {
      backgroundColor: '#F4F4F4',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#F4F4F4',
    },
  },
};

export const DropdownSelect = (props: SelectProps) => {
  const { titleLabel, options, value: controlledValue, onChange } = props;

  const [internalValue, setInternalValue] = useState<string | number>('');

  const value = controlledValue ?? internalValue;

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    const nextValue = event.target.value as string | number;
    setInternalValue(nextValue);

    if (onChange) {
      onChange(nextValue);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Box
        component='label'
        htmlFor='dropdown-select'
        sx={{
          fontWeight: 600,
          fontSize: 20,
          color: '#282828',
        }}
      >
        {titleLabel}
      </Box>

      <FormControl
        size='small'
        sx={{
          minWidth: 200,
          '& .MuiOutlinedInput-root': {
            color: '#282828',
          },
        }}
      >
        <Select
          fullWidth
          id='dropdown-select'
          value={value}
          onChange={handleChange}
          IconComponent={SelectArrowIcon}
          MenuProps={{
            disableScrollLock: true,
            slotProps: {
              paper: {
                sx: {
                  '& .MuiMenuItem-root': menuItemSx,
                },
              },
            },
          }}
          sx={{
            color: '#282828',
            '& .MuiSelect-select': {
              padding: '8px 40px 8px 16px',
              color: '#282828',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D9D9D9',
              borderRadius: '6px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D9D9D9',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D9D9D9',
              borderWidth: '1px',
            },
            '&.Mui-focused': {
              outline: 'none',
              boxShadow: 'none',
            },
            '& .MuiSelect-icon': {
              right: 12,
              top: '50%',
              width: 14,
              height: 8,
              marginTop: 0,
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            },
            '& .MuiSelect-icon.MuiSelect-iconOpen': {
              transform: 'translateY(-50%) rotate(180deg)',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              disableRipple
              sx={menuItemSx}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownSelect;
