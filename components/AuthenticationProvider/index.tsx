import React, { useState } from "react";
import Cookies from "universal-cookie";

interface Window {
  ethereum: any;
}

const stringToBool = (str: string) => str === "true";

/*
The model that I want is the following:

We have multiple authentication methods, so I would like to have a simple `authentication_method` cookie.
This would say `metamask`, `poltergeist`, etc., for example.
If the user is not authenticated, then `authentication_method` is "none".

This component would then ask the respective extension for information.

If information is retrieved successfully
  - it would ask the API for information related to that address.
Else if the request to the extension is not successful (the user clicks Cancel, for example)
  - it would change `authentication_method` to "none".

The user will then have to log in again (simple, painless process)

---

Whenever there is an address, it would request related information to the API. This information would then
be passed to child elements as a prop, maybe something called `authenticationInformation`.

Ideally, they will later on be able to add more addresses under their username? Anyway, NFTs will be tied
to one address, not to an account. Information is retrieved easily from the database in connection to any
address the user has associated.
*/

async function logInWithMetamask() {
  const ethereum = ((window as unknown) as Window).ethereum;
  try {
    await ethereum.request({ method: "eth_requestAccounts" });
    const addy = await ethereum.request({ method: "eth_accounts" });
    console.log({ addy });
    return addy;
  } catch (e) {
    // Metamask error. Null means "error, reload window and try again".
    return null;
  }
}

function setLogOutState(setAuthData) {
  const logOut = () => {
    setAuthData({ address: undefined, authenticationMethod: "none" });
    const cookies = new Cookies();
    cookies.set("authentication_method", "none");
  };
  return logOut;
}

function setLogInState(setAuthData) {
  return async function logIn(newMethod?: "metamask"): Promise<void | boolean> {
    const cookies = new Cookies();
    const cookiedMethod = cookies.get("authentication_method");
    if (newMethod === "metamask" || cookiedMethod === "metamask") {
      if (newMethod === "metamask")
        cookies.set("authentication_method", "metamask");
      return logInWithMetamask()
        .then((address) => {
          if (address !== null) {
            setAuthData({ address, authenticationMethod: "metamask" });
            // Later on, we can put more API-retrieved user info here for all essential details.
            // However, I don't know if this renders with every page, which would make us
            // delay each page load by loading user info instead of making it persist.
            // One solution is to store an address-encrypted user info localStorage element
            // and every time the user loads a page, we get the addy from metamask, and then
            // we get the information right from localStorage which will make things faster.
            return true;
          } else {
            cookies.set("authentication_method", "metamask");
            window.location.reload();
            // setAuthData({ address: undefined, authenticationMethod: "none" });
          }
        })
        .catch(console.error);
    }
  };
}

export default function AuthenticationProvider(props) {
  // connectMetaMask();
  // We need to pass something like authenticationData which contains the address.
  // We need to make logOut() modify this authenticationData.
  // We need to retrieve this modifiable authenticationData and then pass it to the children again.
  // Maybe it can be done with a `const [authData, setAuthData] = useState({})`
  const [authData, setAuthData] = useState({ address: undefined });
  const logIn = setLogInState(setAuthData);
  const logOut = setLogOutState(setAuthData);
  const cookie = new Cookies();
  const authMethod = cookie.get("authentication_method");
  if (authMethod === "metamask" && !authData.address) {
    try {
      logIn("metamask");
    } catch (e) {
      logOut();
    }
  }

  return <>{React.cloneElement(props.children, { authData, logIn, logOut })}</>;
}
