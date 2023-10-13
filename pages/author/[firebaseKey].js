import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});

  // TODO: Call Router Hook
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  const getAuthDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    getAuthDetails();
  }, []);

  return (
    <div>{authorDetails.books?.map((book) => (
      <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAuthDetails} />
    ))}
    </div>
  );
}
