import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-control-geocoder";

function AddSearchControl() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Create a container div for styling
    const geocoderDiv = L.DomUtil.create("div", "leaflet-control-geocoder");
    geocoderDiv.style.margin = "10px";
    geocoderDiv.style.backgroundColor = "white";
    geocoderDiv.style.padding = "5px 10px";
    geocoderDiv.style.borderRadius = "8px";
    geocoderDiv.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
    geocoderDiv.style.fontFamily = "sans-serif";

    const geocoder = L.Control.geocoder({
      placeholder: "Search for a doctor or location...",
      defaultMarkGeocode: true
    }).addTo(map);

    // Optional: move input to top-left corner
    geocoder.getContainer().style.margin = "10px";
  }, [map]);

  return null;
}

export default function MapLeaflet() {
  return (
    <div className="mt-4">
      <MapContainer
        center={[36.7525, 3.042]}
        zoom={12}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Default marker */}
        <Marker position={[36.7525, 3.042]}>
          <Popup>Default Doctor Location</Popup>
        </Marker>

        {/* Add search input */}
        <AddSearchControl />
      </MapContainer>
    </div>
  );
}