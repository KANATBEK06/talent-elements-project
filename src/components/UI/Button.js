import React from 'react'
import styled from 'styled-components'
import ChangeButton from '../../assets/icon/it.kg (lms)/vuesax/linear/edit.svg'
import DeleteButton from '../../assets/icon/it.kg (lms)/vuesax/linear/trash.svg'

const Button = ({ children, variant, onClick }) => {
  return (
    <div>
      <StyledButton variant={variant} onClick={onClick}>
        {variant === 'Change-Button' ? (
          <DeleteIcon src={ChangeButton} alt='error-DeleteButton.svg' />
        ) : (
          ''
        )}
        {variant === 'Delete-Button' ? (
          <ChangeIcon src={DeleteButton} alt='error-ChangeButton.svg' />
        ) : (
          ''
        )}
        {children}
      </StyledButton>
    </div>
  )
}

export default Button

const getStyleButton = (props) => {
  return props.variant === 'sing in'
    ? 'width:340px; background-color:#134764; height:40px;'
    : 'width:120px; background-color:#134764; height:38px;'
}
const getBlockButton = (props) => {
  return props.variant === 'ActionBlock-Button'
    ? 'width:120px; background-color:#dc3545; height:38px;'
    : getStyleButton
}
const getUnlockButton = (props) => {
  return props.variant === 'ActionUnlock-Button'
    ? 'width:120px; background-color:#134764; height:38px;'
    : getBlockButton
}
const getGroupButton = (props) => {
  return props.variant === 'group'
    ? 'width:340px; background-color:#134764; height:38px;'
    : getUnlockButton
}
const getDoctrineButton = (props) => {
  return props.variant === 'Doctrine'
    ? 'width:350px; background-color:#134764; height:40px;'
    : getGroupButton
}
const getAddButton = (props) => {
  return props.variant === 'Add-Button'
    ? 'width:38px; height:38px; background-color:#134764;'
    : getDoctrineButton
}
const getDeleteButton = (props) => {
  return props.variant === 'Delete-Button'
    ? 'width:20px; height:23px; background-color:#E0E0E0'
    : getAddButton
}
const getChangeButton = (props) => {
  return props.variant === 'Change-Button'
    ? 'width:20px; height:21px; background-color:#E0E0E0'
    : getDeleteButton
}
const getRequestRefusalButton = (props) => {
  return props.variant === 'RequestRefusal-Buttons'
    ? 'width:120px; height:38px; background-color:#dc3545;'
    : getChangeButton
}
const getRequestAllowButton = (props) => {
  return props.variant === 'RequestAllow-Buttons'
    ? 'width:120px; height:38px; background-color:#dc3545;'
    : getRequestRefusalButton
}
const getStyleMediaButton = (props) => {
  return props.variant === 'sing in'
    ? 'width:296px; background-color:#134764; height:40px;'
    : 'width:120px; background-color:#134764; height:38px;'
}
const getPaymentMediaButton = (props) => {
  return props.variant === 'payment'
    ? 'width:91px; background-color:#134764; height:30px;'
    : getStyleMediaButton
}
const getActionMediaButton = (props) => {
  return props.variant === 'Action-Button'
    ? 'width:99px; height:30px; background-color:#134764;'
    : getPaymentMediaButton
}
const getActionBlockMediaButton = (props) => {
  return props.variant === 'ActionBlock-Button'
    ? 'width:99px; height:30px; background-color:#dc3545;'
    : getActionMediaButton
}
const getGroupMediaButton = (props) => {
  return props.variant === 'group'
    ? 'width:296px; background-color:#134764; height:38px;'
    : getActionBlockMediaButton
}
const getDoctrineMediaButton = (props) => {
  return props.variant === 'Doctrine'
    ? 'width:350px; background-color:#134764; height:38px;'
    : getGroupMediaButton
}
const getGroupSearchMediaButton = (props) => {
  return props.variant === 'Add-Button'
    ? 'width:40px; height:40px; background-color:#134764;'
    : getDoctrineMediaButton
}
const getAddMediaButton = (props) => {
  return props.variant === 'add'
    ? 'width:30px; height:30px; background-color:#134764;'
    : getGroupSearchMediaButton
}
const getRequestRefusalMediaButton = (props) => {
  return props.variant === 'RequestRefusal-Buttons'
    ? 'width:144px; height:38px; background-color:#dc3545;'
    : getAddMediaButton
}
const getRequestAllowMediaButton = (props) => {
  return props.variant === 'RequestAllow-Buttons'
    ? 'width:144px; height:38px; background-color:#134764;'
    : getRequestRefusalMediaButton
}

const StyledButton = styled.button`
  ${getRequestAllowButton}
  @media screen and (max-width:390px) {
    ${getRequestAllowMediaButton}
  }
  font-family: 'Zen Kaku Gothic New';
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  border: none;
  border-radius: 6px;
  padding: 0;
  color: white;
  cursor: pointer;
`
const DeleteIcon = styled.img`
  width: 19px;
  height: 22px;
`
const ChangeIcon = styled.img`
  width: 19px;
  height: 20px;
`
