import CardHeader from '../components/header'
import CardSocial from '../components/social-login';
import Form from '../components/form'
import ImagePane from '../components/image-pane'
import React from 'react'

const Main = () => {
  return (
    <div class="container">
    <div class="card">
      <div class="card__content">
        <CardHeader/>
        <CardSocial/>
        <Form />
      </div>
      <ImagePane/>      
    </div> 
    </div>
  )
}

export default Main
