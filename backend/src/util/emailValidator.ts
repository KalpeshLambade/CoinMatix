export const validateEmail = (email:string)=>{
    const emailPattern = /^[a-zA-Z0-9_-]+@[a-z0-9A-Z]+\.[a-zA-z]{2,4}$/

    if(!emailPattern.test(email)) throw new Error("Invalid Email format")
}