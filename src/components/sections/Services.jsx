import {Link} from 'react-router-dom'

function Services() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h-titles">Nuestros Servicios</h1>
                <hr className="border border-primary border-2"/>
                <hr className="border border-primary border-3"/>                
                <div className="row-services">
                    <div className="col-service1">
                        <div className="text-wrap-service">
                            <p className="p-services">Seguridad de la Información<br></br>Consultorias y Servicios en Seguridad de la Información y Ciberseguridad.</p>
                            <div>
                                <button type="button" className="btn-link" data-bs-toggle="button" aria-pressed="true">Ver más...</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-service2">
                        <div className="text-wrap-service">
                            <p className="p-services">Sistemas de Aires Acondicionados<br></br>De comfort y Soluciones Especializadas.</p>
                            <button type="button" className="btn-link" data-bs-toggle="button" aria-pressed="true">Ver más...</button>
                        </div>
                    </div>
                    <div className="col-service3">
                        <div className="text-wrap-service">
                            <p className="p-services">Seguridad Electrónica e<br></br>Infraestructura en redes de datos energía y soluciones Icloud, Licenciamiento, Software y Hardware.</p>
                            <button type="button" className="btn-link" data-bs-toggle="button" aria-pressed="true">Ver más...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;