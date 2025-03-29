import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid #E3E3E3;
    width: 26rem;
    height: 30rem;
    border-radius: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 22rem;
    gap: 1.5rem;
`

export const InputGroup = styled.div`
    width: 22rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`

export const InputTitle = styled.label`
    margin-left: 1.5rem;
    font-size: 0.9rem;
    font-weight: 500;
`

export const LoginInput = styled.input`
    width: 100%;
    height: 2.5rem;
    margin-left: 1.4rem;
    padding: 0.3rem;
    border: 2px solid #E3E3E3;
    border-radius: 1rem;
    font-size: 1rem;
    outline: none;

    &:focus {
        outline: none;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.6rem;
    width: 24.3rem;
`

export const LoginButton = styled.button`
    width: 100%;
    height: 2.9rem;
    color: white;
    margin-left: 1.5rem;
    background-color: #3674B5;
    border: none;
    padding: 0.5rem;
    border-radius: 1rem;
    font-size: 1rem;
    outline: none;
`

export const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.8rem;
`

export const LinkText = styled.p`
    font-size: 0.9rem;
    
    span {
        color: #3674B5;
        font-weight: bold;
        cursor: pointer;
    }
`