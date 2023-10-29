declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.csv" {
    const content: Array<T>;
    export default content;
}

declare module "*.tsv" {
    const content: Array<T>;
    export default content;
}
