import AppRoutes from "./routes/Routes";
import { PokemonProvider } from './services/PokemonProvider';

function App() {
	return (
		<PokemonProvider>
			<AppRoutes />
		</PokemonProvider>
	);
}

export default App;