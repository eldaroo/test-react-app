import '../style-sheets/Login.css';
import { useNavigate } from "react-router-dom"
import LoginHeader from '../components/Login/LoginHeader';

function Reset() {
    let navigate = useNavigate();
    return(
        <div className='login-box'>
            <table>
                <tbody>
                    <tr className='tr'><td>
                        <LoginHeader></LoginHeader>
                    </td></tr>
                    <tr><td>
                        <div className='text'>
                            Having trouble loggin in?
                            Enter the email address asociated with your account, then click "Continue"
                            We will email you a link to reset your password
                        </div>
                        <h3>Email</h3>
                        <input placeholder="user@email.com"></input>
                        <button className='login-button'>Continue</button>
                        <button className='login-button' onClick={() => {
                                navigate("/login");
                        }}>Cancel</button>
                    </td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default Reset;
