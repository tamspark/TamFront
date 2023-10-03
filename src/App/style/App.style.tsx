import { styled } from "styled-components";
import { ChangeEvent, RefObject } from "react";

export const AppBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
interface ButtonProps {
  variant?: "primary" | "secondary" | "third";
  h?: string;
  w?: string;
  borderRadius?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  marginTop?: string;
  onClick?: () => void;
  disabled?: boolean;
}
export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${(props: any) => props.h || "100%"};
  width: ${(props: any) => props.w || "100%"};
  color: ${(props: any) => (props.variant === "primary" ? "white" : "#3e4684")};
  background-color: ${(props: any) =>
    props.variant === "primary" ? "#3e4684" : "snow"};
  border: ${(props: any) =>
    props.variant === "primary" ? "none" : "2px solid #3e4684"};
  border-radius: ${(props: any) => props.borderRadius};
  text-decoration: none;
  font-family: ${(props: any) => props.fontFamily || "Poppins"};
  font-size: ${(props: any) => props.fontSize};
  font-weight: ${(props: any) => props.fontWeight};
  margin-top: ${(props: any) => props.marginTop};
  margin: 25px 0px 10px 0;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:hover {
    outline: 0;
    color: ${(props: any) =>
      props.variant === "primary"
        ? "#3e4684"
        : props.variant === "third"
        ? "white"
        : "2px solid #3e4684"};
    background: ${(props: any) =>
      props.variant === "primary"
        ? "white"
        : props.variant === "third"
        ? "black"
        : "white"};
    border: ${(props: any) =>
      props.variant === "primary"
        ? "2px solid #3e4684"
        : props.variant === "third"
        ? "2px solid black"
        : "1px solid #3e4684"};
    border-radius: ${(props: any) => props.borderRadius};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

interface InputProps {
  label?: string;
  id?: string;
  type?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: () => void;
  placeholder?: string;
  value?: string;
  inputRef?: RefObject<HTMLInputElement>;
  pattern?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  fontFamily?: string;
  fontWeight?: string;
  bordertoprightradius?: string;
  borderbottomrightradius?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  paddingleft?: string;
  backgroundcolor?: string;
  border?: string;
  borderradius?: string;
  padding?: string;
  margin?: string;
}
export const Input = styled.input<InputProps>`
  font-family: ${(props: any) => props.fontFamily || "Poppins"};
  font-weight: ${(props: any) => props.fontWeight || 700};
  border-top-right-radius: ${(props: any) =>
    props.bordertoprightradius || "20px"};
  border-bottom-right-radius: ${(props: any) =>
    props.borderbottomrightradius || "20px"};
  outline: none;
  box-shadow: 0 0 2em #e6e9f9;
  box-sizing: border-box;
  border: ${(props: any) => props.border};
  width: ${(props: any) => props.width || "100%"};
  height: ${(props: any) => props.height || "100%"};
  background: ${(props: any) => props.backgroundcolor || "#FFFFFF"};
  border-left: "2px solid red";
  border-radius: ${(props: any) => props.borderradius || "20px"};
  font-style: "normal";
  font-size: ${(props: any) => props.fontSize || "12px"};
  padding-left: ${(props: any) => props.paddingleft};
  padding: ${(props: any) => props.padding};
  margin-top: 12px;
  display: block;
  margin: ${(props: any) => props.margin};
`;

interface FormProps {
  height?: string;
  width?: string;
}
export const StyledForm = styled.form<FormProps>`
  height: ${(props: any) => props.height || "100%"};
  width: ${(props: any) => props.width || "100%"};
  /* max-width: 500px; */
  background-color: #f1f7fe;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.01);
  box-shadow: 0 0 2em #e6e9f9;
  padding: 0px 30px 20px 30px;
  font-family: "Poppins";
  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
  border-radius: 30px;
`;
