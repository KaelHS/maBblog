import React from 'react';
import Image from 'next/image';

const LoginForm = () => {
    return (
        <form action="auth"className="login-form">
            <div className="logo-container">
                <Image src="/middle-finger-logo.png" width={150} height={200} />
            </div>
            <input type="text" name="username" placeholder="Usuario" required />
            <input type="password" name="password" placeholder="Senha" required />
            <input type="submit" value="Entrar" />
        </form>
    )
}

export default LoginForm;