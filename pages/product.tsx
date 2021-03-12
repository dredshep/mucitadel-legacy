import NavBar from "../components/NavBar";
import { Card2 } from "../components/Cards2";
import Footer from '../components/Footer';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTimeAgo from 'react-time-ago';

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
    <div className="font-semibold font-title tracking-wide text-secondary flex-shrink-0 min-w-min">
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

  return (<div className="flex flex-row justify-between w-full mb-3">{pairKeyElement} {stylizedValue}</div>)
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

// TODO
// MAKE A FUNCTION THAT SENDS OR RECEIVES .INFO PROP TO ADD IT AS A POPUP TO THE ICON..
// till then, .info is deprecated.
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
    <div className="flex flex-col p-8 bg-asidebg rounded-none box-border lg:rounded-xl w-full max-w-full lg:w-auto lg:max-w-md">
      {/* <div className="w-96"><img className="w-full" src="/images/pete-card.jpg" /></div> */}
      {/* <div className="text-lg font-bold">Voiceover Pete</div> */}
      <div className="text-3xl font-bold mb-5 font-title">NFT Details</div>
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
    } as NoLinkPair/*as NoLinkPair, {
      pairKey: "Series Royalties",
      value: "10%"
    }*/, {
      pairKey: "Series Current Supply",
      value: "2"
    }, {
      pairKey: "Series Maximum Supply",
      value: "2"
    }
  ].map(obj => makeProp(...Object.values(obj) as [string, string]))
  
  return (
    <div className="flex flex-col p-8 bg-asidebg rounded-none lg:rounded-xl w-full lg:w-96">
      {/* <div className="w-96"><img className="w-full" src="/images/pete-card.jpg" /></div> */}
      {/* <div className="text-lg font-bold">Voiceover Pete</div> */}
      <div className="text-3xl font-bold mb-5 font-title">Series Details</div>
      {props.map(props => <KeyValue {...props}/>)}
    </div>)
}

function RelatedSection() {
  const title = <div className="text-3xl font-bold mb-9 mt-10 mx-auto md:mx-0">Related Cards</div>
  const cards = (
    <div className="flex flex-col md:flex-row mx-auto justify-center w-max md:w-full box-border overflow-hidden">
      <div><Card2 /></div>
      <div className="w-10 h-10 flex-shrink-0"></div>
      <div><Card2 /></div>
    </div>)
  return (<>{title} {cards}</>)
}

// function NFTEventsHistory() {
//   return (
    
//   )
// }

const keyTextClass = "text-secondary font-semibold font-title"
const valueTextClass = "text-white font-body"

function Product2 () {
  const currencyButton = (<span className="py-1 px-2 ml-2 border border-mupurple rounded-md">
    DANK <FontAwesomeIcon className="text-mupurple" icon={faCaretDown}/>
  </span>)

  return <div className="flex flex-row px-5 pb-5 md:py-0 md:px-0 space-x-0 md:space-x-5 bg-asidebg rounded-none md:rounded-xl mt-0 md:mt-10 w-full max-w-lg md:max-w-3xl mx-auto">
    <div className="hidden md:flex w-80 flex-shrink-0"><img className="w-full" src="/images/pete-card.jpg" /></div>
    <div className="w-full">
      <div className="flex flex-row items-center mt-5">
        <div className="w-20 xs:w-20 flex-shrink-0 mr-3 md:hidden"><img className="w-full" src="/images/pete-card.jpg" /></div>
        <div>
          <div className="text-success font-semibold text-lg leading-3 font-body">#1031</div>
          <div className="mt-8 text-white font-bold text-2xl xs:text-4xl leading-9 font-title">Voiceover Pete</div>
          <div className="mt-3 text-secondary font-semibold text-lg leading-3 font-body">Unprecedented</div>
        </div>
      </div>
      <div className="flex flex-row mt-5 justify-start md:justify-between">
        <div className="flex flex-col w-7/12 xs:w-2/3 md:w-44">
          <div className={keyTextClass}>Price</div>
          <div className={valueTextClass + " font-semibold text-lg"}>420.69 {currencyButton}</div>
        </div>
        <div className="flex flex-col w-5/12 xs:w-1/3 md:w-44 ">
          <div className={keyTextClass}>Mint Edition</div>
          <div className={valueTextClass}>1 out of 3</div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        <div>
          <div className="flex h-12 text-base font-body mt-2 text-secondary">
            <div className="border-b-2 border-inputbg w-40 h-full flex items-center box-content">Description</div>
            <div className="border-b-2 border-mupurple h-full flex items-center w-full box-content pl-5">Details</div>
          </div>
          <div className="flex flex-col space-y-3 mt-5 pr-5">
            {/* Row 1 */}
            <div className="flex flex-row justify-between font-body">
              <div className={keyTextClass}>Owner</div>
              <div className="text-white"><a className="text-mupurple">moonsawyer1331</a></div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-row justify-between font-body">
              <div className={keyTextClass}>Mint date</div>
              <div className="text-white">Feb 2, 2021</div>
            </div>
            {/* Row 3 */}
            <div className="flex flex-row justify-between font-body">
              <div className={keyTextClass}>Listed until</div>
              <div className="text-white">Feb 3, 2021</div>
            </div>
          </div>
        </div>
        {/* BUY BUTTONS SECTION */}
        {/* <div className="flex flex-row font-semibold text-xl justify-start md:justify-center space-x-5 mt-4 w-full">
          <div className="w-1/2 md:w-auto px-6 rounded-full bg-white text-mupurple flex justify-around items-center ml-0 md:ml-6"><div className="pt-1 pb-1 md:pt-1 md:pb-1.5 leading-loose align-middle">Buy</div></div>
          <div className="w-1/2 md:w-auto px-6 rounded-full bg-mupurple text-white flex justify-around items-center"><div className="pt-1 pb-1 md:pt-1 md:pb-1.5 leading-loose align-middle">Add to wishlist</div></div>
        </div> */}
        <div className="flex flex-row font-semibold text-sm xs:text-xl justify-start md:justify-center space-x-2 xs:space-x-5 mt-4 w-full">
          <div className="w-1/2 md:w-auto px-3 tiny:px-6 rounded-full bg-white text-mupurple flex justify-around items-center ml-0 md:ml-6"><div className="pt-1 pb-1 md:pt-1 md:pb-1 leading-loose align-middle">Buy</div></div>
          <div className="w-1/2 md:w-auto px-3 tiny:px-6 rounded-full bg-mupurple text-white flex justify-around items-center"><div className="pt-1 pb-1 md:pt-1 md:pb-1 leading-loose align-middle">Add to wishlist</div></div>
        </div>
      </div>
    </div>
  
  </div>
}

