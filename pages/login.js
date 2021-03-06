import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Button onClick={signIn} variant='outlined'>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
display:grid;
place-items: center;
align-items: center;
height: 100vh;
background-color: whitesmoke;
`;
const LoginContainer = styled.div`
display:flex;
flex-direction: column;
`;