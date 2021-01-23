import AppleIcon  from '../../Icons/Apple';
import FacebookIcon from '../../Icons/Facebook';
import GoogleIcon  from '../../Icons/Google';
import React from 'react'

const CardSocial = ({ props }) => {
  return (
    <div class="card__social">
      <AppleIcon className="card__social--icon"/>
      <GoogleIcon className="card__social--icon"/>
      <FacebookIcon className="card__social--icon"/>
    </div>
  )
}

export default CardSocial
