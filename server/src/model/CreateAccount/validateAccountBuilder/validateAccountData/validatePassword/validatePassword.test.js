import validatePassword from "./validatePassword";

test("Return if password is valid or error code", () => {

    
    var validatePasswordResponse = validatePassword("abcd1234", "abcd1234");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(true);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(true);

    validatePasswordResponse = validatePassword("123", "123");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(true);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);
    
    validatePasswordResponse = validatePassword("1234abcd", "123abcde");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(true);

    validatePasswordResponse = validatePassword("123;", "321a;");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

    validatePasswordResponse = validatePassword(undefined, "321a;");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

    validatePasswordResponse = validatePassword("321a;", undefined);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

    validatePasswordResponse = validatePassword(undefined, undefined);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

});