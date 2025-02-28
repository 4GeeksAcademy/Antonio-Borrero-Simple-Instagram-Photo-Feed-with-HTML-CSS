import React from 'react'

const Jumbotron = () => {
  return (
    <div>
      <div className="container p-5 text-start bg-body-tertiary rounded-3">
        <svg className="bi mt-4 mb-3" style={{ color: 'var(--bs-indigo)' }} width={100} height={100}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <h1 className="text-body-emphasis">A Warm Welcome</h1>
        <p className="col-lg-8 ms-40 fs-5 text-start">Bienvenidos a esta landin page, esto es un prueba de mi tarea durante mi paso por 4 geeks academy, este es de los proyectos que estoy desarrollando con react y posiblemente lo convierta en mi portfolio 
          
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-3 " type="button">
            Llamado a la acción
            <svg className="bi ms-2" width={24} height={24}>
              <use xlinkHref="#arrow-right-short" />
            </svg>
          </button>
          
        </div>
      </div>

    </div>
  )
}

export default Jumbotron