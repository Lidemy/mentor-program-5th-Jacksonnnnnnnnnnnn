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
    const alertMsg = '??????????????????'
    if (!values.email) {
      errors.email = alertMsg
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = '????????????????????????';
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
            <Topic>???????????????????????????</Topic>
            <NormalText>
              <p>???????????????2020/12/10 ~ 2020/12/11</p>
              <p>???????????????????????????????????????????????????1???</p>
              <TextRed>
                *??????
              </TextRed>
            </NormalText>
          </Header>
          <Content>
            <RequiredContentQ>
              ??????
            </RequiredContentQ>
            <ContentA>
              <input 
                name="nickname"
                onChange={handleChange}
                value={values.nickname || ''}
                placeholder="????????????"
              />
              {errors.email && (
                    <RequiredContent>{errors.nickname}</RequiredContent>
                  )}
            </ContentA>
            <RequiredContentQ>
              ????????????
            </RequiredContentQ>
            <ContentA>
              <input 
                name="email"
                onChange={handleChange}
                value={values.email || ''}
                placeholder="??????????????????"
              />
              {errors.email && (
                    <RequiredContent>{errors.email}</RequiredContent>
                  )}
            </ContentA>
            <RequiredContentQ>
              ????????????
            </RequiredContentQ>
            <ContentA>
              <input 
                name="phoneNo"
                onChange={handleChange}
                value={values.phoneNo || ''}
                placeholder="??????????????????"
              />
              {errors.phoneNo && (
                    <RequiredContent>{errors.phoneNo}</RequiredContent>
                  )}
            </ContentA>
            <RequiredContentQ>
              ????????????
            </RequiredContentQ>
            <Options>
              <input 
                type="radio"
                name="type"
                onChange={handleRadioChange}
                value="1"
              />
              <label>??????????????????????????????</label>
            </Options>
            <Options>
              <input 
                type="radio"
                onChange={handleRadioChange}
                name="type"
                value="2"
              />
              <label>?????????????????????????????????</label>
              {errors.type && (
                    <RequiredRadio>{errors.type}</RequiredRadio>
                  )}
            </Options>
            <RequiredContentQ>
              ??????????????????????????? ?
            </RequiredContentQ>
            <ContentA>
              <input 
                name="activity"
                value={values.activity || ''}
                onChange={handleChange}
                placeholder="????????????"  
              />
              {errors.activity && (
                    <RequiredContent>{errors.activity}</RequiredContent>
                  )}
            </ContentA>
            <ContentQ>
              ??????
            </ContentQ>
            <NormalText>
              ??????????????????????????????
            </NormalText>
            <ContentA>
              <input 
                name="suggestion"
                onChange={handleChange}
                value={values.suggestion || ''}
                placeholder="????????????"
              />
            </ContentA>
            <Bottom>
              <YellowButton type="submit">??????</YellowButton>
              <NormalText><p>???????????????????????????????????????</p></NormalText>
            </Bottom>
          </Content>
        </Form>
      </Wrapper>
      <Footer>?? 2020 ?? Copyright. All rights Reserved.</Footer>

      <Modal show={show} onHide={handleCloseDialog}>
        <Modal.Header closeButton>
          <Modal.Title>????????????</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FinalContent>??????: {values.nickname}</FinalContent>
          <FinalContent>????????????: {values.email}</FinalContent>
          <FinalContent>????????????: {values.phoneNo}</FinalContent>
          <FinalContent>????????????: {type === '1' ? '??????????????????????????????' : '?????????????????????????????????'}</FinalContent>
          <FinalContent>????????????: {values.activity}</FinalContent>
          {
            values.suggestion ? `??????: ${values.suggestion}` : '?????????'
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={reload}>
            ????????????
          </Button>
          <Button variant="primary" onClick={handleCloseDialog}>
            ??????
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default LazyForm;