import { randomFunnyName } from "../../lib/random-name"

export function ErrorNoSupport() {
    return (
      <>
        <h1>Oh snap. Looks like your browser doesn't support this site ;^( </h1>
        <p>Maybe try this in modern browser, like on your phone.</p>
        <p>If you clicked allow, you might have to adjust your system preferences. It's possible the operating system is blocking this feature.</p>
      </>
    )
  }
  
  export function ErrorNoPermissions() {
    return (<>
      <h1>{randomFunnyName()}, we can't help <b>U</b>, if we can't tell where you are.</h1>
      <p>Seriously though. Let us use your location. It helps us help you and other beings! If not, we'll just assume you're kicking at the north pole.</p>
    </>)
  }