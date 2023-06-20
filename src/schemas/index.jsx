import * as Yup from "yup";

export const signupschema=Yup.object({
    name:Yup.string().min(3).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    pass:Yup.string().min(6).required("Please enter your password"),
    pass2:Yup.string().required("Password is must").oneOf([Yup.ref('pass'),null,"Password must match"]),
})