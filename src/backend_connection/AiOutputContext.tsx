import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import io from 'socket.io-client';

type AiOutputItem = {
  level: number;
  index: number;
  other_street?: number;
  map_reset?: number;
  detectedTime?: string;
};

const AiOutputContext = createContext<{
  aiOutput: AiOutputItem[];
  setAiOutput: React.Dispatch<React.SetStateAction<AiOutputItem[]>>;
} | null>(null);

export const useAiOutput = () => useContext(AiOutputContext);

interface AiOutputProviderProps {
  children: ReactNode;
}

// Get data from backend all the time
export const AiOutputProvider: React.FC<AiOutputProviderProps> = ({ children }) => {
  const [aiOutput, setAiOutput] = useState<AiOutputItem[]>([]);

  useEffect(() => {
    const socket = io('http://127.0.0.1:5000');

    socket.on('ai_output', (data: AiOutputItem) => {
      console.log('Received data:', data);
          const otherStreetCount = data.other_street != null ? data.other_street : 0;
          
          // Generate Random Data -> since we only have ONE camera/source
          if (otherStreetCount > 0 && otherStreetCount <= 3) {
            let randomData: AiOutputItem[] = [];
            const generateRandomData = () => {
              let randomIndex: number, randomLevel: number;
              do {
                randomIndex = Math.floor(Math.random() * 5); // Generates a random index between 0 and 4
                randomLevel = Math.floor(Math.random() * 3) + 1; // Generates a random level between 1 and 3
              } while (randomIndex === data.index || aiOutput.some(item => item.index === randomIndex) || randomData.some(item => item.index === randomIndex));
          
              return { level: randomLevel, index: randomIndex, detectedTime: data.detectedTime };
            };
          
            // init generate
            for (let i = 0; i < otherStreetCount; i++) {
              randomData.push(generateRandomData());
            }
          
            // filt out the repeat index
            randomData = randomData.filter((randomItem, index, self) =>
              index === self.findIndex(item => item.index === randomItem.index)
            );
          
            // if generated data is less than expection, then generate the missing data
            while (randomData.length < otherStreetCount) {
              const newRandomData = generateRandomData();
              if (!randomData.some(item => item.index === newRandomData.index)) {
                randomData.push(newRandomData);
              }
            }
          
            setAiOutput(currentData => [...currentData, data, ...randomData]);
          } else if(data.map_reset === 1){ // Reset the map
            const resetData: AiOutputItem[] = [];
              for (let i = 0; i < 5; i++) { // Loops against the value of otherStreetCount
                  let resetIndex, resetLevel;
                  resetIndex = i;
                  resetLevel = -1; // Generates a random level between 0 and 3
                  resetData.push({ level: resetLevel, index: resetIndex });
              } 
              setAiOutput(currentData => [...currentData, data, ...resetData]);
          }else { // default -> only ONE camera/source/output
              setAiOutput(currentData => [...currentData, data]);
          }
      });

      return () => {
          socket.off('ai_output');
      };
    }, []); 

  return (
    <AiOutputContext.Provider value={{ aiOutput, setAiOutput }}>
      {children}
    </AiOutputContext.Provider>
  );
};
