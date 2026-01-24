import React from "react";
import "./Category.css";

const categories = [
  {
    id: 1,
    title: "Médecine Générale",
    image: "/assets/images/general.png",
  },
  {
    id: 2,
    title: "Pédiatrie",
    image: "/assets/images/pediatrie.png",
  },
  {
    id: 3,
    title: "Cardiologie",
    image: "/assets/images/cardio.png",
  },
  {
    id: 4,
    title: "Orthopédie",
    image: "/assets/images/ortho.png",
  },
  {
    id: 5,
    title: "Dermatologie",
    image: "/assets/images/derm.png",
  },
  {
    id: 6,
    title: "Urgences",
    image: "/assets/images/download.jpg",
  },

];

const Category = () => {
  return (
    <div className="category-container">
      <h2 className="category-title">Nos Services</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img src={cat.image} alt={cat.title} />
            <div className="category-overlay">
              <p>{cat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
