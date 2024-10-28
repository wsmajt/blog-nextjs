// src/lib/authUtils.ts
import pkg from 'bcryptjs';
const { hash, compare, genSalt } = pkg;


// Function to hash the password
export const hashPassword = async (password: string) => {
    const salt = await genSalt(10);
    return hash(password, salt);
};

// Function to compare passwords
export const comparePassword = async (password: string, hashedPassword: string) => {
    return compare(password, hashedPassword);
};