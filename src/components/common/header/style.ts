import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 3.5rem;
    background-color: #FFFFFF;
    position: absolute;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
`

export const HeaderWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    cursor: pointer;
    margin-left: 20px;
`

export const MenuWrap = styled.nav`
    display: flex;
    margin-left: auto;
`

export const Menu = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-right: 20px;
`

export const MenuItem = styled.li`
    font-size: 15px;
    cursor: pointer;
    padding: 10px 15px;
    font-weight: 300;
    border-radius: 10px;

    &:hover {
        background-color: #E0E0E0;
        transition: 0.4s;
    }
`