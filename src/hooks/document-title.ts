import {useEffect} from 'react';

const restoreOriginalTitle = () => {
  const initialTitle = document.title;

  return () => {
    document.title = initialTitle;
  };
};

function useDocumentTitle(title: string) {
  useEffect(restoreOriginalTitle, []);

  useEffect(() => {
    document.title = `${title} | 6 cities`;
  }, [title]);
}

export {useDocumentTitle};
