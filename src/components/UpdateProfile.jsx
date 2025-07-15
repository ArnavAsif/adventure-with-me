import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";


const UpdateProfile = () => {
    const { user } = useContext(AuthContext)

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                setLoading(false);
                setMessage("✅ Profile updated successfully!");
            })
            .catch((error) => {
                setLoading(false);
                setMessage(`❌ Error: ${error.message}`);
            });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-10 rounded shadow m-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>

            {message && (
                <div className="mb-4 text-center text-sm text-green-600">{message}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="Photo URL"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    {loading ? "Updating..." : "Update Profile"}
                </button>
            </form>
        </div>
    );

};

export default UpdateProfile;