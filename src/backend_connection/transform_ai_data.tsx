export type AiOutputItem = {
    level: number;
    index: number;
    other_street?: number;
    map_reset?: number;
    detectedTime?: string;
  };
  
type TransformedData = {
  key: string;
  street: string;
  camera: string;
  time: string;
  level: string;
};

// make up street name & camera id
const streetCameraMapping: { [index: number]: { street: string; camera: string } } = {
  0: { street: "Harris St", camera: "CCTV 0" },
  1: { street: "Pitt St", camera: "CCTV 1" },
  2: { street: "Thomas St", camera: "CCTV 2" },
  3: { street: "Pink St", camera: "CCTV 3" },
  4: { street: "George St", camera: "CCTV 4" },
  // ... Add other mappings as needed ...
};

const getStreetCamera = (index: number) => {
  return streetCameraMapping[index] || { street: "Unknown", camera: "Unknown" };
};

export const transformAiOutputData = (data: AiOutputItem[]): TransformedData[] => {
  return data
  .filter(item => item.level !== -1) // filter out the -1 lvl -> thats used for map_reset
  .map(item => {
    const { street, camera } = getStreetCamera(item.index);
    return {
      key: item.index.toString(),
      street,
      camera,
      time: item.detectedTime || "Unknown",
      level: `Level ${item.level}`,
    };
  }); 
};
