import { FilterLabel, FilterField } from "./Filter.styled";

export const Filter = ({ value, onChange }) => (
    <FilterLabel>
      Фільтр за назвою
      <FilterField type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );