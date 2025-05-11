import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthProvider } from "../Context/CreateContext";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const {registerUser, user, setUser, signInWithGoogle, updateUserProfile} = use(AuthProvider)
  console.log(user)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
    .then(result => {
        const currentUser = result.user
        setUser(currentUser)

        updateUserProfile({displayName: name, photoURL: photo})
        .then(() => {
          setUser({...user, displayName: name, photoURL: photo})
        })

    }).catch(error => {
        setNameError(error.message)
    })

  };

          const handleWithGoogle = () => {
            signInWithGoogle()
            .then(result => {
                const currentUser = result.user;
                setUser(currentUser)
            }).catch(error => {
                console.log(error.message)
            })
        }

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="fieldset space-y-1">
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input bg-base-200 border-none"
              placeholder="Enter your name"
              required
            />
            {nameError && <p className="text-xs text-secondary">{nameError}</p>}
            <label className="label">Phot URL</label>
            <input
              name="photo"
              type="text"
              className="input bg-base-200 border-none"
              placeholder="Enter your photo URL"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-200 border-none"
              placeholder="Enter your email address"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-base-200 border-none"
              placeholder="Enter your password"
              required
            />
            <label className="label mt-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept Terms & Conditions
            </label>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <button onClick={handleWithGoogle} type="button" className="btn mt-4 px-1 rounded-full"><img className="w-6" src="images/google.png" alt="" />
              <p>SingUp with google</p>
            </button>
            <button type="submit" className="btn mt-4 px-1 rounded-full"><img className="w-6" src="images/fb.png" alt="" />
              <p>Continue with Google</p>
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-indigo-500" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
