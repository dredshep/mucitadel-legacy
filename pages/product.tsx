import NavBar from "../components/NavBar";
import { Card2 } from "../components/Cards2";
import Footer from '../components/Footer';

type NoLinkPair = {
  pairKey:string, value:string, info?: string
}

type LinkPair = {
  pairKey:string, value: string, link: string, external: boolean, info?: string
}



function Link (props: {href: string, text: string}) {
  return (<a className="text-mupurple" href={props.href}>{props.text}</a>)
}

function ExternalMarker (props:{href:string}) {
  return (
    <a href={props.href} className="text-mupurple">
      <i className="fas fa-external-link-alt"></i>
    </a>
  )
}



function BuySection () {
  return (
    <>
      {/* CURRENCY SECTION */}
      <div className="flex flex-row justify-between w-full mb-8">
        <div className="font-semibold font-title tracking-wide text-secondary">
          Currency
        </div>
        <div className="max-w-sm flex flex-row flex-wrap">
          {"SOUL DANK ETH USD".split(' ').map((currency, i) => (
            <div
              key={currency}
              className={"flex flex-col justify-around mb-px rounded-full items-center py-1 px-3 font-bold " + (i === 0 ? "bg-mupurple" : "bg-white text-mupurple") + " ml-2"}
            ><div>{currency}</div></div>
          ))}
        </div>
      </div>
      {/* PRICE SECTION */}
      <div className="flex flex-row justify-between w-full mb-8">
        <div className="font-semibold font-title tracking-wide text-secondary">
          Price
        </div>
        <div className="max-w-sm flex flex-col flex-wrap font-bold">
          <div>120&nbsp;<span className="text-phantasmablue">SOUL</span></div>
          <div>100&nbsp;<span className="text-kcalred">kcal</span></div>
        </div>
      </div>
      {/* BUY BUTTONS SECTION */}
      <div className="mx-auto flex flex-row justify-around font-semibold text-xl">
        <div className="py-2 px-4 rounded-full bg-white text-mupurple flex justify-around items-center"><div className="mb-1">Add to cart</div></div>
        <div className="py-2 px-4 rounded-full bg-mupurple text-white flex justify-around items-center ml-6"><div className="mb-px">Buy</div></div>
      </div>
    </>
  )
}



function KeyValue (props: NoLinkPair | LinkPair) {
  // const { pairKey, value, link, external } = props
  const pairKeyElement = (
    <div className="font-semibold font-title tracking-wide text-secondary flex-shrink-0 w-36">
      {props.pairKey} {props.info ? <i className="fas fa-info-circle"></i> : undefined}
    </div>
    )

  const valueElement = (props as LinkPair).link ? (
    (props as LinkPair).external ? (
      <Link href={(props as LinkPair).link} text={(props as LinkPair).value} />
    ) : (
      <><Link href={(props as LinkPair).link} text={(props as LinkPair).value} /> <ExternalMarker href={(props as LinkPair).link} /></>
    )
  ) : (
    <>{(props as LinkPair).value}</>
  )
  // const stylizedPairKey = <div>{pairKeyElement}</div>
  const stylizedValue = <div className="max-w-full text-left break-words" style={{maxWidth: "60%"}}>{valueElement}</div>

  return (<div className="flex flex-row justify-between w-full mb-8">{pairKeyElement} {stylizedValue}</div>)
}

const Card = (
  <div className="mt-auto mb-auto font-title rounded-lg text-sm font-bold w-60 flex-col bg-purple-300 overflow-hidden">
    <div className="bg-success flex justify-around items-center h-8">
      <div className="tracking-wider">#1031</div>
    </div>

    <div className="bg-mupurple flex justify-between px-4 py-1">
      <div>Epic</div>
      <div>100 kcal</div>
    </div>
    <div>
      <img
        className="max-w-full"
        src="images/pete-card.jpg"
        alt="Voiceover Pete"
      />
    </div>
    <div className="bg-phantasmablue flex justify-between px-4 py-1">
      <div>120 SOUL</div>
      <div>$42.69</div>
    </div>
  </div>
);


function makeProp (pairKey: string, value:string): NoLinkPair
function makeProp (pairKey: string, value:string, link:string, external:boolean): LinkPair
function makeProp (pairKey: string, value:string, link?:string, external?:boolean) {
  if (link) {
    return {
      pairKey, value, link, external, key:pairKey
    } as LinkPair
  }
  return {
    pairKey, value, key: pairKey
  } as NoLinkPair
}

