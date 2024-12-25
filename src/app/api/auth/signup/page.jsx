'use client'
const page = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userData = {
            name: form.name.value,
            email: form.email.value,
            image: form.image.value,
            password: form.password.value,
            type: form.role.value
        }
        const res = fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'content-type': 'application/json'
            }
        })

        console.log(res)
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Sign Up
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Image
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="your image"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="role"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="" disabled>Select a role</option>
                        <option value="Admin">Admin</option>
                        <option value="Moderator">Moderator</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default page;