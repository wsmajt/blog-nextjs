"use server";

import { createSession, generateSessionToken, setSessionTokenCookie } from "@/lib/server/sessions";
import {createUser, getUserFromUsername, verifyPasswordInput} from "@/lib/server/user";
import { redirect } from "next/navigation";
import type {User} from "@prisma/client";
import {hashPassword} from "@/lib/server/authUtils";

export async function signupAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
    const username = formData.get("username");
    const password = formData.get("password");
    if (typeof username !== "string" || typeof password !== "string") {
        return {
            message: "Invalid or missing fields."
        };
    }
    if (username === "" || password === "") {
        return {
            username,
            message: "Please enter your username, email, and password."
        };
    }

    if (username.length < 3 || username.length >= 32 || !/[A-Za-z0-9]/.test(username)) {
        return {
            username,
            message: "Please enter a valid username."
        };
    }

    const existingUser = await getUserFromUsername(username);
    if (existingUser !== null) {
        return {
            username,
            message: "Username is already used."
        };
    }

    if (!verifyPasswordInput(password)) {
        return {
            username,
            message: "Please enter a valid password."
        };
    }

    const hashed_password = await hashPassword(password);

    let user: User;
    try {
        user = await createUser(username, hashed_password);
    } catch {
        return {
            username,
            message: "An unknown error occurred. Please try again later."
        };
    }

    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionTokenCookie(sessionToken, session.expiresAt);
    return redirect("/");
}

interface ActionResult {
    username?: string;
    message: string;
}