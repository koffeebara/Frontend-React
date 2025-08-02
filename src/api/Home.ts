import axios from "axios";

// 개발 환경에서는 프록시 사용, 배포 환경에서는 실제 API URL 사용
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export interface ProductResponse {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

export interface ReviewResponse {
  id: number;
  authorName: string;
  rating: number;
  comment: string;
  imageUrls: string;
  createdAt: string;
}

export interface ApiResponse {
  success: boolean;
  response: ProductResponse[];
  error: null | string;
}

export interface ReviewApiResponse {
  success: boolean;
  response: ReviewResponse[];
  error: null | string;
}

export const fetchProducts = async (): Promise<ApiResponse> => {
  const response = await axios.get(`${API_BASE_URL}/api/products`);
  console.log("Fetched products:", response.data);
  return response.data;
};

export const fetchProductsReview1 = async (): Promise<ReviewApiResponse> => {
  const response = await axios.get(`${API_BASE_URL}/api/products/1/reviews`);
  console.log("Fetched reviews for product 1:", response.data);
  return response.data;
};

export const fetchProductsReview2 = async (): Promise<ReviewApiResponse> => {
  const response = await axios.get(`${API_BASE_URL}/api/products/2/reviews`);
  return response.data;
};
