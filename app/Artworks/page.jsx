"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import mockArtworksData from "./mockArtworks.json"; // Keep as fallback
import dbArtworksData from "./dbArtworks.json";
import dbArtistsData from '../Artists/dbData.json'
import { useUser } from '@/context/UserContext'
import ItemComponent from "./ItemComponent";

const ArtworksPage = () => {
  const router = useRouter();
  const [artworksData, setArtworksData] = useState(dbArtworksData.artworks); // Initialize as empty array
  const { dbUpdate } = useUser();

  useEffect(() => {
    console.log('dbArtworksData:', dbArtworksData.artworks);
    setArtworksData(dbArtworksData.artworks);
  }, [dbUpdate]);

  const handleArtworkClick = (artworkId) => {
    router.push(`/Artworks/${artworkId}`);
  };

  return (
    <div className="mt-20 container mx-auto px-4 relative z-0">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">🖼️ Featured Artworks</h2>
      </div>
      <ItemComponent 
        artworksData={artworksData}
        handleArtworkClick={handleArtworkClick}
      />
    </div>
  );
};

export default ArtworksPage;