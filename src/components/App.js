import { RecipeList } from "../components/RecipeList/RecipeList";
import recipes from '../recipes.json'
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle></GlobalStyle>
    </Layout>
  );
};
