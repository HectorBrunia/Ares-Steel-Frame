
import { useState } from 'react';
import PropTypes from 'prop-types';
import { casas } from '../utils/Casas.js';


const ImageGallery = ({ imagenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!imagenes || imagenes.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mb-6">
      <div className="relative w-full h-96  rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={imagenes[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
      </div>

      {imagenes.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
            type="button"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
            type="button"
          >
            &#10095;
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {imagenes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-400'
                }`}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  imagenes: PropTypes.array.isRequired,
};

const CasaModal = ({ casa, onClose }) => {
  if (!casa) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-brightness-75 z-50 p-4">
      <div className="bg-white text-black p-8 rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="mb-6">
          <ImageGallery imagenes={casa.imagenes || [casa.imagen]} />
          <h2 className="text-3xl font-bold text-red-600 mb-4">{casa.nombre}</h2>
          <p className="text-gray-700 text-lg mb-4">{casa.descripcion}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {casa.caracteristicas && casa.caracteristicas.map((caract, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">{caract.label}</p>
              <p className="text-lg font-semibold text-gray-800">{caract.valor}</p>
            </div>
          ))}
        </div>

        {casa.detalles && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Detalles Adicionales</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {casa.detalles.map((detalle, idx) => (
                <li key={idx}>{detalle}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Planos de la casa</h3>
            <ImageGallery imagenes={casa.planos} />
        </div>

        <div className="flex gap-4">
          <button
            className="flex-1 rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-red-700 active:bg-red-800"
            type="button"
          >
            Contactar
          </button>
          <button
            className="flex-1 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700 active:bg-slate-800"
            onClick={onClose}
            type="button"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

CasaModal.propTypes = {
  casa: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    imagenes: PropTypes.array,
    descripcion: PropTypes.string,
    caracteristicas: PropTypes.array,
    detalles: PropTypes.array,
    planos: PropTypes.array,
  }),
  onClose: PropTypes.func.isRequired,
};

export const Casas = () => {
  const [casaSeleccionada, setCasaSeleccionada] = useState(null);


  return (
    <div className='top-0 left-0  w-full h-auto flex flex-col items-center justify-center py-12'>
      <h1 className="text-4xl font-bold text-center mt-20">¿Cómo queres que sea tu proxima vivienda?</h1>
      <section className='flex w-full h-max p-24 flex-wrap items-center justify-center gap-6 px-4'>
        {casas.map((casa) => (
          <div key={casa.id} className="relative flex flex-col my-6 bg-red-600 shadow-sm border-2 border-slate-200 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={casa.imagen} alt="card-image" className="w-full h-full object-fill rounded-lg mb-4"/>
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-white text-xl font-semibold">
                {casa.nombre}
              </h6>
              <p className="text-white leading-normal font-light">
                {casa.descripcion}
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button
                onClick={() => setCasaSeleccionada(casa)}
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
                type="button"
              >
                ver mas
              </button>
            </div>
          </div>
        ))}
      </section>

      <CasaModal casa={casaSeleccionada} onClose={() => setCasaSeleccionada(null)} />
    </div>
  )
}
