import React, { useState } from 'react';
import styles from "./index.module.css";
import Image from "next/image";

// material UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    // Handle login logic here
  }


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={16}>
          <Grid item xs={8}>
            <Image src={"/loginImage.png"} alt="" height={750} width={650} />
          </Grid>
          <Grid item xs={8}>
            <div className={styles.mainDiv}>
              <Image
                src={"/logo.png"}
                alt=""
                height={60}
                width={50}
                className={styles.logoImage}
              />
              <div className={styles.loginDiv}>
                <h2>Login</h2>
                <div className={styles.inputFiled}>
                  <label>E - mail</label>
                  <input type="text" placeholder="Enter your Email" />
                </div>
                <div className={styles.inputFiled}>
                  <label>Password</label>
                  <input type="password" placeholder="Enter your Password" />
                </div>

                <div className={styles.loginButton} >
                  Login
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
