import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import noUser from '../assets/noUser.jpg'

const UserProfile = () => {
    const {user , loading} = useContext(AuthContext);
    if(loading){
        return 
    }
    return (
        <div className="max-w-md bg-white rounded-lg shadow p-6 text-center mx-auto my-10" >
            {user.photoURL ? <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            /> : <img
                src={noUser}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />}
            {
                user.displayName ? <h2 className="text-xl font-semibold mb-2">{user.displayName}</h2> :
                <h2 className="text-xl font-semibold mb-2">No User Name</h2>
            }
            <p className="text-gray-500 text-sm mb-2">{user.email}</p>
        </div>
    );
};

export default UserProfile;