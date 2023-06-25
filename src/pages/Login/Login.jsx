import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Login = () => {
    // const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error.message))
    }

    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        console.log(userCaptchaValue);
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <SectionTitle heading={"Login Now"} subHeading={"please"}></SectionTitle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src="https://img.freepik.com/free-vector/gdpr-concept-illustration_114360-1028.jpg?w=740&t=st=1687698914~exp=1687699514~hmac=7d7ba5138c5b1b0d2f78db3af51f9be066c354aa26382bda002aae8f88ce9993" alt="" />
                    </div>
                    <form onSubmit={handleLogin} className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                {/* TODO: make disabled button for captcha */}
                                <input disabled={disabled} type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </div>
                        <p className='text-center pb-3'><small>New Here? <Link to="/signup" className='text-blue-600'>Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Login;