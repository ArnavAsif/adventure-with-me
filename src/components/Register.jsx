import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../utilities/firebase.init";
import { toast } from "react-toastify";


const Register = () => {
    const { signUpUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                toast.success('Login with Google Success')
                console.log(result.user)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    };

    const handleGithubRegister = () => {
        githubLogin()
            .then(result => {
                toast.success('Login with GitHub Success')
                console.log(result.user)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        // Your register logic here
        console.log(email, password);
        signUpUser(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => {
                        // profile update
                    })
                    .catch(err =>
                        console.log(err)
                    )
                console.log(result.user);
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full space-y-6">
                {/* Social Icons */}
                <div className="flex justify-center space-x-6">
                    <button
                        onClick={handleGoogleRegister}
                        className="text-3xl hover:scale-110 transition"
                    >
                        <FcGoogle />
                    </button>
                    <button
                        onClick={handleGithubRegister}
                        className="text-3xl text-gray-800 hover:scale-110 transition"
                    >
                        <FaGithub />
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center space-x-2">
                    <div className="h-px bg-gray-300 flex-1" />
                    <span className="text-sm text-gray-500">or sign up with email</span>
                    <div className="h-px bg-gray-300 flex-1" />
                </div>

                {/* Register Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="text"
                        name="photoUrl"
                        placeholder="PhotoURL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
                    >
                        Register
                    </button>
                </form>

                {/* Back to login */}
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-purple-500 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
