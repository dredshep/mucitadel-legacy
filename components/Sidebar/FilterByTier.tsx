import Tiers from "./Tiers";

export default function FilterByTier() {
  return (
    <div className="pt-4">
      {/* Section title */}
      <div className="text-left">
        {/* <i class="fas fa-cubes"></i> */}
        <span className="pl-2 font-semibold font-title tracking-wide text-secondary">
          FILTER BY TIER
        </span>
      </div>
      {/* Items */}
      <div className="pl-2 pt-4 mb-20 text-left">
        <ol className="font-body">
          <Tiers />
        </ol>
      </div>
    </div>
  );
}
