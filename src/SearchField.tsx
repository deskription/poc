'use client';

import React from 'react';
import { type UseAutocompleteProps } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PaperComponent = Box;

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

function PopperComponent(props: PopperComponentProps) {
  const { anchorEl, disablePortal, open, ...other } = props;
  return <Box {...other} />;
}

export interface SearchFieldProps<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> {
  // TODO: type should be Value?!
  onSelect: (value: any) => void;
  onEscape?: () => void;
}

export default function SearchField<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({ onSelect, onEscape, ...otherProps }: SearchFieldProps<Value, Multiple, DisableClearable, FreeSolo>) {
  return (
    <Autocomplete
      // Show always all the options
      open

      // Automatically focus the search input field
      autoFocus

      // Options are always visible, no need to open it on focus
      openOnFocus={false}

      // Not neccessary to use a portal, or?
      disablePortal

      // Not neccessary since we will navigate to another page when an item is selected
      disableCloseOnSelect

      // TODO: translation
      noOptionsText="Nothing found"

      // Call onSelect when the user selects an option
      onChange={(event, value, reason, details) => {
        console.log('SearchField onChange', event, value, reason, details);
        otherProps.onChange?.(event, value, reason, details);
        onSelect(value);
      }}

      // Call onClose when the user press escape.
      // Ignore all other events.
      onClose={(event, reason) => {
        console.log('SearchField onClose', event, reason);
        otherProps.onClose?.(event,reason);
        if (reason === 'escape') {
          onEscape?.();
        }
      }}

      renderInput={(params) => (
        <TextField {...params} />
      )}
      PaperComponent={PaperComponent}
      PopperComponent={PopperComponent}

      style={{ display: 'flex' }}
      sx={{ display: 'flex' }}

      componentsProps={{
        popper: {
          style: {
          //   flexGrow: 1,
          //   overflowY: 'auto', 
            position: 'unset',
          },
        },
      }}

      ListboxProps={{ sx: { maxHeight: 'unset' } }}

      {...otherProps}
    />
  )
}
