export interface IPagination{
    currentPage: number;
    totalPages: number;
    prevPage: () => void;
    nextPage: () => void;
}