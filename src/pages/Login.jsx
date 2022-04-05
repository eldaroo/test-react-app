import '../style-sheets/Login.css';
import { useNavigate } from "react-router-dom"
import LoginHeader from '../components/Login/LoginHeader';

function Login(props) {
    let navigate = useNavigate();
    return(
        <div className='login-box'>
            <table>
                <tbody>
                    <tr className='tr'>
                        <td>
                            <LoginHeader></LoginHeader>
                        </td>
                    </tr>
                    <tr><td>
                        <h3>Account</h3>
                        <input placeholder="user@email.com"></input>
                        <h3>password</h3>
                        <input placeholder="***********"></input>
                        <button>Login</button>
                    </td></tr>
                    <tr><td>
                        <button className='login-button'
                            onClick={() => {
                                navigate("/reset");
                        }}>Forgot your password?</button>
                    </td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default Login;
