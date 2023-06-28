import { useRef,useState,useEffect } from "react";
import {faCheck,faTimes,faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register=()=>{
    const useRef=useRef();
    const errRef=useRef();

    const [user,setUser]=useState('');
    const [validName,setValidName]=useState(false);
    const [userFocus,setUserFocus]=useState(false);


    const [pwd,setPwd]=useState('');
    const [validPwd,setValidPwd]=useState(false);
   
    const [matchpwd,setMatchPwd]=useState('');
    const [validMatch,setValidMatch]=useState(false);

    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);


    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        const result=USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    },[user])

    useEffect(()=>{
        const result=PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match=pwd===matchpwd;
        setValidMatch(match);
    },[pwd,matchPwd])

    useEffect(()=>{
        setErrMsg('');
    },[user,pwd,matchPwd])


    return (
        <section>
           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
           <h1>Register</h1>
           <form>
               <label htmlFor="name">
                Name:
               </label>

               <label htmlFor="username">
                  Username:
                  <span className={validName ? "valid" : "hide"}>
                     <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                     
                  </span>
               </label>
               <input>
                 type="text"
                 id="username"
                 ref={userRef}
                 autocomplete="off" 
                 onChange={(e)=>setUser(e.target.value)}
                 required
                 aria-invalid={validName?"false":"true"}
                 aria-describedy="uidnote"
                 onFocus={()=>setUserFocus(true)}
                 onBlur={()=>setUserFocus(false)}
               </input>
               <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                  4 to 24 characters.<br/>
                  Must begin with a letter.<br/>
                  Letters,numbers,underscores,hyphens allowed.

               </p>

               <label htmlFor="password">
                Password:
                 <span className={validPwd?"valid":"hide"}>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                 </span>
                 <span className={validPwd||!pwd?"hide":"invalid"}>
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                 </span>
               </label>
               <input>
                   type="password"
                   id="password"
                   onChange={(e)=>setPwd(e.target.value)}
                   required
                   aria-invalid={validPwd?"false":"true"}
                   aria-describedby="pwdnote"
                   onFocus={()=>setPwdFocus(true)}
                   onBlur={()=>setPwdFocus(false)}

               </input>
               <p id="pwdnote" className={pwdFocus && !validPwd ? "instruction":"offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                8 to 24 characters.<br/>
                Must include uppercase and lowercase letters, a number and a special character.<br/>
                Allowed special character:<span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span> 
                <span aria-label="percent">%</span> 
               </p>

               <label htmlFor="password">
                Confirm Password:
                 <span className={validMatch && matchPwd?"valid":"hide"}>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                 </span>
                 <span className={validMatch||!matchPwd?"hide":"invalid"}>
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                 </span>
               </label>
               <input>
                   type="password"
                   id="confirm_pwd"
                   onChange={(e)=>setMatchPwd(e.target.value)}
                   required
                   aria-invalid={validMatch?"false":"true"}
                   aria-describedby="confirmnote"
                   onFocus={()=>setPwdFocus(true)}
                   onBlur={()=>setPwdFocus(false)}

               </input>
               <p id="confirmnote" className={matchFocus && !validMatch ? "instruction":"offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                 Must match the first password input field.
               </p>
           </form>
        </section>
    )
}

export default Register
