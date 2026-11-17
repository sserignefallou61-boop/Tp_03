import { useState } from 'react'
import BookCard from './components/BookCard'

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Mafatihoul Jinan", auteur: "Cheikh Ahmadou Bamba Mbacke (RTA)", estDisponible: true },
    { id: 2, titre: "Une si longue lettre", auteur: "Mariama Bâ", estDisponible: false },
    { id: 3, titre: "L'Aventure ambiguë", auteur: "Cheikh Hamidou Kane", estDisponible: false },
    { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true },
  ])
  const [titre, setTitre] = useState("")
  const [auteur, setAuteur] = useState("")

  const nbDisponibles = books.filter((b) => b.estDisponible).length

  function onClickEmprunt(bookId) {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, estDisponible: !book.estDisponible } : book
      )
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (titre.trim() === "" || auteur.trim() === "") return
    setBooks([
      ...books,
      { id: Date.now(), titre: titre.trim(), auteur: auteur.trim(), estDisponible: true },
    ])
    setTitre("")
    setAuteur("")
  }

  return (
    <div>
      <h1>Bibliothèque : {nbDisponibles} livre(s) disponible(s)</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {books.map((book) => (
        <BookCard
          key={book.id}
          titre={book.titre}
          auteur={book.auteur}
          estDisponible={book.estDisponible}
          onClickEmprunt={() => onClickEmprunt(book.id)}
        />
      ))}
    </div>
  )
}

export default App