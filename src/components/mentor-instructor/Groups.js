import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../UI/card/Card'
import Header from '../UI/Header'
import SiderBar from '../UI/side-bar/SiderBar'

const Group = (props) => {
  const [open, setOpen] = useState(false)
  const OpenHandelr = () => {
    setOpen(true)
  }

  const CloseHandler = () => {
    setOpen(false)
  }

  return (
    <Container>
      <div>
        {props.notificationHeader.map((el) => (
          <div key={el.notificationCount}>
            <Header data={el} onburger={OpenHandelr} />
          </div>
        ))}
      </div>
      {open && (
        <SiderBar
          variant='mentor'
          data={props.siderBar}
          onClick5={CloseHandler}
        />
      )}
      {window.innerWidth > 390 && (
        <SiderBar variant='mentor' data={props.siderBar} />
      )}
      <div>
        <StyledTitle>
          <StyledH5Title>Мои группы</StyledH5Title>
        </StyledTitle>
      </div>
      <StyledDivCard>
        <Card variant='mentor_instructor' user={props.data} />
      </StyledDivCard>
    </Container>
  )
}

export default Group

const Container = styled.div`
  width: 100%;
  @media screen and (max-width: 391px) {
    width: 100%;
  }
`
const StyledTitle = styled.div`
  width: 145px;
  height: 36px;
  color: rgba(19, 71, 100, 1);
  margin: 0;
  padding: 0;
  margin-top: 35px;
  margin-left: 35px;
  @media (max-width: 391px) {
    margin-left: 20px;
    color: var(--light-blue, #134764);
    font-family: Zen Kaku Gothic New;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
const StyledH5Title = styled.h5`
  font-family: Zen Kaku Gothic New;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const StyledDivCard = styled.div`
  margin-left: 35px;
  margin-top: 19px;
  @media screen and (max-width: 391px) {
    margin-bottom: 100px;
    margin-left: 0px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
  }
`
