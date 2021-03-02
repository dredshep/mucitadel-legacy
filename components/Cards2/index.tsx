export const Card2 = (
  <div className="rounded-xl font-title bg-asidebg overflow-hidden">
    {/* Title */}
    <div className="bg-mupurple flex justify-around items-center py-2">
      <div className="text-lg font-bold tracking-wider">Voiceover Pete</div>
    </div>
    {/* Container for everything below the title */}
    <div className="p-4 flex flex-row">
      {/* Image */}
      <div className="w-40 flex-shrink-0">
        <img
          className="max-w-full"
          src="images/pete-card.jpg"
          alt="Voiceover Pete"
        />
      </div>
      {/* Metadata */}
      <div className="w-64 pl-4 flex flex-col justify-around">
        <div className="flex flex-row justify-between">
          <div>Trending Rating</div>
          <div className="font-semibold">1031</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Tier</div>
          <div className="font-semibold">Unprecedented</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>kcal</div>
          <div className="font-semibold">120</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Price</div>
          <div className="font-semibold">
            1200 <span className="text-phantasmablue">SOUL</span>
          </div>
        </div>
        {/* <div className="flex flex-row justify-between">
          <div>Fiat Price</div>
          <div className="font-semibold">$420.69</div>
        </div> */}
      </div>
    </div>
  </div>
);

export default function Cards2() {
  return (
    <div className="mt-7 grid md:grid-cols-3 2xl:grid-cols-6 xl:grid-cols-2 mx-auto gap-10">
      {[...Array(12).keys()].map(() => Card2)}
    </div>
  );
}