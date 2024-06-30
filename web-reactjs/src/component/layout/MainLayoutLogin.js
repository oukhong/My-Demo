import { Outlet } from "react-router-dom";

const MainLayoutLogin = () => {
    return (
        <div>
            <div style={{ height: 60, background: "pink" }}>
                <h1>Login Container</h1>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayoutLogin;