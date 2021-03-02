import CurrencySelector from './CurrencySelector'
import SortPicker from './SortPicker'

export default function Toolbar() {
  return (
    <div className="mx-10 2xl:mx-auto 2xl:w-full mt-10 rounded-xl box-border overflow-hidden max-w-6xl">
      <div className="flex bg-asidebg h-16">
        {/* margin container */}
        <div className="mx-auto h-full flex items-center justify-between">
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
          <div className="h-full flex items-center justify-between w-96 ml-20">
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
