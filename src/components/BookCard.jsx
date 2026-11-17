export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div style={{ border: "2px solid black", padding: "15px", borderRadius: "10px", margin: "10px" }}>
      <h3>{titre}</h3>
      <p>Auteur : {auteur}</p>
      <p>Statut : {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>
      <button onClick={onClickEmprunt}>{estDisponible ? "Emprunter" : "Rendre"}</button>
    </div>
  );
}