import React, { useState, useEffect } from "react";
import SelectiveInput from "../Form/SelectiveInput";
import CheckInput from "../Form/CheckInput";
import RangeInput from "../Form/RangeInput";
import { useData } from "../../context/ListingFeaturesProvider";

const ListingFilters = ({ activeFilters, setActiveFilters }) => {
  const { features } = useData();

  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.name]) {
      acc[feature.name] = [];
    }
    acc[feature.name].push(feature);
    return acc;
  }, {});

  // Handle change in filter selection
  const handleFilterChange = (filterId, isSelected) => {
    setActiveFilters(
      (prevFilters) =>
        isSelected
          ? [...prevFilters, filterId] // Add filter if selected
          : prevFilters.filter((id) => id !== filterId) // Remove filter if unselected
    );
  };

  return (
    <div className="col-lg-4 col-12 mg-top-30">
      <div className="property-sidebar">
        {Object.entries(groupedFeatures).map(([name, options]) => {
          // Price filter (using RangeInput)
          if (name === "Price") {
            return (
              <RangeInput
                key={name}
                title={name}
                minRange={0}
                maxRange={600}
                defaultMinRange={120}
                defaultMaxRange={450}
                text="Range: "
                symbol="$"
              />
            );
          }

          
            return (
              <CheckInput
                key={name}
                title={name}
                properties={options.map(({ value, id }) => ({
                  label: value,
                  id: id,
                }))}
                name={name.toLowerCase().replace(/\s+/g, "-")}
                onChange={(id, isSelected) =>
                  handleFilterChange(id, isSelected)
                } // Pass the filter change handler
              />
            );
          

        })}
      </div>
    </div>
  );
};

export default ListingFilters;
