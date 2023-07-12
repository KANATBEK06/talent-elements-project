import styled from 'styled-components'
import IconCardGroup from '../../../assets/icon/Vector (1).svg'
import ImgCardGroup from '../../../assets/icon/Слой_x0020_1.svg'
import ProgressCard from './ProgressCard'

const Card = (props) => {
  return (
    <div>
      <Container>
        {props.user.map((element) => (
          <div key={element.id}>
            <Styled variant={props.variant}>
              <div onClick={props.onClickHandler} role='button' tabIndex='0'>
                <Img src={element.img} alt='error img' />
              </div>
              <div>
                <Title>{element.title} </Title>
              </div>
              <div>
                {props.variant === 'Meneger_group' && (
                  <Containerr>
                    <div
                      onClick={props.onClickHandler}
                      role='button'
                      tabIndex='0'
                    >
                      <Icon src={IconCardGroup} alt='error' />
                      <Students>{element.students}</Students>
                    </div>
                  </Containerr>
                )}
              </div>
              {props.variant === 'mentor_instructor' && (
                <Mentor>
                  <Div1
                    onClick={props.onClickHandler}
                    role='button'
                    tabIndex='0'
                  >
                    <ImgCard src={ImgCardGroup} alt='error' />
                    <Lesson>{element.lesson}</Lesson>
                  </Div1>
                  <Div2
                    onClick={props.onClickHandler}
                    role='button'
                    tabIndex='0'
                  >
                    <ImgGroup src={IconCardGroup} alt='error' />
                    <Studentss>{element.students}</Studentss>
                  </Div2>
                </Mentor>
              )}
              {props.variant === 'User_doctrine' && (
                <div>
                  <ProgressCard percent={element.percent} />
                </div>
              )}
            </Styled>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Card

const CardHeidhts = (props) => {
  return props.variant === 'mentor_instructor' ? '293px' : '253px'
}
const MenegerHeights = (props) => {
  return props.variant === 'Meneger_group' ? '276px' : CardHeidhts
}
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
const Lesson = styled.div`
  width: 75px;
  height: 17px;
  font-family: Zen Kaku Gothic New;
  font-weight: 500px;
  font-size: 12px;
  line-height: 17.38px;
  text-align: center;
  color: rgba(55, 55, 55, 1);
`
const Styled = styled.div`
  width: 350px;
  height: ${MenegerHeights};
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
const Img = styled.img`
  width: 350px;
  height: 183px;
  border-radius: 8px;
`
const Title = styled.p`
  width: 165px;
  height: 23px;
  line-height: 23.17px;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Zen Kaku Gothic New';
  margin: 0;
  padding: 0;
  margin-top: -10px;
  text-align: center;
  /* padding-top: 5px; */
`
const Containerr = styled.div`
  text-align: center;
  padding-bottom: 20px;
  display: flex;
`
const Icon = styled.img`
  width: 28.24px;
  height: 18px;
  padding-top: 10px;
  cursor: pointer;
`
const Students = styled.div`
  width: 75px;
  height: 17px;
  font-size: Zen Kaku Gothic New;
  font-weight: 500px;
  line-height: 17.38px;
  color: rgba(55, 55, 55, 1);

  @media screen and (max-width: 380px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: block;
    display: flex;
    justify-content: center;
  }
`
const Mentor = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  margin-bottom: 19px;
`
const Studentss = styled.div`
  width: 75px;
  height: 17px;
  font-family: Zen Kaku Gothic New;
  font-weight: 500px;
  font-size: 12px;
  line-height: 17.38px;
  text-align: center;
  color: rgba(55, 55, 55, 1);
`
const ImgGroup = styled.img`
  width: 28.24px;
  height: 18px;
  cursor: pointer;
`
const ImgCard = styled.img`
  width: 28.24px;
  height: 18px;
  cursor: pointer;
`
const Div1 = styled.div`
  text-align: center;
`
const Div2 = styled.div`
  text-align: center;
`
