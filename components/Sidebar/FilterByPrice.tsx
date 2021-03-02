export default function FilterByPrice() {
  return (
    <div className="screen flex flex-column items-start">
      <div>
        {/* Section title */}
        <div className="text-left pb-6 mt-5">
          {/* <i class="fas fa-tags"></i> */}
          <span className="pl-2 font-semibold font-title text-secondary">
            FILTER BY PRICE
          </span>
        </div>
        {/* Search bars */}
        <div className="flex justify-around mb-6">
          {/*removed from min/max/button/search: focus:outline-black*/}
          <input
            className="shadow w-1/3 rounded p-2 bg-inputbg text-center focus:outline-none"
            type="text"
            placeholder="Min"
          />
          <input
            className="shadow w-1/3 rounded p-2 bg-inputbg text-center focus:outline-none"
            type="text"
            placeholder="Max"
          />
          <button className="shadow bg-mupurple w-auto flex justify-end items-center focus:outline-none text-white p-2 rounded-md">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}