import ButtonComponent from "../../components/auth/ButtonComponent";

export const metadata = {
    title: "Login"
}

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <a href="/reset-password">Forgot Password?</a>
            <p>Don't have an account? <a href="/signup">Register Here</a></p>
            <ButtonComponent text="Login"/>
        </div>
    );
}

export default Login;