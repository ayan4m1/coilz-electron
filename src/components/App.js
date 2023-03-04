import { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header';
import SuspenseFallback from 'components/SuspenseFallback';

const Home = lazy(() => import('pages/Home'));
const BaseCalculator = lazy(() => import('pages/BaseCalculator'));
const CoilCalculator = lazy(() => import('pages/CoilCalculator'));
const CostCalculator = lazy(() => import('pages/CostCalculator'));
const MaterialEditor = lazy(() => import('pages/MaterialEditor'));
const MixCalculator = lazy(() => import('pages/MixCalculator'));
const ModCalculator = lazy(() => import('pages/ModCalculator'));
const NicCalculator = lazy(() => import('pages/NicCalculator'));
const Settings = lazy(() => import('pages/Settings'));
const SpoolCalculator = lazy(() => import('pages/SpoolCalculator'));
const WiringCalculator = lazy(() => import('pages/WiringCalculator'));

export default function App() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Header />
      <Container>
        <Routes>
          <Route element={<Home />} index />
          <Route element={<Settings />} path="/settings" />
          <Route element={<BaseCalculator />} path="/base" />
          <Route element={<CoilCalculator />} path="/coils" />
          <Route element={<CostCalculator />} path="/cost" />
          <Route element={<MaterialEditor />} path="/materials" />
          <Route element={<MixCalculator />} path="/mix" />
          <Route element={<ModCalculator />} path="/mod" />
          <Route element={<NicCalculator />} path="/nicotine" />
          <Route element={<SpoolCalculator />} path="/spool" />
          <Route element={<WiringCalculator />} path="/wiring" />
        </Routes>
      </Container>
    </Suspense>
  );
}
