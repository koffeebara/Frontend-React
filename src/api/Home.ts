import axios from "axios";

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
  try {
    const response = await axios.get("api/products");
    console.log("Fetched products:", response.data);
    return response.data;
  } catch (error) {
    console.error("Products API 에러:", error);
    return {
      success: false,
      response: [],
      error: "상품 데이터를 불러올 수 없습니다.",
    };
  }
};

export const fetchProductsReview1 = async (): Promise<ReviewApiResponse> => {
  try {
    const response = await axios.get("api/projects/1/reviews");
    console.log("Fetched reviews for product 1:", response.data);
    return response.data;
  } catch (error) {
    console.error("Product 1 리뷰 API 에러:", error);
    return {
      success: false,
      response: [],
      error: "리뷰 데이터를 불러올 수 없습니다.",
    };
  }
};

export const fetchProductsReview2 = async (): Promise<ReviewApiResponse> => {
  try {
    const response = await axios.get("api/projects/2/reviews");
    console.log("Fetched reviews for product 2:", response.data);
    return response.data;
  } catch (error) {
    console.error("Product 2 리뷰 API 에러:", error);
    return {
      success: false,
      response: [],
      error: "리뷰 데이터를 불러올 수 없습니다.",
    };
  }
};

export interface ProjectResponse {
  projectId: number;
  projectTitle: string;
  farmer: {
    name: string;
    location: string;
    specialNote: string;
  };
  price: number;
  productImageUrl: string;
}

export interface DiaryResponse {
  diaryId: number;
  content: string;
  status: string;
  imageUrl: string;
  tag: string;
  createdAt: string;
}

export interface ProjectsApiResponse {
  success: boolean;
  response: ProjectResponse[];
  error: null | string;
}

export interface DiaryApiResponse {
  success: boolean;
  response: DiaryResponse[];
  error: null | string;
}

export const fetchLatestProjects = async (): Promise<ProjectsApiResponse> => {
  try {
    const response = await axios.get("api/projects/latest");
    console.log("Fetched latest projects:", response.data);
    return response.data;
  } catch (error) {
    console.error("Latest projects API 에러:", error);
    return {
      success: false,
      response: [],
      error: "프로젝트 데이터를 불러올 수 없습니다.",
    };
  }
};

export const fetchProjectDiaries = async (
  projectId: number
): Promise<DiaryApiResponse> => {
  try {
    const response = await axios.get(`api/products/${projectId}/diaries`);
    console.log(`Fetched diaries for project ${projectId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Project ${projectId} 일지 API 에러:`, error);
    return {
      success: false,
      response: [],
      error: "프로젝트 일지 데이터를 불러올 수 없습니다.",
    };
  }
};
