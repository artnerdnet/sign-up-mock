import React from 'react'

const Form = ({ props }) => {
  return (
    <div class="card__form">
      <div class="card__fields">
        <span class="card__form--description">or use your email for registration:</span>
        <input class="card__form--input" placeholder="name" type="input" />
        <input class="card__form--input" placeholder="email" type="email" />
        <input class="card__form--input" placeholder="password" type="password"/>
      </div>

      <div class="card__terms">
        <input class="card__terms--checkbox" type="checkbox" id="terms" /><label for="terms">
        I agree to sign the Terms and Conditions
        </label>
      </div>
      <div class="card__footer">
        <button class="card__button card__button--primary" type="submit" onclick="console.log('Signing up!')">Sign Up</button>
        <button class="card__button card__button--secondary" onclick="console.log('Logging in!')">Log in</button>
      </div>
    </div>
  )
}

export default Form