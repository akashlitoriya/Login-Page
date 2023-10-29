import React from 'react'
import styled from 'styled-components'
import illusSrc from '../assets/heroImg.png'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
const Login = () => {
    const [isVisible, setIsvisible] = React.useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
    `;

    const HeroContainer = styled.div`
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        max-width: 1200px;
        width: 100%;
        height: 100%;
        @media(max-width: 768px){
            flex-direction: column;
        }
    `;

    const ImageSection = styled.img`
        width: 30%; 
        height: 100%;
        object-fit: cover;

    `;

    const FormSection = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0,0,0,0.16);
        padding: 2rem 0 2rem 0;

        @media(max-width: 768px){
            width: 100%;
            padding: 0;
        }
    `;

    const Heading = styled.h1`
        font-size: 3rem;
        font-weight: 700;
        color: #04072F;

        @media(max-width: 768px){
            font-size: 2rem;
        }
    `;
    const FormContainer = styled.form`
        width: 80%;
        mx-auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        
        @media(max-width: 768px){
            width: 100%;
            
        }
        
    `;
    const InputContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        position: relative;
    `;
    const Label = styled.label`
        font-size: 1rem;
        color: #04072F;
        font-weight: 500;
    `;
    const Input = styled.input`
        width: 100%;
        border-radius: 8px;
        border: 1px solid #04072F66;
        padding: 1rem;
        font-size: 1rem;
        
    `;

    const Icon = styled.div`
        position: absolute;
        top: 50%;
        right: 0;
        font-size: 1.5rem;
        cursor: pointer;
    `;  
    const Button = styled.button`
        width: 280px;
        padding: 1rem;
        border-radius: 8px;
        border: none;
        background: #1575A7;
        color: #fff;
        font-size: 1rem;
        transition: all 0.2s ease-in-out;
        &:hover{
            background: #0E4B86;
        }

        @media(max-width: 768px){
            width: 100%;
        }
    `;
    const CheckBoxContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: flex-start; 
        align-items: center;
    `;
    const CheckBox = styled.input`

    `;
    const CheckBoxLabel = styled.label`
        font-size: 1rem;
        color: #737B86;
        font-weight: 400;
    `;

    const HighLightedText = styled.span`
        color: #F78719;
    `;
    
  return (
    <div>
        <Container>
            <HeroContainer>
                <ImageSection src={illusSrc} alt='A illustration for login page' />
                    
                <FormSection>
                    <Heading>Login</Heading>
                    <FormContainer onSubmit={()=>console.log("Form Submitted")}>
                        <InputContainer>
                            <Label htmlFor="login_id">Login ID</Label>
                            <Input {...register("login_id", {required:true})} id='login_id' placeholder='Enter login id'></Input>
                        </InputContainer>
                        <InputContainer>
                            <Label htmlFor='password'>Password</Label>
                            <Input {...register("password", {required: true})} type={isVisible?"text": "password"} id='password' placeholder='Enter password'></Input>
                            <Icon onClick={() => setIsvisible(!isVisible)}>
                                {
                                    isVisible?<AiFillEyeInvisible />:<AiFillEye />
                                }
                            
                            </Icon>
                        </InputContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/>
                            <CheckBoxLabel>Remember Me</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type='checkbox'/>
                            <CheckBoxLabel>Agree to <HighLightedText>Terms & Conditions</HighLightedText></CheckBoxLabel>
                        </CheckBoxContainer>
                        <Button type='submit'>Login</Button>
                    </FormContainer>
                </FormSection>
            </HeroContainer>
        </Container>    
    </div>
  )
}

export default Login
