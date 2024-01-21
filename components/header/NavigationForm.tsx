import { IoSearchOutline } from "react-icons/io5";

const NavigationForm = () => {
  return (
    <form
      role="form"
      className="hidden h-full w-full max-w-[540px] items-center justify-between rounded-sm border md:flex"
    >
      <input
        type="text"
        placeholder="Mahsulotlar va turkumlarni izlash"
        className="flex-1 px-3 text-sm outline-none placeholder:text-sm placeholder:text-gray-500"
      />
      <button className="flex items-center justify-center bg-slate-200 px-5 py-2.5 xl:px-6">
        <IoSearchOutline className="text-[19px] text-gray-800" />
      </button>
    </form>
  );
};

export default NavigationForm;
