import categories from "../categories";

interface Props {
  filterByCategory: (category: string) => void;
}

const ExpenseFilter = ({ filterByCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => filterByCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
