// Stylesheet formats

declare module "*.module.scss" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.module.css" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.scss" {
    const content: string;
    export default content;
}

declare module "*.css" {
    const content: string;
    export default content;
}

// Image formats

declare module "*.jpg" {
    const content: string;
    export default content;
}

declare module "*.jpeg" {
    const content: string;
    export default content;
}

declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.gif" {
    const content: string;
    export default content;
}

declare module "*.bmp" {
    const content: string;
    export default content;
}

declare module "*.webp" {
    const content: string;
    export default content;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

// Font formats

declare module "*.woff" {
    const content: string;
    export default content;
}

declare module "*.woff2" {
    const content: string;
    export default content;
}

declare module "*.ttf" {
    const content: string;
    export default content;
}
