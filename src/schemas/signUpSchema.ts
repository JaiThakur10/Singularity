import {z} from 'zod'


//chekcing the validation for username
export const usernameValidation = z
.string() // checking if the username is a string  (here only one value that is username existed thats why z.object is not used)
.min(2, "Username must be at least 2 characters") // checking if it has 2 chars min
.max(20, "Username must be no more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character") //checking if it contains special chars



//checking validations for the signup
export const signUpSchema = z.object({     //here z.object is created becasue in sign up there are mutilple objects
    username : usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"})
})