"use server"

import { signIn, signOut } from "../auth";


export async function doSocialLogin(formdata) {
    const action = formdata.get('action');
    await signIn(action,{redirectTo:"/dashboard"});
}


export async function doSocialRegister(formdata) {
  const action = formdata.get("action");
  await signIn(action, { redirectTo: "/dashboard" });
}


export async function doLogout() {
    await signOut ({redirectTo:"/auth/login"});
}


export async function doCredentialLogin(formdata) {
    try {
        const response = await signIn('credentials',{
            email: formdata.get('email'),
            password: formdata.get('password'),
            redirect: false
        });
        return response;
    } catch (err) {
        throw new Error(err.message)
    }
}