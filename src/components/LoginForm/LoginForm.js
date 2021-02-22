import React from 'react';
import Image from 'next/image';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    return (
            <form action="auth"className={styles.login-form}>
                <div className={styles.logo-container}>
                    <Image src="/middle-finger-logo.png" width={150} height={200} />
                </div>
                <input type="text" name="username" placeholder="Usuario" required />
                <input type="password" name="password" placeholder="Senha" required />
                <input type="submit" value="Entrar" />
            </form>
    )
}

export default LoginForm;