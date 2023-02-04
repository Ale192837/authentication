const validateAccountData = function(data, validators) {

    let invalidData = false;

    validators.forEach(validator => {

        let checkedDataStatus = validator(data);
        
        if(checkedDataStatus == false){
            invalidData = true;
        }


    });

    return !invalidData;

}

module.exports = validateAccountData;