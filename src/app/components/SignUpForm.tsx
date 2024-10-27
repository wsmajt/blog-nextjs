"use client"
import React, { useState } from 'react';
import Link from "next/link";

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Signing up with:', { name, email, password });
    };

    return (
        <main className="flex flex-col min-w-full min-h-screen items-center pt-10 lg:px-60 gap-10 bg-base-100">
            <div className="text-center py-10 flex flex-row justify-center">
                <div className="bg-base-200 w-full max-w-md p-10 rounded-lg shadow-xl space-y-6">
                    <h1 className="text-4xl font-bold text-primary text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-base-content">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full bg-base-100"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-base-content">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full bg-base-100"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-base-content">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full bg-base-100"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full text-lg">
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center">
                        Already have an account? <Link href="./login" className="text-primary">Login</Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SignUpForm;
