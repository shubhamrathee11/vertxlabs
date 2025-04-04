import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const DemographicsMap = ({ countries }) => (
  <div className="flex flex-col w-full md:w-2/3 h-[250px] md:h-full relative">
    {/* Dropdown */}
    <div className="mb-2 md:absolute md:top-0 md:left-0">
      <select className="bg-black text-white border border-[#1D1D1D] rounded-2xl px-2 py-1 text-sm">
        <option>Visitors</option>
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="90">Last 90 Days</option>
      </select>
    </div>

    {/* Map Section */}
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{ scale: 250 }}
      className="w-full h-full"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#1D1D1D"
              stroke="#333"
              style={{
                default: { outline: "none" },
                hover: { fill: "#444" },
                pressed: { fill: "#222" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Dots on Map */}
      {countries.map(({ name, coordinates, color }, index) => (
        <Marker key={index} coordinates={coordinates}>
          <circle r={6} fill={color} className="animate-pulse" />
        </Marker>
      ))}
    </ComposableMap>
  </div>
);

export default DemographicsMap;
