function TierIcon() {
  return (
    <div className="rounded-full h-9 w-9 flex justify-around items-center mr-5">
      <img src="/images/White Mask.png" className="h-5" alt="MemeUnity Logo" />
    </div>
  );
}

export default function Tiers() {
  const tiers = [
    "Common",
    "Uncommon",
    "Epic",
    "Legendary",
    "Unprecedented",
    "Godlike",
    "Titanic",
    "Nani",
  ];
  return <>{tiers.map((tier, i) => (
    <li className="flex flex-row items-center mb-2 font-semibold" key={i}>
      <TierIcon />
      <div>{tier}</div>
    </li>
  ))}</>;
}