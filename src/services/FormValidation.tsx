const signupValidation = (name:string, value:string) => {
    switch (name) {
        case 'name':
            if (value.length === 0) return 'Name is required';
            return '';

        case 'email':
            if (value.length === 0) return 'Email is required';
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return 'Invalid email';
            return '';

        case 'password':
            if (value.length === 0) return 'Password is required';
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)) return 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character';
            return '';

        default:
            return '';
    }
}

const loginValidation = (name:string, value:string) => {
    switch (name) {
        case 'email':
            if (value.length === 0) return 'Email is required';
            return '';

        case 'password':
            if (value.length === 0) return 'Password is required';
            return '';

        default:
            return '';
    }
}

export { signupValidation, loginValidation };