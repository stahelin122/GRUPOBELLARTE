import React, { useState } from 'react';
import { X } from 'lucide-react';

type ComfortLevel = 'macio' | 'intermediário' | 'firme' | null;

function App() {
  const [leftSide, setLeftSide] = useState<ComfortLevel>(null);
  const [rightSide, setRightSide] = useState<ComfortLevel>(null);
  const [showDownloadNotification, setShowDownloadNotification] = useState(false);

  const comfortLevels: (ComfortLevel)[] = ['macio', 'intermediário', 'firme'];

  const handleSideSelection = (side: 'left' | 'right', comfort: ComfortLevel) => {
    if (side === 'left') {
      setLeftSide(comfort);
    } else {
      setRightSide(comfort);
    }
  };

  const handleFinalize = () => {
    let pdfUrl = '';

    // Handle same comfort level cases
    if (leftSide === rightSide) {
      if (leftSide === 'macio') {
        pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_MACIO-MACIO_-_V2.pdf';
      } else if (leftSide === 'intermediário') {
        pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_INTERMEDI%C3%81RIO-INTERMEDI%C3%81RIO_-_V2.pdf';
      } else if (leftSide === 'firme') {
        pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_FIRME-FIRME_-_V2.pdf';
      }
    } 
    // Handle different comfort level cases
    else if (leftSide === 'macio' && rightSide === 'firme') {
      pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_MACIO-FIRME_-_V2.pdf';
    } else if (leftSide === 'macio' && rightSide === 'intermediário') {
      pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_MACIO-INTERMEDI%C3%81RIO_-_V2.pdf';
    } else if (leftSide === 'intermediário' && rightSide === 'macio') {
      pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_INTERMEDI%C3%81RIO-MACIO_-_V2.pdf';
    } else if (leftSide === 'intermediário' && rightSide === 'firme') {
      pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_INTERMEDI%C3%81RIO-FIRME_-_V2.pdf';
    } else if (leftSide === 'firme' && rightSide === 'macio') {
      pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_FIRME-MACIO_-_V2.pdf';
    } else if (leftSide === 'firme' && rightSide === 'intermediário') {
      pdfUrl = 'https://irp.cdn-website.com/d1d6ab03/files/uploaded/DREAMS_-_NYLA_-_FIRME-INTERMEDI%C3%81RIO_-_V2.pdf';
    }

    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
      setShowDownloadNotification(true);
      setTimeout(() => {
        setShowDownloadNotification(false);
      }, 3000);
    }
  };

  const getMattressImage = () => {
    if (!leftSide && !rightSide) {
      return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-VAZIO.png';
    }

    // Handle same comfort level cases first
    if (leftSide === rightSide) {
      if (leftSide === 'macio') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4MACIO-MACIO.png';
      }
      if (leftSide === 'intermediário') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4INTERMEDI%C3%81RIO-INTERMEDI%C3%81RIO.png';
      }
      if (leftSide === 'firme') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4FIRME-FIRME.png';
      }
    }

    // Single side selections
    if (leftSide === 'macio' && !rightSide) {
      return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-MACIO-ESQUERDO.png';
    }
    if (leftSide === 'intermediário' && !rightSide) {
      return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-INTERMEDIARIO-ESQUERDO.png';
    }
    if (leftSide === 'firme' && !rightSide) {
      return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-FIRME-ESQUERDO.png';
    }
    if (!leftSide && rightSide === 'macio') {
      return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-MACIO-DIREITO.png';
    }
    if (!leftSide && rightSide === 'intermediário') {
      return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-INTERMEDIARIO-DIREITO.png';
    }
    if (!leftSide && rightSide === 'firme') {
      return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-FIRME-DIREITO.png';
    }

    // Different comfort level combinations
    if (leftSide === 'macio') {
      if (rightSide === 'intermediário') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-MACIO-INTERMEDIARIO.png';
      }
      if (rightSide === 'firme') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-MACIO-FIRME.png';
      }
    }
    if (leftSide === 'intermediário') {
      if (rightSide === 'macio') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-INTERMEDIARIO-MACIO.png';
      }
      if (rightSide === 'firme') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-INTERMEDIARIO-FIRME.png';
      }
    }
    if (leftSide === 'firme') {
      if (rightSide === 'macio') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-FIRME-MACIO.png';
      }
      if (rightSide === 'intermediário') {
        return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-FIRME-INTERMEDIARIO.png';
      }
    }

    return 'https://irp.cdn-website.com/d1d6ab03/dms3rep/multi/COLCH%C3%83O-NYLA-V4-VAZIO.png';
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-[150px_1fr_150px] gap-8 items-center">
          {/* Left Side Controls */}
          <div className="space-y-2">
            {comfortLevels.map((comfort) => (
              <button
                key={comfort}
                onClick={() => handleSideSelection('left', comfort)}
                className={`w-full py-2 px-3 rounded-lg transition-all text-sm ${
                  leftSide === comfort
                    ? 'bg-[#d0b1a1] text-white'
                    : 'bg-white text-gray-700 hover:bg-[#f3e8e3]'
                } border border-[#e8d6cd] shadow-sm font-medium capitalize`}
              >
                {comfort}
              </button>
            ))}
          </div>

          {/* Mattress Visualization */}
          <div className="w-full">
            <div className="relative aspect-[16/9] bg-transparent rounded-lg overflow-hidden">
              <img 
                src={getMattressImage()} 
                alt="Visualização do Colchão"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="space-y-2">
            {comfortLevels.map((comfort) => (
              <button
                key={comfort}
                onClick={() => handleSideSelection('right', comfort)}
                className={`w-full py-2 px-3 rounded-lg transition-all text-sm ${
                  rightSide === comfort
                    ? 'bg-[#d0b1a1] text-white'
                    : 'bg-white text-gray-700 hover:bg-[#f3e8e3]'
                } border border-[#e8d6cd] shadow-sm font-medium capitalize`}
              >
                {comfort}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Mattress Visualization */}
          <div className="w-full">
            <div className="relative aspect-[16/9] bg-transparent rounded-lg overflow-hidden">
              <img 
                src={getMattressImage()} 
                alt="Visualização do Colchão"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left Side Controls */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 text-center mb-2">Lado Esquerdo</p>
              {comfortLevels.map((comfort) => (
                <button
                  key={comfort}
                  onClick={() => handleSideSelection('left', comfort)}
                  className={`w-full py-2 px-3 rounded-lg transition-all text-sm ${
                    leftSide === comfort
                      ? 'bg-[#d0b1a1] text-white'
                      : 'bg-white text-gray-700 hover:bg-[#f3e8e3]'
                  } border border-[#e8d6cd] shadow-sm font-medium capitalize`}
                >
                  {comfort}
                </button>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 text-center mb-2">Lado Direito</p>
              {comfortLevels.map((comfort) => (
                <button
                  key={comfort}
                  onClick={() => handleSideSelection('right', comfort)}
                  className={`w-full py-2 px-3 rounded-lg transition-all text-sm ${
                    rightSide === comfort
                      ? 'bg-[#d0b1a1] text-white'
                      : 'bg-white text-gray-700 hover:bg-[#f3e8e3]'
                  } border border-[#e8d6cd] shadow-sm font-medium capitalize`}
                >
                  {comfort}
                </button>
              ))}
            </div>
          </div>

          {/* Finish Button */}
          <div className="flex justify-center mt-4">
            <button 
              onClick={handleFinalize}
              className="bg-[#d0b1a1] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c5a394] transition-colors text-sm"
            >
              Finalizar escolha
            </button>
          </div>
        </div>

        {/* Desktop Finish Button */}
        <div className="hidden md:block mt-8 text-center">
          <button 
            onClick={handleFinalize}
            className="bg-[#d0b1a1] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c5a394] transition-colors text-sm"
          >
            Finalizar escolha
          </button>
        </div>
      </div>

      {/* Download Notification */}
      {showDownloadNotification && (
        <div className="fixed bottom-4 right-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-lg z-50">
          <p className="text-sm font-medium">
            PDF baixado! Confira na pasta "Downloads" do seu computador.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;