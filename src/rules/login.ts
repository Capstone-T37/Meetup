export const passwordRules = {
    required: 'Your password is required',
    minLength: {value: 8, message: 'password should contain at least 8 characters'},
    maxLength: {value: 20, message: 'password should contain at most 20 characters'}
}

export const emailRules = {
    required: 'Your email is required',
    pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g , message: 'invalid email'}
}