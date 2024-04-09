// build me a function that accept password as a parameter then encryt it using bcrypt and return the encrypted password

import bcrypt from "bcrypt";

export const hash = (password: string) => {
    return bcrypt.hashSync(password, 10);
}