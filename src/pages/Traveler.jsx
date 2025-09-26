import { useNavigate } from "react-router-dom"

const Traveler = () => {

const naviga = useNavigate();

const goVoyagePage = () => {
      naviga("/voyage");
}

  return (
      <div className="container">
        <div className="row">
          <div className='col-12'>
            <div className="card mt-5 bg-primary-subtle">
              <div className="text-user">
                <h2>Nome e cognome</h2>
                <p>email:</p>
                <p>numero di telefono:</p>
                <p>codice fiscale:</p>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={goVoyagePage}>
            Torna alla pagina dei viaggi MARIO ROSSISSIMO
          </button>
      </div>
    </div>
  )
}

export default Traveler