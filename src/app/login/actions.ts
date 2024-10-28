"use server";

import { createSession, generateSessionToken, setSessionTokenCookie } from "@/lib/server/sessions";
import {getUserFromUsername, verifyPasswordInput, verifyUsernameInput} from "@/lib/server/user";
import { redirect } from "next/navigation";

export async function loginAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
    const username = formData.get("username");
    const password = formData.get("password");
    if (typeof username !== "string" || typeof password !== "string") {
        return {
            message: "Invalid or missing fields."
        };
    }

    if (username === "" || password === "") {
        return {
            message: "Please enter your username and password."
        };
    }
    if (!verifyUsernameInput(username)) {
        return {
            username,
            message: "Please enter a valid username."
        };
    }
    if (!verifyPasswordInput(password)) {
        return {
            username,
            message: "Please enter a valid password."
        };
    }

    const user = await getUserFromUsername(username);
    if (user === null) {
        return {
            username,
            message: "Account does not exist."
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