import "./SignUp.css"
import { FiX } from "react-icons/fi"
import { auth } from "../../firebase/config"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"

const SignUp = ({isSignUpActive, setIsSignUpActive, callback}) => {
    const { t } = useTranslation()
    const history = useHistory()
    const [signInBtn, setSignInBtn] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState(true)
    const [userPassword, setUserPassword] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userEmailSignIn, setUserEmailSignIn] = useState("")
    const [userPasswordSignIn, setUserPasswordSignIn] = useState("")
    const [possibleError, setPossibleError] = useState("")

    const createUser = (evt) => {
        evt.preventDefault()
        auth.signInWithEmailAndPassword(userEmail, userPassword)
            .then(response => {
                if (response) {
                    callback(false)
                }
            })
            .catch(err => {
                setPossibleError(err.message)
            })
    }

    const signInUser = (evt) => {
        evt.preventDefault()

        auth.createUserWithEmailAndPassword(userEmailSignIn, userPasswordSignIn)
            .then(response => {
                if (response) {
                    callback(true)
                }
            })
            .catch(error => {
                setPossibleError(error.message)
            })
    }
    return (
        <div className={isSignUpActive === true ? "signup signupactive" : "signup"}>
            <div className="sign__up__wrapper">
                <div className="sign__up__top">
                    {
                         possibleError && <p style={{color: "red", marginBottom: "20px"}}>{possibleError}</p>
                    }
                    <div className="sign__up__list">
                        <div className="login__text" style={signInBtn ? {backgroundColor: "#fff"} : {backgroundColor: "transparent"}} onClick={() => {
                            setSignInBtn(true)
                            setPhoneNumber(true)
                        }}>{t(("enter"))}</div>
                        <div className="login__text" style={signInBtn ? {backgroundColor: "#fff"} : {backgroundColor: "transparent"}} onClick={() => {
                            setSignInBtn(false)
                            setPhoneNumber(false)
                        }}>{t("register")}</div>
                        <FiX className="sign__up__icon" onClick={() => {setIsSignUpActive(false)}}/>
                    </div>

                    <div className="login__enter" style={phoneNumber ? {display: "block"} : {display: "none"}}> 
                        <form className="form__login" onSubmit={createUser}>
                            <div className="login__labelBox">
                                <label className="login__label" htmlFor="login">{t("email")}<span>*</span></label>
                                <input className="login__input" type="text" required onChange={(evt) => {setUserEmail(evt.target.value)}}/>
                            </div>
                            <div className="login__labelBox">
                                <label className="login__label" htmlFor="password">{t("password")}<span>*</span></label>
                                <input className="login__password" type="password" required onChange={(evt) => {setUserPassword(evt.target.value)}}/>
                            </div>
                            <button className="login__btn">{t(("sign__up__login"))}</button>
                        </form>
                    </div>
                    <div className="login__signup" style={!phoneNumber ? {display: "block"} : {display: "none"}}>
                        <form className="signIn__user" onSubmit={signInUser}>
                            <div className="login__labelBox">
                                    <label className="login__label" htmlFor="login">{t("email")}<span>*</span></label>
                                    <input className="login__input" type="text" required onChange={(evt) => {setUserEmailSignIn(evt.target.value)}}/>
                                </div>
                                <div className="login__labelBox">
                                    <label className="login__label" htmlFor="password">{t("password")}<span>*</span></label>
                                    <input className="login__password" type="password" required onChange={(evt) => {setUserPasswordSignIn(evt.target.value)}}/>
                                </div>
                                <button className="login__btn">{t("register")}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp