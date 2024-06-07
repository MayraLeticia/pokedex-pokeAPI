export const primeiraMaiuscula = (word) => {
    return word[0].toUpperCase() + word.substring(1)
}

export const formatPokemonId = (id) => {
    return String(id).padStart(3, '0');
};

export const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};