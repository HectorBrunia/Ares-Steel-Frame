import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Mapa = () => {
  // Coordenadas de Tandil, Buenos Aires, Argentina
  const position = [-37.30300006347339, -59.143386800166674];

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "200px", width: "80%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Tandil, Buenos Aires, Argentina</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
