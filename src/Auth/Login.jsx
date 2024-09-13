import React from "react" 
// import Navbar from "../Common/Navbar";
import Navbar from "../Common/Navbar";

import styled from "./Css/Login.module.css";
import { Link } from 'react-router-dom';
import Footer from "../Common/Footer";



const LogIn = () =>{
    return (
        <div className={styled.container}>
         <section>
            <nav>
                <Navbar/>
            </nav>
         </section>

         <section className={styled.body}>
            <div className={styled.header}>
                <h1>Sign in or create <br /> an account</h1>
                <p>By clicking "Continue", you agree to liveIn's and it's affiliates' Terms of <br /> service and private policy</p>
            </div>

            <div className={styled.form}>
                <button>Continue with Google</button> <br />
                <div className={styled.line}>
                {/* <hr />or <hr /> */}
                <hr />
                </div>
                <form action="">
                <div>
              <label htmlFor="emailaddress" className={styled.label}>
                Email *
              </label> <br />
              <input
                className={styled.input}
                id="emailaddress"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                
              />
            </div>
            <Link to='/registration'>
            <button>Continue with Email</button>
            </Link>
             <br />
            <h6>Forgot your Password?   </h6>


                </form>
            </div>
         </section>
         {/* <Footer/> */}

        </div>
      );

}

export default LogIn;
