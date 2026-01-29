import { useState } from "react";
import "./RendezVous.css";

export default function RendezVous() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    date: "",
    heure: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Rendez-vous confirmé ✅\n\nNom : ${form.nom}\nTéléphone : ${form.telephone}\nDate : ${form.date}\nHeure : ${form.heure}`
    );
  };

  return (
    <div className="rdv">
      <h2>Prendre un rendez-vous</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Numéro de téléphone"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="heure"
          onChange={handleChange}
          required
        />

        <button type="submit">Confirmer le rendez-vous</button>
      </form>
    </div>
  );
}
