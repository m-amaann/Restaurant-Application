import React, { useState } from "react";
import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../css/adminlogin.css';

const Login = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!email) {
            toast.error("Please enter a valid email address");
            return;
        }
        if (!password) {
            toast.error("Please enter a password");
            return;
        }

        fetch(process.env.REACT_APP_API_URL + "/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    toast.error(data.error);
                } else {
                    localStorage.setItem("jwt", data.token);
                    localStorage.setItem("user", JSON.stringify(data.admin));
                    // ({ type: "LOGIN", payload: data.admin });
                    toast.success(data.message); // Success message

                    // Use navigate to redirect to home page
                    navigate("/");
                    console.log('Redirecting...');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="wrapper bg-white">
            <div className="h2 text-center">Creativity</div>
            <div className="h4 text-muted text-center pt-2">Enter Admin Login Credentials</div>
            <form className="pt-3">
                <div className="form-group py-2">
                    <div className="input-field">
                        <span className="far fa-user p-2" />{" "}
                        <input
                            type="email"
                            placeholder="Username or Email Address"
                            required=""
                            className=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group py-1 pb-2">
                    <div className="input-field">
                        <span className="fas fa-lock p-2" />{" "}
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            required=""
                            className=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn bg-white text-muted">
                            <span className="far fa-eye-slash" />
                        </button>
                    </div>
                </div>
                <button
                    className="btn btn-block text-center my-3"
                    onClick={handleSubmit}
                >
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Login;
