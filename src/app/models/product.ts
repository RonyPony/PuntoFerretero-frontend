export interface Product {
    productId?: string;
    productName: string;
    productCategoryId: string;
    itenCount: string;
    createdDate?: string;
    updatedDate?: string;
    isDeleted?: boolean;
    description: string;
    discount: string;
    sellingPrice: number;
    buyingPrice: number;
}
