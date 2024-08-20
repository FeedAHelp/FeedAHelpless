import React, {useState} from "react";

type FormData ={
    username: string;
    email: string;
    password: string;
};

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
    });


const [errors, setErrors] = useState<Partial<FormData>>({});
const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.username) {
        newErrors.username = "Username is required";
    }

    if (!formData.email) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email ="Email is invalid";
    }

    if (!formData.password) {
        newErrors.password = "Password is required";
    } else if (formData.password.length < 12) {
        newErrors.password = "Password must be at least 12 characters long";
    } 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if  (!response.ok) {
                throw new Error("Failed to register");
            }

            console.log("Registration successful");
        } catch (error) {
            console.error("Error during registration", error);
        }
    }
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <div>
                <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                >
                    {passwordVisible ? "Hide" : "Show"}
                </button>
            </div>
            {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
    </form>
);
};

export default RegistrationForm;