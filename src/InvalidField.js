import React from 'react'
import errorIcon from "./images/icon-error.svg";

export default function InvalidField({error, errorText}) {
    return (
      <>
        <p
          className={
            error
              ? "sign-up__error-text"
              : "sign-up__error-text sign-up__error-text--active"
          }
        >
          {errorText}
        </p>
        <img
          className={
            error
              ? "sign-up__error-icon"
              : "sign-up__error-icon sign-up__error-icon--active"
          }
          src={errorIcon}
          alt=""
        />
      </>
    );
}
