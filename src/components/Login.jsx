import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    
    

    const { signInUser, googleLogin} = useContext(AuthContext)

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
       googleLogin()
       .then(result=>{
        toast.success('Login with Google Success')
        console.log(result.user)
        navigate('/')
       })
       .catch(err =>{
        console.log(err)
       })
    };

    const handleGithubLogin = () => {
        // Your GitHub login logic here
        console.log("GitHub Login");
    };
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                toast.success('Login Success')
                e.target.reset();
                navigate('/')
                console.log(result.user);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full space-y-6">
                {/* Login Icons */}
                <div className="flex justify-center space-x-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="text-3xl hover:scale-110 transition"
                    >
                        <FcGoogle />
                    </button>
                    <button
                        onClick={handleGithubLogin}
                        className="text-3xl text-gray-800 hover:scale-110 transition"
                    >
                        <FaGithub />
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center space-x-2">
                    <div className="h-px bg-gray-300 flex-1" />
                    <span className="text-sm text-gray-500">or login with email</span>
                    <div className="h-px bg-gray-300 flex-1" />
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div>
                        <a className="text-sm text-gray-600" href="#">Forget Password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Sign up */}
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="text-blue-500 cursor-pointer hover:underline"
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
