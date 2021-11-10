import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{ display: "grid", playsItems: "center", height: "100vh", alignItems: 'center' }}>
            <div>
                <Circle color="#3CBC2B" size={60} />

            </div>
        </center>

    );
}
export default Loading;