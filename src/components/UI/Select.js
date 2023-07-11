import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

function BasikSelect({
  label,
  value,
  variant,
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
}) {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <Box>
      <FormControl variant={variant === '' ? '' : variant}>
        <Label variant={variant}>{label}</Label>
        <StyledSelect onChange={handleChange} value={value}>
          {options?.map((item) => {
            return (
              <MenuItem value={getOptionValue(item)} key={item.id}>
                {getOptionLabel(item)}
              </MenuItem>
            )
          })}
        </StyledSelect>
      </FormControl>
    </Box>
  )
}
export default BasikSelect

const Label = styled(InputLabel)`
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: ${({ variant }) =>
    variant === 'standard' ? 'var(--black, #373737)' : '#878787'};
  font-size: ${({ variant }) => (variant === 'standard' ? '16px' : '14xp')};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ variant }) =>
    variant === 'standard' ? ' normal' : '24px'};
  font-family: ${({ variant }) =>
    variant === 'standard' ? 'Zen Kaku Gothic New' : ' Poppins'};
  padding-bottom: -10px;
  top: 0px;
  bottom: ${(props) => (props.variant === 'standard' ? '25px' : '-4px')};
`
const StyledSelect = styled(Select)`
  margin-top: 40px;
  width: ${({ variant }) => (variant !== 'standard' ? '259px' : '340px')};
  height: ${({ variant }) => (variant !== 'standard' ? '38px ' : '35px')};
  color: ${({ variant }) =>
    variant === 'standard' ? 'var(--black, #373737)' : '#878787'};
  font-size: ${({ variant }) => (variant === 'standard' ? '16px' : '14xp')};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ variant }) =>
    variant === 'standard' ? ' normal' : '24px'};
  font-family: ${({ variant }) =>
    variant === 'standard' ? 'Zen Kaku Gothic New' : ' Poppins'};
`
