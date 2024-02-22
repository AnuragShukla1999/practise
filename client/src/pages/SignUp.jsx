import { useState } from "react";
import { Link } from "react-router-dom";

import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';


export default function SignUp() {
    // const [formData, setFormData] = useState({});
    // const [errorMessage, setErrorMessage] = useState(null);
    // const [loading, setLoading] = useState(false);

    // const navigate = useNavigate();
    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!formData.username || !formData.email || !formData.password) {
    //         return setErrorMessage('Please fill out all field.');
    //     }

    //     try {
    //         setLoading(true);
    //         setErrorMessage(null);
    //         const res = await fetch('/api/auth/signup', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         const data = await res.json();
    //         if (data.success === false) {
    //             return setErrorMessage(data.message);
    //         }
    //         setLoading(false);
    //         if (res.ok) {
    //             navigate('/sign-in');
    //         }

    //     } catch (error) {
    //         setErrorMessage(error.message);
    //         setLoading(false);
    //     }


    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                {/* Left */}

                <div className="flex-1">
                    <Link to='/' className='font-bold dark:text-white text-4xl'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                            Anurag's
                        </span>
                        Blog
                    </Link>
                    <p className='text-sm mt-5'>
                        This is a demo project. You can sign up with your email and password
                        or with Google.
                    </p>
                </div>


                {/* Right */}

                <div className="flex-1">
                    <form className="felx flex-col gap-4">
                        <div>
                            <Label value='Your username' />
                            <TextInput
                                type="text"
                                placeholder="username"
                                id="username"
                            />
                        </div>

                        <div>
                            <Label value="Your email" />
                            <TextInput
                                type="email"
                                placeholder="name@gmail.com"
                                id="email"
                            />
                        </div>

                        <div>
                            <Label value='Your password' />
                            <TextInput
                                type='password'
                                placeholder='Password'
                                id='password'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}