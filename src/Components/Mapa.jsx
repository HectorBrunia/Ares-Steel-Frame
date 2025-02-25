import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Mapa = () => {
  // Coordenadas de Tandil, Buenos Aires, Argentina
  const position = [-37.30300006347339, -59.143386800166674];

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: null,
  });

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Tandil, Buenos Aires, Argentina</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
