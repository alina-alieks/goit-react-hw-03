import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <label className={css.labelFilter}>
      Find contact by name
      <input
        className={css.inputFilter}
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </label>
  );
}
