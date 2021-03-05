import CurrencySelector from './CurrencySelector'
import SortPicker from './SortPicker'

export default function Toolbar() {
  return (
    <div className="mx-0 lg:mx-10 2xl:mx-auto 2xl:w-full mt-0 lg:mt-10 rounded-none lg:rounded-xl box-border overflow-hidden lg:max-w-6xl">
      <div className="flex bg-asidebg h-44 lg:h-16">
        {/* margin container */}
        <div className="mx-auto h-full flex items-center lg:justify-between">
          {/* Currency section */}
          <div className="h-full flex items-center justify-center flex-col lg:flex-row">
            <div className="font-semibold font-title text-secondary mx-0 lg:mr-4">
              CURRENCY
            </div>
            <div className="flex w-32 mt-2 lg:my-auto justify-center flex-wrap">
              <CurrencySelector />
            </div>
          </div>
          {/* Sort section */}
          <div className="h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between w-auto lg:w-96 ml-0 lg:ml-20">
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
