import React from 'react';
import styles from "./Login.module.css";
import InputControl from "../Components/InputControl";
import { Link} from 'react-router-dom';

function Login() {
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className="font-bold text-xl">Login</h1>
            <InputControl label="Email"
            placeholder="Enter Email Address"/>
            <InputControl label="Password" type="password"
            placeholder="Enter Password"/>

            <div className={styles.footer}>
                <button className=" items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">Login</button>
                <p>Don't have an accounts? <span><Link to="/signup">Sign Up</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Login