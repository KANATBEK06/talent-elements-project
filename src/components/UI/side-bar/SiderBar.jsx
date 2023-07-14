import React from 'react'
import styled from 'styled-components'

import SideIcon from '../../../assets/icon/sideicon/_2412063098704.svg'
import SideIcon4 from '../../../assets/icon/sideicon/Group 427320482 (2).svg'
import group1 from '../../../assets/icon/sideicon/group1.png'
import UserIcon from '../../../assets/icon/sideicon/user.svg'
import SideIcon2 from '../../../assets/icon/sideicon/Слой_x0020_1 (7).svg'
import SideIcon3 from '../../../assets/icon/sideicon/Слой_x0020_1 (8).svg'
import SideIcon5 from '../../../assets/icon/sideicon/Слой_x0020_1 (9).svg'
import SideIcon1 from '../../../assets/icon/sideicon/Слой_x0020_1.svg'

const SiderBar = ({
  data,
  variant,
  onClickImg1,
  onClickImg2,
  onClickImg3,
  onClickImg4,
  onClick5,
}) => {
  return (
    <SideBarBlock onClick={onClick5}>
      <Con>
        <DivImg>
          <img src={group1} alt='' />
        </DivImg>
        {data.map((element) => {
          return (
            <div key={element.id}>
              {variant === 'user' && (
                <div>
                  <div>
                    <DivContainer onClick={onClickImg1}>
                      <div>
                        <Img src={SideIcon} alt='error' />
                      </div>
                      <div>
                        <Title>{element.title}</Title>
                      </div>
                    </DivContainer>
                    <DivContainer onClick={onClickImg1}>
                      <div>
                        <Img src={SideIcon1} alt='error' />
                      </div>
                      <div>
                        <Title>{element.group}</Title>
                      </div>
                    </DivContainer>
                  </div>
                  <DivContainer1 onClick={onClickImg2}>
                    <div>
                      <Img src={UserIcon} alt='error' />
                    </div>
                    <div>
                      <Title>{element.profil}</Title>
                    </div>
                  </DivContainer1>
                </div>
              )}

              {variant === 'manager' && (
                <div>
                  <DivContainer onClick={onClickImg3}>
                    <div>
                      <Img onClick={onClickImg3} src={SideIcon1} alt='error' />
                    </div>
                    <div>
                      <Title>{element.group}</Title>
                    </div>
                  </DivContainer>
                  <DivContainer onClick={onClickImg4}>
                    <div>
                      <Img src={SideIcon2} alt='error' />
                    </div>
                    <div>
                      <Title>{element.student}</Title>
                    </div>
                  </DivContainer>
                  <DivContainer onClick={onClick5}>
                    <div>
                      <Img src={SideIcon3} alt='error' />
                    </div>
                    <div>
                      <Title>{element.instructors}</Title>
                    </div>
                  </DivContainer>
                  <DivContainer onClick={onClickImg4}>
                    <div>
                      <Img src={SideIcon4} alt='error' />
                    </div>
                    <div>
                      <Title>{element.stafadmin}</Title>
                    </div>
                  </DivContainer>
                  <DivContainer onClick={onClickImg4}>
                    <div>
                      <Img src={SideIcon5} alt='error' />
                    </div>
                    <div>
                      <Title>{element.seoadmin}</Title>
                    </div>
                  </DivContainer>
                </div>
              )}
              {variant === 'mentor' && (
                <div>
                  <DivContainer>
                    <div>
                      <Img src={SideIcon1} alt='error' />
                    </div>
                    <div>
                      <Title>{element.group}</Title>
                    </div>
                  </DivContainer>
                </div>
              )}
              {variant === 'staf/admin' && (
                <div>
                  <DivContainer onClick={onClickImg4}>
                    <div>
                      <Img src={SideIcon1} alt='error' />
                    </div>
                    <div>
                      <Title>{element.group}</Title>
                    </div>
                  </DivContainer>
                  <DivContainer onClick={onClickImg4}>
                    <div>
                      <Img src={SideIcon3} alt='error' />
                    </div>
                    <div>
                      <Title>{element.instructors}</Title>
                    </div>
                  </DivContainer>
                </div>
              )}
              {variant === 'seo/admin' && (
                <div>
                  <DivContainer onClick={onClickImg4}>
                    <div>
                      <Img src={SideIcon1} alt='error' />
                    </div>
                    <div>
                      <Title>{element.group}</Title>
                    </div>
                  </DivContainer>
                  <DivContainer onClick={onClickImg4}>
                    <div>
                      <Img src={SideIcon3} alt='error' />
                    </div>
                    <div>
                      <Title>{element.instructors}</Title>
                    </div>
                  </DivContainer>
                  <DivContainer onClick={onClickImg3}>
                    <div>
                      <img src={SideIcon3} alt='error' />
                    </div>
                    <div>
                      <Title>{element.manadger}</Title>
                    </div>
                  </DivContainer>
                </div>
              )}
            </div>
          )
        })}
      </Con>
    </SideBarBlock>
  )
}

export default SiderBar
const SideBarBlock = styled.div`
  * {
    margin: 0;
  }
  display: flex;
  justify-content: end;
  @media (max-width: 391px) {
    background-color: rgba(0, 0, 0, 0.44);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
  }
`
const Con = styled.div`
  width: 243px;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding-left: 17px;
  padding-top: 90px;
  position: fixed;
  cursor: pointer;
  @media (max-width: 391px) {
    width: 230px;
    height: 330px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    padding-left: 0px;
    padding-top: 0px;
    position: fixed;
    cursor: pointer;
  }
`
const DivContainer = styled.div`
  width: 205px;
  height: 45px;
  gap: 20px;
  align-items: center;
  display: flex;
  align-items: center;
  padding-left: 18px;
  border-radius: 8px;
  margin-top: 10px;
  :hover {
    background-color: rgba(116, 194, 215, 0.2);
    text-align: center;
  }
  @media (max-width: 391px) {
    width: 200px;
    height: 40px;
    align-items: center;
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 17px;

    border-radius: 8px;
    :hover {
      background-color: rgba(116, 194, 215, 0.2);
    }
  }
`
const DivImg = styled.div`
  display: none;
  @media (max-width: 391px) {
    width: 100%;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 15px;
  }
`
const DivContainer1 = styled.div`
  display: none;

  @media screen and (max-width: 391px) {
    width: 205px;
    height: 45px;
    gap: 20px;
    align-items: center;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding-left: 17px;
    border-radius: 8px;
    :hover {
      background-color: rgba(116, 194, 215, 0.2);
    }
  }
`
const Img = styled.img`
  width: 30px;
  height: 30.08px;
`
const Title = styled.p`
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28.96px;
  color: rgba(11, 56, 82, 1);
`
