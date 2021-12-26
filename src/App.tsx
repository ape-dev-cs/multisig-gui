import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { ContractPage } from './pages/Contract';
import { DeployPage } from './pages/Deploy';
import { HomePage } from './pages/Home';
import { theme } from './styles/theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/multisig-gui/" element={<HomePage />} />
            <Route path="/multisig-gui/deploy" element={<DeployPage />} />
            <Route path="/multisig-gui/multisig/:contract" element={<ContractPage />} />
            <Route index element={<HomePage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default App;