function NFTDetails() {
  const props: (LinkPair|NoLinkPair)[]= [
    {
      pairKey: "Smart Contract",
      value: "GHOST",
      link: "https://explorer.phantasma.io/token/GHOST",
      external: true
    } as LinkPair, {
      pairKey: "NFT ID",
      value: "104920549433542394393888664408303023894970105957056315840031505911066476125106"
    } as NoLinkPair, {
      pairKey: "Blockchain",
      value: "Phantasma",
      link: "https://ghostmarket.io/assets/pha/",
      external: false
    } as LinkPair
  ].map(obj => makeProp(...Object.values(obj) as [string, string]))
  
  return (
    <div className="flex flex-col h-full mt-10 p-8 bg-asidebg rounded-xl mr-5 max-w-md">
      {/* <div className="w-96"><img className="w-full" src="/images/pete-card.jpg" /></div> */}
      {/* <div className="text-lg font-bold">Voiceover Pete</div> */}
      <div className="text-3xl font-bold mb-9">NFT Details</div>
      {props.map(props => <KeyValue {...props}/>)}
    </div>)
}

function SeriesDetails() {
  const props: (LinkPair|NoLinkPair)[]= [
    {
      pairKey: "Series ID",
      value: "475",
      link: "https://ghostmarket.io/assets/pha/ghost/?series_id=475",
      external: true
    } as LinkPair, {
      pairKey: "Series Royalties",
      value: "10%",
      info: "10% of all sales will be paid to the original creator: uniqueart"
    } as NoLinkPair, {
      pairKey: "Series Royalties",
      value: "10%"
    }, {
      pairKey: "Series Current Supply",
      value: "2"
    }, {
      pairKey: "Series Maximum Supply",
      value: "2"
    }
  ].map(obj => makeProp(...Object.values(obj) as [string, string]))
  
  return (
    <div className="flex flex-col h-full mt-10 p-8 bg-asidebg rounded-xl w-full ml-5">
      {/* <div className="w-96"><img className="w-full" src="/images/pete-card.jpg" /></div> */}
      {/* <div className="text-lg font-bold">Voiceover Pete</div> */}
      <div className="text-3xl font-bold mb-9">Series Details</div>
      {props.map(props => <KeyValue {...props}/>)}
    </div>)
}

function RelatedSection() {
  const title = <div className="text-3xl font-bold mb-9 mt-10">Related Cards</div>
  const cards = <div className="flex justify-center w-full box-border overflow-hidden"><div><Card2 /></div> <div className="w-10 flex-shrink-0"></div> <div><Card2 /></div></div>
  return (<>{title} {cards}</>)
}

function Content() {
  const mainProps: (LinkPair|NoLinkPair)[]= [
    {
      pairKey: "Current Owner",
      value: "moonsawyer1331",
      link: "https://ghostmarket.io/account/pha/P2K6h65yT8rx5pgAjSkAfhTAhRU7mRCJWYv6AbHewyGQQrg/",
      external: false
    } as LinkPair, {
      pairKey: "Minted On",
      value: "2/27/2021, 2:48:43 PM"
    } as NoLinkPair, {
      pairKey: "Mint Number",
      value: "1 out of 1"
    } as NoLinkPair, {
      pairKey: "Current Listing",
      value: "Sat Feb 27 2021 to Mon Mar 29 2021"
    } as NoLinkPair
  ].map(obj => makeProp(...Object.values(obj) as [string, string]))
  mainProps.push(makeProp("Description", "The legendary Pete is a well-known meme personality, having stolen a great deal of credit cards up until this date. A true legend indeed."))
  const propsSection = (
    <div className="flex flex-col items-start w-full ml-10">
      {mainProps.map(props => <KeyValue {...props}/>)}
      <BuySection />
    </div>
  )
  return (
    <div className="px-60">
      <div className="flex flex-row h-full mt-10 p-8 bg-asidebg rounded-xl">
        {/* <div className="w-96"><img className="w-full" src="/images/pete-card.jpg" /></div> */}
        {/* <div className="text-lg font-bold">Voiceover Pete</div> */}
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">Voiceover Pete</div>
          {Card}
        </div>
        {propsSection}
      </div>
      <div className="flex flex-row">
        <NFTDetails />
        <SeriesDetails />
      </div>
        <RelatedSection/>
    </div>
  );
}

export default function Home() {
  return (
    <div className="App text-white bg-mainbg min-h-screen">
      <NavBar />
      <Content />
      
      <Footer />
    </div>
  );
}
