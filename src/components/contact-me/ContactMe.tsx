import { Formik, Field, FormikValues, FormikHelpers } from "formik";
import React from "react";
import styled, { css } from "styled-components";
import { Title } from "../../shared";
import SVG_TYPE from "../../shared/SVG/svgType";
import { SocialItem } from "./components";
import * as Yup from "yup";

const ContactMeWrapper = styled.section`
  min-height: 100vh;
  width: 80%;
  max-width: 1200px;
  padding-top: 80px;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 765px) {
    gap: 50px;
  }
`;

const SocialWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
  color: papayawhip;
  gap: 20px;
  margin-top: 50px;
  max-width: 90%;
`;

const handleSubmit = (values: any) => {
  console.log(values);
};
const initalValues = {
  email: "",
  subject: "",
  message: "",
};

const InputText = styled.input`
  border: solid 1px papayawhip;
  background-color: #fff;
  margin: 16px 0;
  padding: 11px 22px;
  border-radius: 4px;
  position: relative;
`;

const TextArea = styled.textarea`
  border: solid 1px papayawhip;
  background-color: #fff;
  margin: 16px 0;
  min-height: 40px;
  padding: 11px 22px;
  border-radius: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background-color: #6633995c;
  padding: 11px 22px;
  border-radius: 16px;
`;

const Subtitle = styled.p`
  color: papayawhip;
  font-size: 36px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin: 50px 0 25px;
`;

const ErrorField = styled.p`
  color: tomato;
  position: absolute;
  left: 0;
  bottom: -10px;
`;

const SubmitButton = styled.button<{
  active?: boolean;
}>`
  background-color: #b392ac;
  margin: 16px 0;
  padding: 11px 22px;
  border-radius: 16px;
  color: papayawhip;
  cursor: not-allowed;
  opacity: 0.4;
  text-align: center;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      color: black;
      cursor: pointer;
    `}
`;

const FiledWrapper = styled.div`
  position: relative;
`;

const validationSchema = Yup.object().shape({
  subject: Yup.string()
    .min(2, "Your subject is too short")
    .required("Please enter subject"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  message: Yup.string()
    .min(2, "Your message is too short")
    .required("Please enter message"),
});
const ContactMe = () => {
  return (
    <ContactMeWrapper id="contactMe">
      <Title label="Contact Me" />
      <SocialWrapper>
        <SocialItem
          type={SVG_TYPE.GITHUB}
          label="Hagni1"
          url="https://github.com/Hagni1"
        />
        <SocialItem
          type={SVG_TYPE.LINKEDIN}
          label="Kamil Suchocki"
          url="https://www.linkedin.com/in/kamil-suchocki-772862240/"
        />
        <SocialItem
          type={SVG_TYPE.MAIL}
          label="kamilsuchocki123@gmail.com"
          url="mailto: kamilsuchocki123@gmail.com"
        />
      </SocialWrapper>
      <Subtitle>You can reach out to me below.</Subtitle>
      <Formik
        initialValues={initalValues}
        onSubmit={handleSubmit}
        isInitialValid={false}
        validationSchema={validationSchema}
        validateOnChange
      >
        {({
          errors,
          setFieldValue,
          handleSubmit,
          isValid,
          handleBlur,
        }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <FiledWrapper>
                <Field
                  errors={errors}
                  name="email"
                  component={InputText}
                  placeholder="Your email"
                  onChange={(e: any) => setFieldValue("email", e.target.value)}
                  onBlur={handleBlur}
                />
                <ErrorField>{errors.email}</ErrorField>
              </FiledWrapper>

              <FiledWrapper>
                <Field
                  errors={errors}
                  name="subject"
                  component={InputText}
                  placeholder="Subject"
                  onBlur={(e:any)=>handleBlur(e)}
                  onChange={(e: any) =>
                    setFieldValue("subject", e.target.value)
                  }
                />
                <ErrorField>{errors.subject}</ErrorField>
              </FiledWrapper>

              <FiledWrapper>
                <Field
                  errors={errors}
                  name="message"
                  component={TextArea}
                  onBlur={handleBlur}
                  placeholder="Your message"
                  onChange={(e: any) =>
                    setFieldValue("message", e.target.value)
                  }
                />
                <ErrorField>{errors.message}</ErrorField>
              </FiledWrapper>

              <SubmitButton type="submit" active={isValid}>
                Send
              </SubmitButton>
            </Form>
          </>
        )}
      </Formik>
    </ContactMeWrapper>
  );
};
export default ContactMe;
