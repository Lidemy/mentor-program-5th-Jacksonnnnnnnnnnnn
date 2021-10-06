/* eslint-disable */
import React, { useState, useEffect } from 'react';
import useForm from './useForm';
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

const Wrapper = styled.div`
  margin: 10% auto;
  background: white;
  max-width: 645px;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  font-family: MicrosoftJhengHei;
  padding-bottom: 10px;
`
const Nav = styled.nav`
  border: solid 6px #fad312;
  background-color: #fad312;
`
const Form = styled.form`
  margin-left: 40px;
`
const Header = styled.div`
`
const Topic = styled.div`
  margin: 54px 0px 35px;
  font-weight: bold;
  font-size: 36px;
`
const NormalText= styled.div`
  font-size: 16px;

  div {
    margin-top: 12px;
  }

  p + p {
    margin-top: -7px;
  }

  p: last-child {
    margin: 21px 0px 35px 0px;
  }
`
const TextRed = styled.div`
  color: red;
  margin-top: 22px;
`
const Content = styled.div``
const ContentQ = styled.div`
  font-size: 20px;
  margin-top: 50px;

  :first-of-type {
    margin-top: 55px;
  }
`
const RequiredContentQ = styled(ContentQ)`
  &:after{
    content: ' *';
    color: red;
  }
`
const ContentA = styled.div`
  margin-top: 20px;
  font-size: 16px;

  input {
    border: solid 1px #d0d0d0;
    width: 35%;
  }
`
const Hidden = styled.div`
  visibility:hidden;
  margin-top: -30px;
  color: red;
`
const Options = styled.div`
  margin-top: 24px;
`
const Bottom = styled.div`
  margin-top: 55px;
`
const YellowButton = styled.button`
  font-size: 15px;
  border-radius: 3px;
  background-color: #fad312;
  height: 40px;
  width: 92px;
  border:#fad312;
  cursor: pointer;
`
const Footer = styled.div`
  background: black;
  color: #999999;
  font-size: 13px;
  text-align: center;
  padding: 24px 0px;
`
const RequiredContent = styled.label`
  color: red;
  margin-left: 5px;
`
const RequiredRadio = styled.p`
  color: red;
  margin-top: 5px;
`

const FinalContent = styled.p`
`

function LazyForm () {
  const {
    values,
    handleChange,
    errors,
    handleSubmit,
  } = useForm(passValidation, validate);
  const [type, setType] = useState({})

  // alert dialog
  const [show, setShow] = useState(false);
  const handleCloseDialog = () => setShow(false);
  const handleShowDialog = () => setShow(true);

  function passValidation() {
    handleShowDialog()
  }

  function handleRadioChange(e) {
    const {name, value} = e.target

    setType({[name]: value})
  }

  function validate(values) {
    let errors = {}
    const alertMsg = '這是必填欄位'
    if (!values.email) {
      errors.email = alertMsg
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = '請輸入正確的格式';
    }
    if (!values.nickname) errors.nickname = alertMsg
    if (!values.phoneNo) errors.phoneNo = alertMsg
    if (Object.keys(type).length < 1) errors.type = alertMsg
    if (!values.activity) errors.activity = alertMsg
    
    return errors
  }
  
  function reload() {
    window.location.reload();
  }

  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  
  return (
    <div>
      <Wrapper>
        <Nav/>
        <Form 
          onSubmit={handleSubmit}
        >
          <Header>
            <Topic>新拖延運動報名表單</Topic>
            <NormalText>
              <p>活動日期：2020/12/10 ~ 2020/12/11</p>
              <p>活動地點：台北市大安區新生南路二段1號</p>
              <TextRed>
                *必填
              </TextRed>
            </NormalText>
          </Header>
          <Content>
            <RequiredContentQ>
              暱稱
            </RequiredContentQ>
            <ContentA>
              <input 
                name="nickname"
                onChange={handleChange}
                value={values.nickname || ''}
                placeholder="您的回答"
              />
              {errors.email && (
                    <RequiredContent>{errors.nickname}</RequiredContent>
                  )}
            </ContentA>
            <RequiredContentQ>
              電子郵件
            </RequiredContentQ>
            <ContentA>
              <input 
                name="email"
                onChange={handleChange}
                value={values.email || ''}
                placeholder="您的電子郵件"
              />
              {errors.email && (
                    <RequiredContent>{errors.email}</RequiredContent>
                  )}
            </ContentA>
            <RequiredContentQ>
              手機號碼
            </RequiredContentQ>
            <ContentA>
              <input 
                name="phoneNo"
                onChange={handleChange}
                value={values.phoneNo || ''}
                placeholder="您的手機號碼"
              />
              {errors.phoneNo && (
                    <RequiredContent>{errors.phoneNo}</RequiredContent>
                  )}
            </ContentA>
            <RequiredContentQ>
              報名類型
            </RequiredContentQ>
            <Options>
              <input 
                type="radio"
                name="type"
                onChange={handleRadioChange}
                value="1"
              />
              <label>躺在床上用想像力實作</label>
            </Options>
            <Options>
              <input 
                type="radio"
                onChange={handleRadioChange}
                name="type"
                value="2"
              />
              <label>趴在地上滑手機找現成的</label>
              {errors.type && (
                    <RequiredRadio>{errors.type}</RequiredRadio>
                  )}
            </Options>
            <RequiredContentQ>
              怎麼知道這個活動的 ?
            </RequiredContentQ>
            <ContentA>
              <input 
                name="activity"
                value={values.activity || ''}
                onChange={handleChange}
                placeholder="您的回答"  
              />
              {errors.activity && (
                    <RequiredContent>{errors.activity}</RequiredContent>
                  )}
            </ContentA>
            <ContentQ>
              其他
            </ContentQ>
            <NormalText>
              對這個活動的一些建議
            </NormalText>
            <ContentA>
              <input 
                name="suggestion"
                onChange={handleChange}
                value={values.suggestion || ''}
                placeholder="您的回答"
              />
            </ContentA>
            <Bottom>
              <YellowButton type="submit">提交</YellowButton>
              <NormalText><p>請勿透過表單送出您的密碼。</p></NormalText>
            </Bottom>
          </Content>
        </Form>
      </Wrapper>
      <Footer>© 2020 © Copyright. All rights Reserved.</Footer>

      <Modal show={show} onHide={handleCloseDialog}>
        <Modal.Header closeButton>
          <Modal.Title>送出成功</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FinalContent>暱稱: {values.nickname}</FinalContent>
          <FinalContent>電子郵件: {values.email}</FinalContent>
          <FinalContent>手機號碼: {values.phoneNo}</FinalContent>
          <FinalContent>報名類型: {type === '1' ? '躺在床上用想像力實作' : '趴在地上滑手機找現成的'}</FinalContent>
          <FinalContent>怎麼知道: {values.activity}</FinalContent>
          {
            values.suggestion ? `其他: ${values.suggestion}` : '無建議'
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={reload}>
            再填一份
          </Button>
          <Button variant="primary" onClick={handleCloseDialog}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default LazyForm;