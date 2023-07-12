import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Student = ({ variant, array }) => {
  return (
    <div>
      <StyledList>
        <StyledTable>
          <thead>
            <StyledHead>
              <StyledNamber>№</StyledNamber>
              {variant === 'Students' && (
                <StyledFullName>Фамиля имя</StyledFullName>
              )}
              {variant === 'Instructors' && (
                <StyledFullName>Фамиля имя</StyledFullName>
              )}
              {variant === 'Staff_admin' && (
                <StyledFullName>Фамиля имя</StyledFullName>
              )}
              {variant === 'User_Group' && (
                <StyledFullName variant={variant}>Фамиля имя</StyledFullName>
              )}
              {variant === 'Seo_admin_managers' && (
                <StyledFullName variant={variant}>Фамиля имя</StyledFullName>
              )}
              {variant === 'Seo_admin_group' && (
                <StyledFullName variant={variant}>Фамиля имя</StyledFullName>
              )}
              {variant === 'Instructors' && (
                <StyledDoctrine>Уроки</StyledDoctrine>
              )}
              {variant === 'Staff_admin' && (
                <StyledDoctrine variant={variant}>Уроки</StyledDoctrine>
              )}
              {variant === 'User_Group' && (
                <StyledScore variant={variant}>Балл</StyledScore>
              )}
              {variant === 'Students' && <StyledGrup>Группа</StyledGrup>}
              {variant === 'Instructors' && (
                <StyledDateofregistration>
                  Дата регистрация
                </StyledDateofregistration>
              )}
              {variant === 'Students' && (
                <StyledDateofregistration>
                  Дата регистрация
                </StyledDateofregistration>
              )}
              {variant === 'Staff_admin' && (
                <StyledDateofregistration>
                  Дата регистрация
                </StyledDateofregistration>
              )}
              {variant === 'Seo_admin_managers' && (
                <StyledDateofregistration>
                  Дата регистрация
                </StyledDateofregistration>
              )}
              {variant === 'Seo_admin_group' && (
                <StyledDateofregistration variant={variant}>
                  Дата регистрация
                </StyledDateofregistration>
              )}
              {variant === 'Students' && (
                <StyledPayments>Оплата</StyledPayments>
              )}
              {variant === 'Instructors' && (
                <StyledAction>Действия</StyledAction>
              )}
              {variant === 'Students' && <StyledAction>Действия</StyledAction>}
            </StyledHead>
          </thead>
          <tbody>
            {array.map((element) => (
              <StyledBody key={element.id}>
                <StyledId>{element.raiting}</StyledId>
                {variant === 'Students' && (
                  <StyledName>
                    <StyledImg src={element.img} alt='error img' />
                    {element.name}
                  </StyledName>
                )}
                {variant === 'Instructors' && (
                  <StyledName>
                    <StyledImg src={element.img} alt='error img' />
                    {element.name}
                  </StyledName>
                )}
                {variant === 'Staff_admin' && (
                  <StyledName>
                    <StyledImg src={element.img} alt='error img' />
                    {element.name}
                  </StyledName>
                )}
                {variant === 'User_Group' && (
                  <StyledName variant={variant}>
                    <StyledImg src={element.img} alt='error img' />
                    {element.name}
                  </StyledName>
                )}
                {variant === 'Seo_admin_managers' && (
                  <StyledName variant={variant}>
                    <StyledImg src={element.img} alt='error img' />
                    {element.name}
                  </StyledName>
                )}
                {variant === 'Seo_admin_group' && (
                  <StyledName variant={variant}>
                    <StyledImg src={element.img} alt='error img' />
                    {element.name}
                  </StyledName>
                )}
                {variant === 'Instructors' && (
                  <StyledDoctrines>
                    {element.group}/
                    <StyledDoctrinesP>{element.doctrine}</StyledDoctrinesP>
                  </StyledDoctrines>
                )}
                {variant === 'Staff_admin' && (
                  <StyledDoctrines variant={variant}>
                    <StyledStaffGroup>{element.group}/</StyledStaffGroup>
                    <StyledStaffdoctrine>
                      {element.doctrine}
                    </StyledStaffdoctrine>
                  </StyledDoctrines>
                )}
                {variant === 'Students' && (
                  <StyledDoctrines>{element.group}</StyledDoctrines>
                )}
                {variant === 'User_Group' && (
                  <StyledScores variant={variant}>{element.score}</StyledScores>
                )}
                {variant === 'Students' && (
                  <StyledDate>{element.dateOfRegistration}</StyledDate>
                )}
                {variant === 'Instructors' && (
                  <StyledDate>{element.dateOfRegistration}</StyledDate>
                )}
                {variant === 'Staff_admin' && (
                  <StyledDate>{element.dateOfRegistration}</StyledDate>
                )}
                {variant === 'Seo_admin_managers' && (
                  <StyledDate>{element.dateOfRegistration}</StyledDate>
                )}
                {variant === 'Seo_admin_group' && (
                  <StyledDate variant={variant}>
                    {element.dateOfRegistration}
                  </StyledDate>
                )}
                {variant === 'Students' && (
                  <td>
                    <Button variant='Action-Button'>{element.payment}</Button>
                  </td>
                )}
                {variant === 'Instructors' && (
                  <StyledActions>
                    <Button variant='ActionBlock-Button'>
                      {element.action}
                    </Button>
                  </StyledActions>
                )}
                {variant === 'Students' && (
                  <StyledActions>
                    <Button variant='ActionBlock-Button'>
                      {element.action}
                    </Button>
                  </StyledActions>
                )}
              </StyledBody>
            ))}
          </tbody>
        </StyledTable>
      </StyledList>
    </div>
  )
}

