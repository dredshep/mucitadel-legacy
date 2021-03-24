// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainLogo () {
  return (<img src="/images/White Mask.png" className="h-10" alt="MemeUnity Logo" />)
}

function Logo() {
  return (
    <div className="flex flex-row items-center w-48 justify-between mr-auto">
      <MainLogo />
      <div className="font-title text-xl font-bold tracking-wider">
        MU&nbsp;Citadel
      </div>
    </div>
  );
}

function SubFooter () {
  return (
    <div className="pt-px sm:pt-0 h-5 text-xs sm:text-sm text-secondary" style={{backgroundColor:"rgba(20, 16, 23"}}>
      <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        <div className="flex justify-around sm:justify-between ">
          <div>Copyright 2021 ©️ MemeUnity</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </div>
        
      </div>
    </div>)
}


export default function Footer() {

  function Title (props) {
    return <h1 className="text-2xl pb-4 font-semibold">{props.children}</h1>
  }

  function FooterElement (props) {
    return <div className="m-0 my-5 mx-10 sm:m-5 sm:w-72 flex flex-col box-border">{props.children}</div>
  }

  return (
    <>
    <div className="sm:px-0 lg:px-10 xl:px-32 bg-asidebg mt-10">
    <div className="flex flex-col sm:max-w-2xl lg:max-w-max mx-auto sm:flex-row flex-wrap lg:flex-nowrap -m-5 mt-5 pt-5 pb-10 text-center sm:text-left ">
      <FooterElement>
        {/* <Title>Dank</Title> */}
        <div className="mb-3 flex flex-row justify-around"><Logo/></div>
        <p>This will be the beginning of something awesome and full of memes.</p>
      </FooterElement>
      <FooterElement>
        <Title>Additional Links</Title><ul className="text-mupurple">
          <li>
            <FontAwesomeIcon icon={faLink} />
            <a href="https://memeunity.com/#roadmap" target="_blank" className="ml-3">Roadmap</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLink} />
            <a href="https://docs.google.com/document/d/1hzSz46MQm8Bn4ytWL4Op-LPDWfV7w_NYDMOxTYqFYSs/edit?usp=sharing" target="_blank" className="ml-3">Tokenomics</a>?
          </li>
          <li>
            <FontAwesomeIcon icon={faLink} />
            <a href="https://docs.google.com/document/d/1-GLSxMDTp29buL8rljzrCB7k6lw8mU4FcIrTpcu_pYM/edit?usp=sharing" target="_blank" className="ml-3">Whitepaper</a>?
          </li>
          <li>
            <FontAwesomeIcon icon={faLink} />
            <a href="https://www.phantasma.io/wallets" target="_blank" className="ml-3">Phantasma Wallet</a>
          </li>
        </ul>
      </FooterElement>
      <FooterElement>
        
        <Title>Contact us</Title>
        <p>Contact us and the community on Telegram or Discord.</p>
        <div className="flex flex-row justify-center items-center h-10 mt-2">
          <div className="w-10 text-2xl"><FontAwesomeIcon icon={faTelegram} /></div>
          <div className="w-10 text-2xl ml-4"><FontAwesomeIcon icon={faDiscord} /></div>
        </div>
      </FooterElement>
      <FooterElement>
        <Title>A wild newsletter</Title>
        {/* <p>Listen to our tales of woe and glory and stay in touch with the latest memes! Your info will remain safe. ☺️ </p> */}
        <div className="flex flex-col text-center"><input className="bg-inputbg px-4 py-2 rounded-lg shadow-md mt-2" type="text" placeholder="name"/>
        <input className="bg-inputbg px-4 py-2 rounded-lg shadow-md mt-2" type="email" placeholder="email"/>
        <div className="bg-mupurple px-4 py-2 rounded-lg shadow-md mt-2 w-full font-semibold">Stay in the loop</div></div>
      </FooterElement>
    </div></div><SubFooter/></>
  )
}