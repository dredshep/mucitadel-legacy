import FilterByPrice from "./FilterByPrice";
import FilterByTier from "./FilterByTier";

export default function Sidebar() {
  return (
    <aside className="w-64 flex flex-col items-start flex-shrink-0 min-h-screen max-h-full bg-asidebg  p-4">
      <div className=" sticky top-0 ">
        <FilterByPrice />
        <FilterByTier />
      </div>
    </aside>
  );
}
