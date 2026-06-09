import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TuitionMantraLanding from './TuitionMantraLanding'
import DigitalMarketing from './DigitalMarketing';

const App = () => {
  return (
    <Routes>
      {/* होम पेज के लिए */}
      <Route path="/" element={<TuitionMantraLanding />} />

      {/* डिजिटल मार्केटिंग पेज के लिए */}
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
    </Routes>
  )
}

export default App