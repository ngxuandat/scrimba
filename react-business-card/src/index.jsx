import { createRoot } from 'react-dom/client'

import { Header, Intro, Bio, Footer } from './App'
import './index.css'


createRoot(document.getElementById('root')).render(
    <div>
        <Header />
        <Intro />
        <Bio />
        <Footer />
    </div>
)
