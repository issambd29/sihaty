import "./Co.css";

export default function Co() {
  return (
    <footer className="contact-footer">

      <div className="footer-grid">

       
        <div className="footer-left">
          <h3>Contact</h3>
          <p>📍 Alger, Algérie</p>
          <p>📞 +213 06 99 51 38 01</p>
          <p>✉️ masante@sihaty.com</p>
        </div>

       
        <div className="footer-right">
          <h3>Informations</h3>
          <p>Ma Santé est une plateforme de santé</p>
         <p> qui vous accompagne vers un équilibre</p>
          <p> physique et mental au quotidien.
            </p>
          
          
        </div>

      </div>

   
      <div className="footer-bottom">
        © {new Date().getFullYear()} Ma Santé — Tous droits réservés
      </div>

    </footer>
  );
}

