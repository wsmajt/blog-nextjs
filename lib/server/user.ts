import {prisma} from "./prisma";
import type {User} from "@prisma/client";

export const createUser = async (username: string, hashedPassword: string): Promise<User> => {
    return await prisma.user.create({
        data: {
            username,
            hashed_password: hashedPassword,
        },
    });
};

export const verifyUsernameInput = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/; // Example regex: 3 to 30 characters, letters, numbers, and underscores
    return usernameRegex.test(username);
};

export function verifyPasswordInput(password: string): boolean {
    return password.length >= 8 && password.length < 128;
}

export const getUserFromUsername = async (username: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {username},
    });
};
