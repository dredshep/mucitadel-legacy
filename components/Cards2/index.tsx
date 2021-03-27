import axios from "axios";
import React, { useEffect, useState } from "react";
import ActiveLink from "../ActiveLink";

type SampleCard = {
  name: string;
  tier: string;
  url: string;
  description: string;
  soul: number;
  kcal: number;
  className?: string;
};

export function Card2(props: SampleCard) {
  const randomNumberBetween1and1000 = Math.floor(Math.random() * 1000) + 1;
  return (
    <div key={props.name} className={props.className}>
      <div className="rounded-xl font-title bg-asidebg overflow-hidden">
        {/* Title */}
        <div className="bg-mupurple flex justify-around items-center py-2">
          <div className="text-base xlish:text-lg font-bold tracking-wider">
            {props.name}
          </div>
        </div>
        {/* Container for everything below the title */}
        <div className="p-2 xlish:p-4 flex flex-row">
          {/* Image */}
          <div className="w-28 tiny:w-32 xlish:w-40 flex-shrink-0">
            <img
              className="max-w-full"
              src={`/images/cards/${props.url}`}
              alt={props.name}
            />
          </div>
          {/* Metadata */}
          <div className="text-sm xlish:text-base w-40 tiny:w-44 xlish:w-56 pl-2 xlish:pl-4 flex flex-col justify-around">
            <div className="flex flex-row justify-between">
              <div>Trending Rating</div>
              <div className="font-semibold">{randomNumberBetween1and1000}</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Tier</div>
              <div className="font-semibold">
                {props.tier.charAt(0).toUpperCase() + props.tier.slice(1)}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>kcal</div>
              <div className="font-semibold">{props.kcal}</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Price</div>
              <div className="font-semibold">
                {props.soul} <span className="text-phantasmablue">SOUL</span>
              </div>
            </div>
            {/* <div className="flex flex-row justify-between">
              <div>Fiat Price</div>
              <div className="font-semibold">$420.69</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Container(props: { children: any }) {
  return <div className="px-auto">{props.children}</div>;
}

export default function Cards2() {
  // const sampleCardsJson = (await axios.get("/api/sampleCards")).data;
  // const sampleCards: SampleCard[] = JSON.parse(sampleCardsJson);
  // console.log(sampleCards);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getCards = async () => setCards((await axios.get("/api/cards")).data);
    getCards();
    // return () => {
    // }
  }, []);
  return (
    // <div className="mt-7 grid md:grid-cols-3 2xl:grid-cols-6 xl:grid-cols-2 mx-auto gap-10">
    //   {[...Array(12).keys()].map(() => Card2)}
    // </div>
    <Container>
      <div className="flex flex-row flex-wrap justify-center">
        {cards.map((sampleCard, i) => (
          <ActiveLink href={"/card/" + i} key={sampleCard.name}>
            <Card2
              className="mt-10 mx-auto tiny:mr-5 tiny:ml-5"
              {...sampleCard}
            />
          </ActiveLink>
        ))}
      </div>
    </Container>
  );
}
