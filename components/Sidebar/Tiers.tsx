function TierIcon(props: { path: string; tier: string }) {
  return (
    <div className="h-12 w-12 flex justify-around items-center mr-5">
      <img src={props.path} alt={props.tier} />
    </div>
  );
}

export default function Tiers() {
  const tiers = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Nani"];
  return (
    <>
      {tiers.map((tier, i) => {
        const tierFileName = `/images/tiers/${i + 1} ${tier.toLowerCase()}.png`;
        return (
          <li className="flex flex-row items-center mb-2 font-semibold" key={i}>
            <TierIcon path={tierFileName} tier={tier} />
            <div>{tier}</div>
          </li>
        );
      })}
    </>
  );
}
