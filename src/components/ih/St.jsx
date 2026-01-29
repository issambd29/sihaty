import "./St.css";

export default function St() {
  return (
    <section className="stats">
      <h2>Nos statistiques</h2>

      <div className="stats-container">
        <div className="stat-card">
          <h3>+12 000</h3>
          <p>Patients satisfaits</p>
        </div>

        <div className="stat-card">
          <h3>+350</h3>
          <p>Médecins partenaires</p>
        </div>

        <div className="stat-card">
          <h3>+8 500</h3>
          <p>Rendez-vous réalisés</p>
        </div>

        <div className="stat-card">
          <h3>+15</h3>
          <p>Spécialités médicales</p>
        </div>
      </div>
    </section>
  );
}
