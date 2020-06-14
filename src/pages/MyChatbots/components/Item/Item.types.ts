export type PropsType = {
  shortName: string;
  image: string;
  name: string;
  template: string;
  created: string;
  isFavorite: boolean;
  isList: boolean;
  handleFavoriteClick: () => void;
}
