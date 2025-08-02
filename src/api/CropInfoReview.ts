import axios from "axios";

// 개발 환경에서는 프록시 사용, 배포 환경에서는 실제 API URL 사용
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export interface CropReviewResponse {
  id: number;
  authorName: string;
  rating: number;
  comment: string;
  imageUrls: string;
  createdAt: string;
}

export interface CropApiResponse {
  success: boolean;
  response: CropReviewResponse[];
  error: null | string;
}

export const fetchCropInfoReviews = async (): Promise<CropApiResponse> => {
  const response = await axios.get(`${API_BASE_URL}/api/reviews/latest`);
  console.log("Fetched products:", response.data);
  return response.data;
};