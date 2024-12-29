import { useState } from "react";

interface FormState {
  type: string;
  minPrice: string;
  maxPrice: string;
  minBedrooms: string;
  maxBedrooms: string;
  dateAdded: string;
  postcode: string;
}

interface SearchFormProps {
  onSearch: (formState: FormState) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
}: SearchFormProps) => {
  const [formState, setFormState] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateAdded: "",
    postcode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 bg-white">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            className="form-control"
            onChange={handleChange}
            value={formState.type}
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            className="form-control"
            onChange={handleChange}
            value={formState.minPrice}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            className="form-control"
            onChange={handleChange}
            value={formState.maxPrice}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label htmlFor="minBedrooms">Min Bedrooms</label>
          <input
            type="number"
            id="minBedrooms"
            name="minBedrooms"
            className="form-control"
            onChange={handleChange}
            value={formState.minBedrooms}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="maxBedrooms">Max Bedrooms</label>
          <input
            type="number"
            id="maxBedrooms"
            name="maxBedrooms"
            className="form-control"
            onChange={handleChange}
            value={formState.maxBedrooms}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="dateAdded">Date Added (After)</label>
          <input
            type="date"
            id="dateAdded"
            name="dateAdded"
            className="form-control"
            onChange={handleChange}
            value={formState.dateAdded}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label htmlFor="postcode">Postcode</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            className="form-control"
            onChange={handleChange}
            value={formState.postcode}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
