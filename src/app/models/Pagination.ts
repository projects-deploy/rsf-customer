export interface Pagination<T> {
    "content": T[],
    "pageable": Pageable,
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    "sort": Sort,
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

interface Sort {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
}

interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: false;
}