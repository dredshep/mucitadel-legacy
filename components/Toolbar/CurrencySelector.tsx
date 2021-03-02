export default function CurrencySelector() {
  return (<>{"ETH SOUL USD".split(" ").map((key) => (
    <div
      className="rounded-xl bg-mupurple py-1 px-2 mt-0.5 mb-0.5 mx-0.5 h-6 flex justify-around items-center font-semibold"
      key={key}
    >
      <div className="mb-1">{key}</div>
    </div>))}</>)
}