function MiniExplorer ()  {
  type Event = {
    type: "cancelled" | "minted" | "infused" | "listed"
    date: Date
    username: string
    account: string
    amount?: string
    transaction: string
  }
  const exampleEvents = [{
    type: "listed",
    date: new Date("Sat, 27 Feb 2021 18:48:43 GMT"),
    username: "moonsawyer1331",
    account: "P2K6h65yT8rx5pgAjSkAfhTAhRU7mRCJWYv6AbHewyGQQrg",
    amount: "420.69 DANK",
    transaction: "F7A1FEB2A2525F373427AC9027B0ADED2E4B51C4A1F9559B85B4DB969173608D"
  } as Event,{
    type: "infused",
    date: new Date("Sat, 27 Feb 2021 18:48:43 GMT "),
    username: "moonsawyer1331",
    account: "P2K6h65yT8rx5pgAjSkAfhTAhRU7mRCJWYv6AbHewyGQQrg",
    amount: "1 KCAL",
    transaction: "F7A1FEB2A2525F373427AC9027B0ADED2E4B51C4A1F9559B85B4DB969173608D"
  } as Event,{
    type: "minted",
    date: new Date("Sat, 27 Feb 2021 18:48:43 GMT "),
    username: "moonsawyer1331",
    account: "P2K6h65yT8rx5pgAjSkAfhTAhRU7mRCJWYv6AbHewyGQQrg",
    transaction: "F7A1FEB2A2525F373427AC9027B0ADED2E4B51C4A1F9559B85B4DB969173608D"
  } as Event,{
    type: "cancelled",
    date: new Date("Mon, 01 Mar 2021 22:18:32 GMT"),
    username: "moonsawyer1331",
    account: "P2K6h65yT8rx5pgAjSkAfhTAhRU7mRCJWYv6AbHewyGQQrg",
    transaction: "F7A1FEB2A2525F373427AC9027B0ADED2E4B51C4A1F9559B85B4DB969173608D"
  } as Event]

  function Phrasing (event: Event, key: number) {
    const surroundOrSpace = (s: string) => s.length > 1 ? ` ${s} ${event.amount} ` : ` `
    const appendedWord = event.type === "infused"
      ? "with"
    : event.type === "listed"
      ? "for"
      : ""
    const joiner = surroundOrSpace(appendedWord)

    return (<div className="whitespace-pre-wrap mb-3" key={key}>
      <a className="text-mupurple" href={"https://ghostmarket.io/account/pha/" + event.account}>{event.username}</a>
      {" "}{event.type}{joiner}
      <a className="text-mupurple ml-auto" href={"https://https://explorer.phantasma.io/tx/" + event.transaction}>
        <ReactTimeAgo date={event.date} locale="en-US"/>
      </a>
    </div>)
  };

  return (
    <div className="flex flex-col bg-asidebg rounded-none w-full lg:w-max lg:rounded-xl p-8 font-body">
      <div className="text-3xl font-bold mb-5 font-title">Event History</div>
      {exampleEvents.map((event, index) => Phrasing(event, index))}
    </div>
  )
}

// 
// <div className="flex flex-row h-full mt-10 p-8 bg-asidebg rounded-xl">
// {/* <div className="w-96"><img className="w-full" src="/images/pete-card.jpg" /></div> */}
// {/* <div className="text-lg font-bold">Voiceover Pete</div> */}
// <div className="flex flex-col items-center">
//   <div className="text-3xl font-bold">Voiceover Pete</div>
//   {Card}
// </div>
// {propsSection}
// </div>

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
    <div className="px-0 xl:px-32 flex flex-col">
      <Product2 />
      <div className="flex flex-col lg:flex-row flex-wrap lg:space-x-10 justify-start lg:justify-center w-full space-y-3 lg:space-y-0 mt-3 lg:mt-10 mx-auto">
        <div className="mb-0 lg:mb-10 max-w-full"><NFTDetails /></div>
        <div className="mb-0 lg:mb-10 max-w-full"><SeriesDetails /></div>
        <div className="mb-0 lg:mb-10 max-w-full"><MiniExplorer /></div>
      </div>
      <div className="w-full text-center"><RelatedSection/></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="App text-white bg-mainbg min-h-screen font-body">
      <NavBar />
      <Content />
      
      <Footer />
    </div>
  );
}
