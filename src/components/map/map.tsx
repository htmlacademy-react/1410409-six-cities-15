import {memo, useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';

import {CITIES, MARKER_ACTIVE_OPTIONS, MARKER_DEFAULT_OPTIONS} from '../../const';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map.tsx';
import {OfferShortInfo} from '../../types/offer.ts';
import {useAppSelector} from '../../hooks/store.ts';
import {offersSelectors} from '../../store/slices/offers.ts';

type MapProps = {
  city: typeof CITIES[number];
  offers: OfferShortInfo[];
  container: string;
  currentOfferId?: string;
};

const defaultCustomIcon = new Icon(MARKER_DEFAULT_OPTIONS);
const currentCustomIcon = new Icon(MARKER_ACTIVE_OPTIONS);

function Map_({container, city, offers, currentOfferId}: MapProps) {
  const activeOffer = useAppSelector(offersSelectors.activeOffer);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== null && offer.id === activeOffer.id || offer.id === currentOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      map.flyTo([city.location.latitude, city.location.longitude], 12);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city, map, offers, activeOffer, currentOfferId]);

  return <section ref={mapRef} className={`${container}__map map`} />;
}

const Map = memo(Map_);

export default Map;
