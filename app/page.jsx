"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Nav from '../components/Nav';
import { ArtistComponent } from './Artists/ArtistComponent';
import Card from '../components/Card';
import mockArtistsData from './Artists/dbData.json';
import mockArtworksData from './Artworks/dbArtworks.json';

const HomePage = () => {
  const [artists] = useState(mockArtistsData.artists);
  const [artworks] = useState(mockArtworksData.artworks);
  const router = useRouter();

  const handleArtworkClick = (artworkId) => {
    router.push(`/Artworks/${artworkId}`);
  };

  return (
    <div className="min-h-screen  text-gray-800 dark:text-gray-100">
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="bg-gradient-to-r from-blue-600/90 via-blue-500/70 to-blue-600/90 p-6 md:p-10 rounded-lg text-white shadow-lg mx-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 drop-shadow-lg">Welcome to the Art Market</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 drop-shadow-md">Discover artworks and support artists worldwide.</p>
          <Link href="/Artworks">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 md:px-8 py-3 md:py-4 text-white font-bold rounded-full transition-transform transform hover:scale-105 shadow-lg">
              Explore Artworks
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Artworks */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">🖼️ Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.slice(0, 6).map((artwork) => (
            <div
              key={artwork.id}
              className="cursor-pointer"
              onClick={() => handleArtworkClick(artwork.id)}
            >
              <Card
                imgSrc={artwork.picture}
                title={artwork.title}
                artist={artwork.artistName}
                price={artwork.price}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-b-2 border-blue-300 dark:border-blue-600"></div>
      </div>

      {/* Main Features */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-blue-500">Zero Platform Fees</h3>
          <p className="text-gray-600 dark:text-gray-300">Artists keep 100% of their sales. No hidden fees or commissions - maximize your earnings.</p>
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-blue-500">Secure Transactions</h3>
          <p className="text-gray-600 dark:text-gray-300">Protected payments and verified shipping ensure a safe buying experience for collectors.</p>
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-blue-500">Exclusive Ownership</h3>
          <p className="text-gray-600 dark:text-gray-300">Each artwork comes with verified licensing and authentication for single-owner exclusivity.</p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-b-2 border-blue-300 dark:border-blue-600"></div>
      </div>

      {/* Featured Artists */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">🎨 Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.slice(0, 3).map((artist) => (
            <ArtistComponent key={artist.id} artist={artist} artworks={artworks} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-blue-500 text-white text-center py-16 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Art Journey?</h2>
          <p className="mb-6">Begin your journey with zero fees.</p>
          <Link href="/SignUp">
            <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start now
            </button>
          </Link>
          <br />
          <Link href="/SignIn">
            <button className="text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
              Already a Member? Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Art Market. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
