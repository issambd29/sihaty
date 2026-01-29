import "./Conse.css";

export default function Conse() {
  return (
    <section className="conseils">
      <h2>Conseils de santé</h2>

      <div className="conseils-container">
        <div className="conseil-card">
          <h3>🥗 Alimentation équilibrée</h3>
          <p>
            Consommez des fruits, légumes et évitez les aliments trop gras
            ou sucrés.
          </p>
        </div>

        <div className="conseil-card">
          <h3>🏃 Activité physique</h3>
          <p>
            Faites au moins 30 minutes de sport par jour pour rester en forme.
          </p>
        </div>

        <div className="conseil-card">
          <h3>💧 Hydratation</h3>
          <p>
            Buvez au minimum 1,5 à 2 litres d’eau par jour.
          </p>
        </div>

        <div className="conseil-card">
          <h3>😴 Sommeil</h3>
          <p>
            Dormez entre 7 et 8 heures par nuit pour une bonne récupération.
          </p>
        </div>
      </div>
    </section>
  );
}
