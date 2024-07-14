import { useAppSelector } from "../../hooks";
import { getQueryString } from "../../redux/ui/NavbarSlice";

const SearchPage = () => {
  const query = useAppSelector(getQueryString);
  return (
    <div className="flex flex-col justify-start">
      <div className="text-lg font-medium text-zinc-500">Search Page</div>
      <div className="text-sm text-slate-400">You searched for: {query}</div>
    </div>
  );
};

export default SearchPage;
