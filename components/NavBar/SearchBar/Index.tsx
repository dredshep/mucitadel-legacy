export default function SearchBar(props) {
  return (
    <div className={"shadow flex w-5/12 " + props.className || ""} >
      <input
        className="w-full rounded-l p-2 bg-inputbg focus:outline-none focus:ring-1 focus:ring-offset-mupurple"
        type="text"
        placeholder="Search..."
      />
      <button className="bg-mupurple w-auto flex justify-end items-center text-white p-2 focus:outline-none focus:ring-1 focus:ring-offset-mupurple rounded-r-md">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}