export const findPropertiesByLocation = (properties, searchLocation) => {
  if (!Array.isArray(properties) || !searchLocation) return [];

  return properties.filter(property =>
    property.location.toLowerCase().includes(searchLocation.toLowerCase())
  );
};