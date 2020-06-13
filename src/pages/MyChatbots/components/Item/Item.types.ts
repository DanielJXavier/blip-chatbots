export type PropsType = {
  key: number;
  image: string;
  name: string;
  template: string;
  created: string;
  isFavorite: boolean;
  isList: boolean;
  handleFavoriteClick: () => void;
}
