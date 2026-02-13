import React, { createContext, useState, useContext, useEffect } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servers, setServers] = useState([]); // [{server: "Mega", url: "..."}]
  const [currentServerIndex, setCurrentServerIndex] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null);

  // Actualiza la URL cuando cambia el servidor actual o la lista de servidores
  useEffect(() => {
    if (servers.length > 0 && currentServerIndex < servers.length) {
      setVideoUrl(servers[currentServerIndex].url);
    } else {
      setVideoUrl(null);
    }
  }, [servers, currentServerIndex]);

  const openPlayer = (serversList, startIndex = 0) => {
    setServers(serversList);
    setCurrentServerIndex(startIndex);
    setIsOpen(true);
  };

  const closePlayer = () => {
    console.log("Cerrando el reproductor");
    setIsOpen(false);
    setServers([]);
    setCurrentServerIndex(0);
    setVideoUrl(null);
  };

  const changeServer = (index) => {
    if (index >= 0 && index < servers.length) {
      setCurrentServerIndex(index);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        isOpen,
        videoUrl,
        servers,
        currentServerIndex,
        openPlayer,
        closePlayer,
        changeServer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
