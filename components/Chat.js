import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

function Chat({ id, users }) {

    const router = useRouter();
    const enterChat = () => {
        router.push(`/chat/${id}`)
    }

    const [user] = useAuthState(auth);
    const recipientEmail = getRecipientEmail(users, user);

    return (
        <Container onClick={enterChat} >
            <UserAvatar />
            <p>{recipientEmail}</p>

        </Container>
    )
}

export default Chat;

const Container = styled.div`
display:flex;
align-items:center;
cursor:pointer;
padding:15px;
word-break:break-word;
`;

const UserAvatar = styled(Avatar)`
margin:5px;
margin-right:15px;
`;
