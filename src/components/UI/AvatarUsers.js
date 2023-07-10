import React, { useRef } from 'react'
import { Avatar } from '@mui/material'
import styled from 'styled-components'
import ChangeIconUser from '../../assets/icon/Frame 32.svg'
import IconUser from '../../assets/icon/Frame 42.svg'
import DeleteButton from '../../assets/icon/it.kg (lms)/vuesax/linear/trash.svg'
import Button from './Button'

const AvatarUsers = ({
  variant,
  user,
  setFileImg,
  fileImg,
  Mousestate,
  setMousestate,
  Meaning,
  setMeaning,
  iconImg,
}) => {
  const filePicker = useRef(null)
  const handlerFiles = (event) => {
    const file = event.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setFileImg(url)
      setMeaning(true)
    }
  }
  const handlerFilePicker = () => {
    filePicker.current.click()
  }
  const handlerMouseEnter = () => {
    setMousestate(true)
  }
  const handlerMouseLeave = () => {
    setMousestate(false)
  }
  const handlerdAvatarDelete = () => {
    setFileImg('')
    setMeaning(false)
    handlerMouseLeave()
    filePicker.current.value = ''
  }
  return (
    <div>
      <StyledContainer>
        <Container>
          {variant === 'User_admin' && (
            <StyledDiv>
              <StyledAvatar onMouseLeave={handlerMouseLeave}>
                <div>
                  <Avatar src={fileImg} sx={{ width: 180, height: 180 }} />
                </div>
                {Meaning && Mousestate && (
                  <Buttons onClick={handlerdAvatarDelete}>
                    <img src={DeleteButton} alt='error deleteButton' />
                  </Buttons>
                )}
                {Meaning && <Div onMouseEnter={handlerMouseEnter} />}
                {!Meaning && (
                  <StyledActionImg
                    onClick={handlerFilePicker}
                    onMouseLeave={handlerMouseLeave}
                    src={IconUser}
                    alt='error'
                  />
                )}
                {Meaning && (
                  <StyledActionImg
                    onClick={handlerFilePicker}
                    onMouseLeave={handlerMouseLeave}
                    src={ChangeIconUser}
                    alt='error'
                  />
                )}
                <StyledInput
                  onChange={handlerFiles}
                  ref={filePicker}
                  onMouseLeave={handlerMouseLeave}
                  type='file'
                  accept='Emage/*,.png,.jpg,.gif,.web,.svg'
                />
              </StyledAvatar>
            </StyledDiv>
          )}
          {variant === 'Visitor' && (
            <StyledDiv>
              <StyledAvatar>
                <div>
                  <Avatar src={iconImg} sx={{ width: 180, height: 180 }} />
                </div>
              </StyledAvatar>
            </StyledDiv>
          )}
          {variant === 'manager_group' && (
            <StyledDiv>
              <StyledAvatar>
                <div>
                  <Avatar src={iconImg} sx={{ width: 180, height: 180 }} />
                </div>
              </StyledAvatar>
            </StyledDiv>
          )}
          <StyledDivContainerEmail>
            {user.map((element) => (
              <StyledDivEmail key={element.id}>
                <StyledName>{element.name}</StyledName>
                <StyledEmail>{element.email}</StyledEmail>
              </StyledDivEmail>
            ))}
            {variant === 'manager_group' && (
              <Button variant='ActionBlock-Button'>ne oplatil</Button>
            )}
          </StyledDivContainerEmail>
        </Container>
      </StyledContainer>
    </div>
  )
}

export default AvatarUsers
const StyledContainer = styled.div`
  @media screen and (max-width: 391px) {
    width: 390px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
const Container = styled.div`
  width: 465.02px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 27px;
  @media screen and (max-width: 391px) {
    width: 329px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid black;
  }
`
const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledAvatar = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 391px) {
    width: 150px;
    height: 150px;
    flex-shrink: 0;
  }
`
const StyledActionImg = styled.img`
  margin-left: -30px;
  margin-top: 100px;
  z-index: 1;
  cursor: pointer;
`
const StyledInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`
const StyledName = styled.p`
  color: #000;
  font-family: Zen Kaku Gothic New;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-top: 43px;
`
const StyledEmail = styled.p`
  color: #000;
  font-family: Zen Kaku Gothic New;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-top: 18px;
`
const StyledDivContainerEmail = styled.div`
  width: 200px;
  text-align: center;
  margin-bottom: 36px;
`
const StyledDivEmail = styled.div`
  margin-bottom: 32px;
`
const Buttons = styled.button`
  position: fixed;
  background-color: transparent;
  border: none;
  z-index: 20;
`
const Div = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1;
`
