import React, { forwardRef } from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/icon/search.svg'

const Input = forwardRef(function Input(props, ref) {
  return (
    <div>
      <StyledDiv variant={props.variant}>
        {props.variant === 'search' ? (
          <StyledImg src={searchIcon} alt='search error img' />
        ) : (
          ''
        )}
        <StyledInput
          ref={ref}
          variant={props.variant}
          {...props.input}
          placeholder={props.placeholder}
        />
      </StyledDiv>
    </div>
  )
})

export default Input

const getBorderAddSearch = (props) => {
  return props.variant === 'add search'
    ? 'border:1px solid #878787;border-radius:8px;width:370px;height:38px;'
    : ''
}
const getBorderSearch = (props) => {
  return props.variant === 'search'
    ? 'border:1px solid #878787;border-radius:8px;width:370px;height:38px;font-family:"Roboto"; font-style: normal; font-weight: 400; font-size: 16px; line-height: 24px;'
    : getBorderAddSearch
}
const getInputBorderAddSearch = (props) => {
  return props.variant === 'add search'
    ? 'font-family:"Roboto"; font-style: normal; font-weight: 400; font-size: 16px; line-height: 24px;'
    : 'border-bottom:1px solid #878787;width: 340px;  font-family: "Zen Kaku Gothic New";font-style: normal;font-weight: 400;font-size: 14px;line-height: 20px;'
}
const getInputBorderSearch = (props) => {
  return props.variant === 'search' ? '' : getInputBorderAddSearch
}
const getMediaInput = (props) => {
  return props.variant === 'search'
    ? 'width:270px; height:35px;font-family:"Roboto"; font-style: normal; font-weight: 400; font-size: 16px; line-height: 24px;'
    : 'width:296px;height:35px;'
}
const getMediaAddSearch = (props) => {
  return props.variant === 'add search'
    ? 'border:1px solid #878787;border-radius:8px;width:300px;height:38px;'
    : 'font-family: "Zen Kaku Gothic New";font-style: normal;font-weight: 400;font-size: 14px;line-height: 20px;'
}
const getMediaSearch = (props) => {
  return props.variant === 'add search'
    ? 'border:1px solid #878787;border-radius:8px;width:350px;height:38px;font-family:"Roboto"; font-style: normal; font-weight: 400; font-size: 16px; line-height: 24px;'
    : getMediaAddSearch
}
const StyledDiv = styled.div`
  @media screen and (min-width: 100px) and (max-width: 390px) {
    ${getMediaSearch}
  }
  ${getBorderSearch}
  margin-top:10px;
`
const StyledImg = styled.img`
  margin-left: 5px;
  margin-top: 5px;
`
const StyledInput = styled.input`
  @media screen and (min-width: 100px) and (max-width: 390px) {
    ${getMediaInput}
  }
  outline: initial;
  height: 35px;
  border: none;
  ${getInputBorderSearch};
  padding-left: 5px;
  margin-left: 5px;
`