export default Student

const SeoAdminManagers = (props) => {
  return props.variant === 'Seo_admin_managers' ? 'margin-right: 500px ;' : ''
}
const SeoAdminGroup = (props) => {
  return props.variant === 'Seo_admin_group'
    ? '467px;margin-left:200px;'
    : '167px'
}
const StaffAdmin = (props) => {
  return props.variant === 'Staff_admin' ? '545px' : '145px'
}
const UserGroupScore = (props) => {
  return props.variant === 'User_Group' ? '500px' : '72px'
}
const UserScoreFullName = (props) => {
  return props.variant === 'User_Group' ? 'margin-right:250px;' : ''
}
const StyledList = styled.div`
  @media screen and (max-width: 390px) {
    max-width: 100%;
    overflow-x: scroll;
  }
`
const StyledTable = styled.table`
  text-align: start;
  width: 1110px;
`
const StyledHead = styled.tr`
  width: 1110px;
  height: 29px;
  font-family: 'Zen Kaku Gothic New';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #134764;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const StyledNamber = styled.th`
  width: 20px;
  height: 29px;
  padding: 0;
`
const StyledFullName = styled.th`
  text-align: start;
  width: 190px;
  height: 29px;
  padding: 0;
  ${SeoAdminManagers}
  ${UserScoreFullName}
`
const StyledDoctrine = styled.th`
  text-align: start;
  width: ${StaffAdmin};
  height: 29px;
  padding: 0;
`
const StyledScore = styled.th`
  text-align: start;
  width: ${UserGroupScore};
  height: 29px;
  padding: 0;
`
const StyledGrup = styled.th`
  text-align: start;
  width: 143px;
  height: 29px;
  padding: 0;
`
const StyledDateofregistration = styled.th`
  text-align: start;
  width: ${SeoAdminGroup};
  height: 29px;
  padding: 0;
`
const StyledPayments = styled.th`
  text-align: start;
  width: 120px;
  height: 29px;
  padding: 0;
`
const StyledAction = styled.th`
  text-align: start;
  width: 120px;
  height: 29px;
  padding: 0;
`

const StyledBody = styled.tr`
  width: 1110px;
  height: 40px;
  font-family: 'Zen Kaku Gothic New';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #373737;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0;
`
const StyledId = styled.td`
  text-align: start;
  width: 20px;
  height: 23px;
`
const StyledName = styled.td`
  width: 190px;
  height: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${SeoAdminManagers}
  ${UserScoreFullName}
`
const StyledDoctrines = styled.td`
  text-align: start;
  width: ${StaffAdmin};
  height: 23px;
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: Zen Kaku Gothic New;
  font-weight: 500;
  color: rgba(55, 55, 55, 1);
`
const StyledStaffGroup = styled.p`
  font-size: 16px;
  font-family: Zen Kaku Gothic New;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: rgba(55, 55, 55, 1);
`
const StyledStaffdoctrine = styled.p`
  font-size: 16px;
  font-family: Zen Kaku Gothic New;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: rgba(135, 135, 135, 1);
`
const StyledDoctrinesP = styled.p`
  font-size: 14px;
  font-family: Zen Kaku Gothic New;
  font-weight: 400;
  color: rgba(135, 135, 135, 1);
`
const StyledScores = styled.td`
  text-align: start;
  width: ${UserGroupScore};
  height: 29px;
  padding: 0;
  font-size: 16px;
  font-family: Zen Kaku Gothic New;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
`
const StyledDate = styled.td`
  width: ${SeoAdminGroup};
  height: 23px;
`
const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
const StyledActions = styled.th`
  margin: 0;
`
