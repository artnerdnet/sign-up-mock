import './App.css';
import '../src/styles/main.scss'
function App() {
  return (
    <div class="container">
      <div class="card">
        <div class="card__header">
          <div class="card__header--title">
            <h1>Create an Account</h1>
            </div>
   
          <div class="card__social">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-apple"></i>
          </div>
          <div class="card__form">
            <div class="card__fields">
              <span class="card__form--description">or use your email for registration:</span>
              <input class="card__form--input" placeholder="name" type="input" />
              <input class="card__form--input" placeholder="email" type="email" />
              <input class="card__form--input" placeholder="password" type="password"/>
            </div>
        
          <div class="card__terms">
            <input class="card__terms--checkbox" type="checkbox" id="terms"/ ><label for="terms">
            I agree to sign the Terms and Conditions
            </label>
          </div>
          <div class="card__footer">
            <button class="card__button card__button--primary" type="submit" onclick="console.log('Signing up!')">Sign Up</button>
            <button class="card__button card__button--secondary" onclick="console.log('Logging in!')">Log in</button>
            </div>
          </div>
        </div>
        <div class="card__image"><a class="card__image--credits" href="https://www.pexels.com/es-es/@tom-balabaud-735585?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Photo by Tom Balabaud en Pexels</a></div>

      </div> 
    </div>
  );
}

export default App;
