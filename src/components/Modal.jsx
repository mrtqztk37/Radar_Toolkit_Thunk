import axios from "axios";
import { useEffect, useState } from "react";
import { headers } from "../utils/constants";
import formatDate from "../utils/formatDate";
import { setPath } from "../redux/slices/flightSlice";
import { useDispatch } from "react-redux";

const Modal = ({ detailId, close }) => {
  const [d, setDetail] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setDetail(null);
    const params = {
      flight: detailId,
    };
    axios
      .get("https://flight-radar1.p.rapidapi.com/flights/detail", {
        params,
        headers,
      })
      .then((res) => {
        dispatch(setPath(res.data.trail));
        setDetail(res.data);
      });
  }, [detailId]);

  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>
        {!d ? (
          <div className="wrapper">
            <div class="loader">
              <span></span>

              <div id="dot-1" class="dot"></div>
              <div id="dot-2" class="dot"></div>
              <div id="dot-3" class="dot"></div>
              <div id="dot-4" class="dot"></div>
              <div id="dot-5" class="dot"></div>
            </div>
          </div>
        ) : (
          <>
            <h6>{d.aircraft.model?.text}</h6>
            <h6>{d.aircraft.model?.code}</h6>

            <p>
              <span>Kuyruk Kodu:</span>
              <span> {d.aircraft?.registration}</span>
            </p>

            {d.aircraft?.images ? (
              <img className="imagess" src={d.aircraft.images.large[0].src} />
            ) : (
              <p>Fotoğraf Bulunamadı</p>
            )}
            <p>
              <span>Şirket: </span>
              <span>{d.airline?.short}</span>
            </p>
            <p>
              <span>Kalkış: </span>
              <a href={d.airport?.origin?.website} target="_blank">
                {d.airport.origin.name}
              </a>
            </p>
            <p>
              <span>İniş: </span>
              <a href={d.airport?.destination?.website} target="_blank">
                {d.airport?.destination?.name}
              </a>
            </p>
            <p>
              <span>Kalkış Zamanı: </span>
              <span>{formatDate(d.time.scheduled.departure)}</span>
            </p>
            <p>
              <span>İniş Zamanı: </span>
              <span>{formatDate(d.time.scheduled.arrival)}</span>
            </p>
            <p className={d.status?.icon}>
              <span>{d.status?.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
