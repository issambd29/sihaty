import "./Temoignages.css";

export default function Temoignages() {
  return (
    <section className="temoignages">
      <h2>Ils nous font confiance</h2>

      <div className="temoignages-container">
        <div className="temoignage-card">
          <p>
            “Une plateforme très utile, simple et efficace. J’ai pu prendre
            rendez-vous rapidement.”
          </p>
          <h4>— Amine B.</h4>
        </div>

        <div className="temoignage-card">
          <p>
            “Les conseils de santé sont très clairs et pratiques. Je recommande
            fortement.”
          </p>
          <h4>— Sarah M.</h4>
        </div>

        <div className="temoignage-card">
          <p>
            “Interface moderne et facile à utiliser. Très bon service.”
          </p>
          <h4>— Yacine K.</h4>
        </div>
      </div>
    </section>
  );
}
