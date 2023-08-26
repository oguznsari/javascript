function generateHashtag (str) {
    const trimmed = str.trim();

    if (trimmed.length === 0) {
        return false;
    }

    const result = "#" + trimmed.split(/\s+/)
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join("");

    if (result.length > 140) {
        return false;
    }  
       
    console.log({result});
}

generateHashtag("     O sari    new hasTag");