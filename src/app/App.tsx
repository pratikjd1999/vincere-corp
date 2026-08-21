import { Route, Routes } from 'react-router-dom'
import { useAnchorScroll } from '../lib/anchor-scroll'
import { GalleryPage } from '../pages/GalleryPage'
import { TemplatePage } from '../pages/TemplatePage'
import { NotFoundPage } from '../pages/NotFoundPage'

export function App() {
  // In-page anchors must not be mistaken for hash routes.
  useAnchorScroll()

  return (
    <Routes>
      <Route path="/" element={<GalleryPage />} />
      <Route path="/templates/:templateId" element={<TemplatePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
