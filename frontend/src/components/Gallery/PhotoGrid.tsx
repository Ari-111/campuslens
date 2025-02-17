import { useState, useEffect } from 'react';
import { photoService } from '../../services/api';
import PhotoCard from './PhotoCard';
import { useAuth } from '../../context/AuthContext';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await photoService.getPhotos();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <div className="text-center">Loading photos...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      {isAuthenticated && (
        <button
          className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700"
          onClick={() => {/* TODO: Implement upload modal */}}
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default PhotoGrid; 