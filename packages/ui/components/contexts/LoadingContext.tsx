import { createContext, useState, ReactNode, useContext } from 'react';

type LoadingContextProps = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextProps>({
  isLoading: false,
  setIsLoading: () => {}
});

export const LoadingContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  return useContext(LoadingContext) as LoadingContextProps;
};
