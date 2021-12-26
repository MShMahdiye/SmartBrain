import React from "react";

const Signin = ({ onRouteChange }) => {
  return (
    <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main class="pa4 black-80">
        <form class="measure center">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Register</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
              <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" htmlFor="password">Email</label>
              <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
            </div>
            <label class="pa0 ma0 lh-copy f6 pointer">Password</label>
            <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
          </fieldset>
          <div class="mv3">
            <input
              onClick={() => onRouteChange('home')}
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit" value="Register" />
          </div>
        </form>
      </main>
    </article>
  )
}
export default Signin;