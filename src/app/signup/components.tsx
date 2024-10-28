"use client"

import { signupAction } from "./action";
import { useActionState } from "react";
import Link from "next/link";

const initialState = {
    username: "",
    email: "",
    message: ""
};


const SignUpForm = () => {
    const [state, action] = useActionState(signupAction, initialState);

    return (
        <main className="flex flex-col min-w-full min-h-screen items-center pt-10 lg:px-60 gap-10 bg-base-100">
            <div className="text-center py-10 flex flex-row justify-center">
                <div className="bg-base-200 w-full max-w-md p-10 rounded-lg shadow-xl space-y-6">
                    <h1 className="text-4xl font-bold text-primary text-center">Sign Up</h1>
                    <form action={action} className="space-y-4">
                        <div className="form-control">
                            <p>{state.message}</p>
                            <label className="label">
                                <span className="label-text text-lg text-base-content">Name</span>
                            </label>
                            <input
                                id="form-signup.username"
                                name="username"
                                minLength={3}
                                maxLength={31}
                                defaultValue={state.username}
                                className="input input-bordered w-full bg-base-100"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-base-content">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full bg-base-100"
                                defaultValue={state.username}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full text-lg">
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center">
                        Already have an account? <Link href="./login" className="text-primary">Log in</Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SignUpForm;
