import React from 'react'
import styled from 'styled-components'
import AurtorozationLogoAdptiv from '../../../assets/icon/autorizationIcons/autorizationBgAdaptiv.svg'
import ABgE from '../../../assets/icon/autorizationIcons/autorizationBgELems.svg'
import ItKgLogo from '../../../assets/icon/autorizationIcons/itKgLogo.svg'
import AutorizationLogo from '../../../assets/icon/autorizationIcons/nubelson-fernandes-UcYBL5V0xWQ-unsplash 1.svg'
import Button from '../Button'
import Input from '../Input'

const Autorization = ({ variant }) => {
  return (
    <RegisterBg>
      <RegisterBg2>
        <AutorizationFormBlock>
          <AutorizationImgBlock>
            <ItKgLogos>
              <ItKgImg src={ItKgLogo} alt='none' />
              <ItKgText>IT.KG</ItKgText>
            </ItKgLogos>
            <AutorizationImg src={AutorizationLogo} alt='none' />
          </AutorizationImgBlock>
          <div>
            {variant === 'Login' ? (
              <LoginText>
                <AutorizationText>Войти</AutorizationText>
              </LoginText>
            ) : (
              <AutorizationText>Регистрация</AutorizationText>
            )}
            {variant === 'Login' ? (
              <AutorizationForm>
                <Input placeholder='Введите логин' />
                <Input placeholder='Введите пароль' />
                <LoginButton>
                  <Button variant='sing in'>Создать аккаунт</Button>
                </LoginButton>
                <ForLoginText>
                  У вас нету аккаунта?{' '}
                  <ForLoginText2 onClick=''>Зарегистроваться</ForLoginText2>
                </ForLoginText>
              </AutorizationForm>
            ) : (
              <AutorizationForm>
                <Input placeholder='Введите логин' />
                <Input placeholder='Введите фамилю' />
                <Input placeholder='Введите email' />
                <Input placeholder='Введите пароль' />
                <Input placeholder='Повторите пароль' />
                <Button variant='sing in'>Создать аккаунт</Button>
                <ForLoginText>
                  У вас уже есть аккаунт?{' '}
                  <ForLoginText2 onClick=''>Войти</ForLoginText2>
                </ForLoginText>
              </AutorizationForm>
            )}
          </div>
        </AutorizationFormBlock>
      </RegisterBg2>
    </RegisterBg>
  )
}

export default Autorization
const RegisterBg = styled.div`
  margin: 0;
  position: fixed;
  background: linear-gradient(
    63.43deg,
    #134764 0%,
    #74c2d7 49.81%,
    #02334e 99.63%
  );
  background-size: 100%;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  * {
    transition: 1s;
  }
`
const RegisterBg2 = styled.div`
  margin: 0;
  position: fixed;
  background-image: url(${ABgE});
  background-size: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 415px) {
    background-image: url(${AurtorozationLogoAdptiv});
  }
  @media screen and (max-width: 415px) {
    background-image: url(${AurtorozationLogoAdptiv});
  }
  @media screen and (max-width: 415px) {
    background-image: url(${AurtorozationLogoAdptiv});
  }
`
const AutorizationFormBlock = styled.div`
  display: flex;
  border-radius: 20px;
  background: white;
  border-radius: 20px;
  height: 732px;
  gap: 115px;
  margin-top: 70px;
  padding-right: 105px;
  background-repeat: no-repeat;
  @media screen and (max-width: 415px) {
    width: 344px;
    height: 581px;
    border-radius: 10px;
    padding: 0px 24px 0px 24px;
    justify-content: center;
    margin-top: 120px;
  }
  @media screen and (max-width: 391px) {
    width: 325px;
    height: 581px;
    border-radius: 10px;
    padding: 0px 24px 0px 24px;
    justify-content: center;
  }
  @media screen and (max-width: 376px) {
    width: 290px;
    height: 581px;
    border-radius: 10px;
    padding: 0px 24px 0px 24px;
    justify-content: center;
    margin-top: 65px;
  }
`
const AutorizationImgBlock = styled.div`
  @media screen and (max-width: 415px) {
    display: none;
  }
`
const AutorizationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-top: 30px;
  }
  button {
    margin-top: 60px;
    margin-bottom: 34px;
  }
  @media screen and (max-width: 415px) {
    button {
      margin-top: 24px;
      margin-bottom: 14px;
    }
    input {
      margin-top: 25px;
    }
  }
`
const AutorizationImg = styled.img`
  width: 618px;
  height: 733px;
  border-radius: 20px 0px 0px 20px;
`
const AutorizationText = styled.h4`
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 0em;
  color: #134764;
  margin-top: 90px;
  margin-left: 6px;
  @media screen and (max-width: 415px) {
    margin-top: 60px;
  }
`
const ForLoginText = styled.span`
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #373737;
`
const ItKgLogos = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 489px;
  margin-left: 145px;
`
const ItKgImg = styled.img`
  width: 79px;
  height: 64px;
`
const ItKgText = styled.span`
  font-family: 'Kaushan Script', cursive;
  font-size: 60px;
  font-weight: 400;
  line-height: 87px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 28px;
  color: white;
`
const ForLoginText2 = styled.span`
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #0b3852;
`
const LoginText = styled.div`
  margin-top: 160px;
  margin-bottom: 30px;
  @media screen and (max-width: 415px) {
    margin-top: 96px;
    margin-bottom: 36px;
  }
  @media screen and (max-width: 391px) {
    margin-top: 96px;
    margin-bottom: 36px;
  }
  @media screen and (max-width: 376px) {
    margin-top: 96px;
    margin-bottom: 36px;
  }
`
const LoginButton = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  @media screen and (max-width: 415px) {
    margin-bottom: 33px;
  }
`
