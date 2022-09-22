import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form
      onSubmit={submitHandler}
      style={{ display: "flex", gap: "0.7rem", margin: "0 1rem" }}
    >
      <FormControl
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products"
        className="px-4"
      ></FormControl>
      <Button type="submit" variant="outline-success" className="px-1">Search</Button>
    </Form>
  );
};

export default SearchBar;