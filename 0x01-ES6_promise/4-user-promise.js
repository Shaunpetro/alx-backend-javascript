functionsignUpUser(FirstName, lastName) {
    return Promise.resolve({
        firstName,
        lastName,
    });
}

export default signUpUser;