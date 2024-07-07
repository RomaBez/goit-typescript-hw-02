import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import css from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const valueError = () =>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formValue = form.elements.search.value;
    if (formValue === "") {
      valueError();
      return;
    }
    onSearch(formValue);
    form.reset(); // Виправлено на form.reset
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
