import globals from "@/globals";
import validate from "@/helpers/validation";
import router from "@/router/index";

const {LOGIN, PASSWORD} = globals;

export default {
    login({name="", password=""}){
        // fields pre-validation
        const rules = {
            name:     [name.trim().length > 0 || "Field is empty, please enter username!", 
                       name.trim().length >= 3 || "Username must contain at least 3 characters"],
            password: [password.trim().length > 0 || "Field is empty, please enter password!"]
        }
        const validation = validate(rules);

        // if everything is ok - fake login
        if(validation.valid){
            const fakeLoginRules = {
                name: [name === LOGIN || "Incorrect username"],
                password: [password === PASSWORD || "Incorrect password"]
            }
            const fakeLogin = validate(fakeLoginRules);

            if(fakeLogin.valid){
                localStorage.authorized = true;
                router.replace(`/todo`);
            }

            return fakeLogin
        }

        return validation
    }
}