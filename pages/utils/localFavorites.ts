const toggleFavorite = (id: number) => {
    console.log("toggleFavorite call");

    let favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );
    if (favorites.includes(id)) {
        favorites = favorites.filter((pokeId) => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const checkFavorite = (id: number): boolean => {
    if (typeof window === "undefined") return false;

    let favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

    return favorites.includes(id);
};

const pokemons = () => {
    
    let favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

    return favorites;
};

export default {
    toggleFavorite,
    checkFavorite,
    pokemons
};
