import { useState } from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({searchResults}) => {

  const [selectLocation,setSelectLocation] = useState({})

//  Transform the search results object into the   
//  { latitude: 52.516272, longitude: 13.377722 } 
//  object

const coordinates = searchResults.map( result =>({
    longitude:result.long,
    latitude:result.lat,
    }))

//  The latitude and longitude of the center of locations coordinates 

    const center = getCenter(coordinates)

        const [viewport,setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    console.log(selectLocation,'selectLocation');

  return (
    <ReactMapGL 
    mapStyle="mapbox://styles/sanjoy-mapbox/ckyx1eusy001c14lti5il5ib8"
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={nextViewport => setViewport(nextViewport)}

    >
      {searchResults.map(result => (
        <div key={result.long} className="">
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p role="img" onClick={()=>setSelectLocation(result)} className="cursor-pointer text-2xl animate-bounce"
            aria-label='push-pin'>
              📌
            </p>
          </Marker>

          {/* The Popup that should show if we click on a Marker  */}
          {selectLocation.long === result.long ? (
       
            <Popup
              onClose={()=>setSelectLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
           
          ):(
            false
          )}

        </div>
      ))}
    </ReactMapGL>
  )
};

export default Map;
