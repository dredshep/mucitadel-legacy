import CurrencySelector from './CurrencySelector'
import SortPicker from './SortPicker'

export default function Toolbar() {
  return (
    <div className="mx-4 mt-4 rounded-xl overflow-hidden">
      <div className="flex w-full bg-asidebg h-16 justify-around px-60">
        {/* margin container */}
        <div className="h-full flex items-center w-full justify-between">
          {/* Currency section */}
          <div className="h-full flex items-center">
            <div className="font-semibold font-title text-secondary mr-4">
              CURRENCY
            </div>
            <div className="flex w-32 justify-center flex-wrap">
              <CurrencySelector />
            </div>
          </div>
          {/* Sort section */}
          <div className="h-full flex items-center justify-between w-60 ml-20">
            <div className="font-semibold font-title text-secondary">SORT</div>
            <div>
              <SortPicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
