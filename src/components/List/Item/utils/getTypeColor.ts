const UNDEFINED_TYPE_COLOR = "#d1d";
const TYPES_COLORS: {
    [key: string]: string;
} = {
    single: "#fff",
    multiple: "#cbc",
};

export const getTypeColor = (type: string): string => TYPES_COLORS[type] || UNDEFINED_TYPE_COLOR;
