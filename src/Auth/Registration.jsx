import React from "react"
import Navbar from "../Common/Navbar";
import styled from "./Css/Registration.module.css";
import CardComponent from "../Common/Cards";
import forestHome from "../Assets/foresthouse.jpg"
import Footer from "../Common/Footer";
import { Link } from 'react-router-dom';



const Registration = () => {
    return (
        <div className={styled.container}>
            <section>
                <nav>
                    <Navbar />
                </nav>
            </section>

            <section className={styled.body}>
                <div className={styled.header}>
                    <h1> Create an account</h1>
                    <p>By clicking "Continue", you agree to liveIn's and it's affiliates' Terms of service and private policy</p>
                </div>

                <div className={styled.form}>

                    <form action="">
                        <div>
                        <label htmlFor="fullname" className={styled.label}>
                                Full Name *
                            </label> 
                            <input
                                className={styled.input}
                                id="fullname"
                                name="fullname"
                                type="text"
                                // autoComplete="email"
                                required
                                placeholder="Enter your full name"

                            />
                            <label htmlFor="emailaddress" className={styled.label}>
                                Email *
                            </label> 
                            <input
                                className={styled.input}
                                id="emailaddress"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Enter your email"

                            />
                            <label htmlFor="phonenumber" className={styled.label}>
                                Phone Number *
                            </label> 
                            <input
                                className={styled.input}
                                id="phonenumber"
                                name="phonenumber"
                                type="number"
                                autoComplete="email"
                                required
                                placeholder="Enter your phone number"

                            />
                            <label htmlFor="password" className={styled.label}>
                                Password *
                            </label>
                            <input
                                className={styled.input}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                required
                                placeholder="Enter your password"

                            />
                        </div>
                        <Link to='/dashboard'>
                            <button>Register</button>
                        </Link>


                    </form>
                </div>
            </section>

            <Footer/>

        </div>
    );

}

export default Registration;
