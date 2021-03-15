import Cards2 from "../components/Cards2";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
import Head from 'next/head'


function Content() {
  return (
    <div className="flex flex-row h-full">
      <Sidebar />
      <div className="inline-flex flex-col box-border">
        <Toolbar />
        <Cards2 />
      </div>
    </div>
  );
}

function MainLogo () {
  return (<img src="/images/White Mask.png" className="h-10" alt="MemeUnity Logo" />)
}

function Logo() {
  return (
    <div className="flex flex-row items-center w-48 justify-between">
      <MainLogo />
      <div className="font-title text-xl font-bold tracking-wider">
        MU&nbsp;Citadel
      </div>
    </div>
  );
}
// make body position fixed
// make overlay absolute xy 100%. ??
// make modal absolute. maybe flex centered
function modal () {
  return (
    <div className=""></div>
  )
}

export default function Home() {
  return (
    <div className="App text-white bg-mainbg min-h-screen overflow-y-hidden font-body">
      <Head>
        <title>MU Citadel - the tree where memes grow</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar sidebar={true}/>
      <Content />
      <Footer/>
    </div>
  );
}
