const sortSelectors = "price name tier kcal trending".split(" ").map((key) => (
  <div
    className="rounded-xl bg-mupurple py-1 px-2 mt-0.5 mb-0.5 mx-0.5 h-6 flex justify-around items-center font-semibold"
    key={key}
  >
    <div className="mb-1">{key}</div>
  </div>
));

const ascendingDescending = (
  <div className="flex ml-4 text-xl justify-between w-24">
    <div className="bg-mupurple p-1 h-10 w-10 rounded-full text-center">
      <i className="fas fa-sort-amount-up"></i>
    </div>
    <div className="bg-mupurple p-1 h-10 w-10 rounded-full ml-2 text-center">
      <i className="fas fa-sort-amount-down"></i>
    </div>
  </div>
);

export default function SortPicker() {
  return (
    <div className="flex w-full items-center">
      <div className="flex  ml-4 w-48 justify-center flex-wrap">
        {sortSelectors}
      </div>
      <div>{ascendingDescending}</div>
    </div>
  );
}