import React from "react";
import { Form, Col } from "react-bootstrap";

export default function SearchForm({ params, onParamChange }) {
  return (
    <div className="mb-4">
      <form className="align-items-end">
        <label>Description</label>
        <Form.Control
          onChange={onParamChange}
          value={params.description}
          name="description"
          type="text"
        />

        <label>Location</label>
        <Form.Control
          onChange={onParamChange}
          value={params.location}
          name="location"
          type="text"
        />

        <input
          onChange={onParamChange}
          value={params.full_time}
          name="full_time"
          id="full-time"
          label="Only Full Time"
          type="checkbox"
          className="mb-2"
        />
        <label> Full Time </label>
      </form>
    </div>
  );
}
