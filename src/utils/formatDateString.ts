export default (dateString: string) => dateString.replace(/^([0-9]{4})-([0-9]{2})-([0-9]{2}).*$/, '$3/$2/$1');
