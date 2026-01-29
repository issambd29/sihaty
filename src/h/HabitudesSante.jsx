import { useState } from "react";
import "./HabitudesSante.css";

export default function HabitudesSante() {
  const [score, setScore] = useState(0);
  const [resultat, setResultat] = useState("");

  const ajouterScore = (points) => {
    setScore(score + points);
  };

  const afficherResultat = () => {
    if (score <= 2) {
      setResultat("✅ Votre mode de vie est sain. Continuez ainsi !");
    } else if (score <= 5) {
      setResultat("⚠️ Votre mode de vie est acceptable, mais peut être amélioré.");
    } else {
      setResultat("❌ Votre mode de vie n’est pas sain. Des changements sont recommandés.");
    }
  };

  return (
    <div className="habitudes">
      <h2>Questionnaire sur les habitudes de vie</h2>

      <div className="question">
        <p>1. Mangez-vous des fruits et légumes tous les jours ?</p>
        <button onClick={() => ajouterScore(0)}>Oui</button>
        <button onClick={() => ajouterScore(1)}>Non</button>
      </div>

      <div className="question">
        <p>2. Faites-vous au moins 30 minutes de sport par jour ?</p>
        <button onClick={() => ajouterScore(0)}>Oui</button>
        <button onClick={() => ajouterScore(1)}>Non</button>
      </div>

      <div className="question">
        <p>3. Buvez-vous suffisamment d’eau chaque jour ?</p>
        <button onClick={() => ajouterScore(0)}>Oui</button>
        <button onClick={() => ajouterScore(1)}>Non</button>
      </div>

      <div className="question">
        <p>4. Dormez-vous au moins 7 heures par nuit ?</p>
        <button onClick={() => ajouterScore(0)}>Oui</button>
        <button onClick={() => ajouterScore(1)}>Non</button>
      </div>

      <div className="question">
        <p>5. Mangez-vous souvent des fast-foods ou des aliments sucrés ?</p>
        <button onClick={() => ajouterScore(1)}>Oui</button>
        <button onClick={() => ajouterScore(0)}>Non</button>
      </div>

      <button className="btn-resultat" onClick={afficherResultat}>
        Voir mon évaluation
      </button>

      {resultat && <div className="resultat">{resultat}</div>}
    </div>
  );
}
