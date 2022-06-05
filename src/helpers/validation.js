/*  
    validate - helper to validate the form 
    and detect primary errors
*/
const validate = (fieldsRules = {}) => {
    const validationResult = {
        valid: true
    };
    
    Object.keys(fieldsRules).forEach(field => {
        validationResult[field] = validateField(fieldsRules[field]);

        if(validationResult[field].length != 0){
            validationResult.valid = false
        }
    })

    return validationResult
}

const validateField = (rules = []) => {
    let error = rules.find(rule => typeof rule == 'string');
    
    if(!error){
        error = "";
    }

    return error
}

export default validate;