import Main, {type MainProps} from '../../pages/main/main.tsx';

type AppProps = MainProps

function App({offersCount}: AppProps) {
  return (
    <Main offersCount={offersCount} />
  );
}

export default App;
