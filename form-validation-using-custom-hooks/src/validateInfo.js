export default function validateInfo(values) {
    let errors = {}
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!values.username.trim()) {
        errors.username = "Username required!"
    }

    if (!values.email) {
        errors.email = "Email required!"
    } else if(re.test(values.email)){
        errors.email = "Email address is invalid!"
    }

    if (!values.password) {
        errors.password = "Password is required!"
    } else if (values.password.length < 6){
        errors.password = "Password needs to be at least 6 characters!"
    }

    if (!values.password2 || values.password !== values.password2) {
        errors.password2 = "Passwords do not match!"
    }

    return errors;
}