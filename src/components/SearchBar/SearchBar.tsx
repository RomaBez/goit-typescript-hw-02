import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const valueError = (): string =>
    toast.error("Please enter your query.", {
      duration: 2500,
      style: {
        border: "1 solid #713200",
      },
      icon: "😢",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formValue = form.elements.search.value.trim();
    if (formValue === "") {
      valueError();
      return;
    }
    onSearch(formValue);
    form.reset();
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.formContainer}>
            <input
              className={css.input}
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images or photos"
            />
            <button type="submit" className={css.btn}>
              <CiSearch size={28} color="black" />
            </button>
          </div>
        </form>
      </div>
      <div>
        <Toaster />
      </div>
    </header>
  );
};
