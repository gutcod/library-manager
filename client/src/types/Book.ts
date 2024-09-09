export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    description: string;
}

export interface ApiResponse<T> {
    data: T;
}