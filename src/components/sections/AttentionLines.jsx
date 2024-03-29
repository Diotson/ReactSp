function AttentionLines() {
    return (
        <>
            <div className="container-fluid-attention">            
                <div className="row-attention1">
                    <div className="col-icon-map">
                        <img src="images/icons/mapa.png" width="180" alt="icono-mapa"/>
                    </div>
                    <div className="container-lines">
                        <div>
                            <h2 className="h-titles-attention1">NUESTRAS LÍNEAS DE</h2>
                            <h2 className="h-titles-attention2">ATENCIÓN</h2>
                        </div>
                        <div className="col-icons-container">
                            <img className="col-icon-wpp" src="images/icons/whatsapp.png" alt="icono-whatsapp" />
                            <img className="col-icon-wpp" src="images/icons/mail.png" alt="icono-gmail" />
                            <div className="col-icons-contact">
                                <h2 className="wpp-contact">+57 3003653124</h2>
                                <h2 className="mail-contact">info@soluproint.com</h2>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="row-attention2">
                    <div className="col-">
                        <h2 className="h-titles-attention3">¿Dónde estamos</h2>
                        <h2 className="h-titles-attention4">UBICADOS?</h2> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default AttentionLines;