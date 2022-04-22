export const imageStyle = {
    width: "auto",
    height: "auto",
    objectFit: "contain",
}

export const textStyle = {
    wordWrap: "break-word",
}

export const getBorderStyle = (active, id) => {
    if (active === id) return "primary";
    return "light";
};
