export default function CurrencySelector() {
  return (<>{"ETH ADA USD".split(" ").map((key) => (
    <div
      className="rounded-xl bg-mupurple px-2 pb-0.5 mt-0.5 mb-0.5 mx-0.5 h-6 flex justify-around items-center font-semibold"
      key={key}
    >
      <div>{key}</div>
    </div>))}</>)
}