import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import LandingRoute from '~/routes/landing/LandingRoute'
import NotesRoute from '~/routes/notes/NotesRoute'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingRoute />} />
      <Route path="/notes" element={<NotesRoute />} />
    </Routes>
  </BrowserRouter>
)
