import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MapPin, ImageIcon } from "lucide-react";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [uniqueCities, setUniqueCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://propques-space-backend-i8etb.ondigitalocean.app/api/properties/"
      )
      .then((res) => {
        const data = res.data;
        setProperties(data);
        const cities = [...new Set(data.map((p) => p.cityName))];
        setUniqueCities(cities);
        if (cities.length > 0) setSelectedCity(cities[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredProperties = properties.filter(
    (p) => p.cityName === selectedCity
  );

  const handleCardClick = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <p></p>
  );
};

export default PropertyList;
