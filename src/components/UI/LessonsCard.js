import React from 'react'
import styled from 'styled-components'

const LessonsCard = ({ group, onClick }) => {
  return (
    <div>
      <Container>
        {group.map((element) => (
          <StyledDiv key={element.id} onClick={onClick}>
            <StyledImg src={element.img} alt='error advance.svg' />
            <StyledTitle>{element.title}</StyledTitle>
          </StyledDiv>
        ))}
      </Container>
    </div>
  )
}

export default LessonsCard

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 1180px;

  @media screen and (max-width: 391px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    display: block;
    display: flex;
    justify-content: center;
  }
`
const StyledDiv = styled.div`
  width: 350px;
  height: 237px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`

const StyledImg = styled.img`
  width: 350px;
  height: 183px;
  border: none;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`
const StyledTitle = styled.h6`
  max-width: 100%;
  width: 100%;
  height: 29px;
  text-align: center;
  font-family: 'Zen Kaku Gothic New';
  font-weight: 700;
  font-size: 20px;
  line-height: 28.96px;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`
