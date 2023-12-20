/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";

// 定义请求和响应的数据类型
interface ApiResponse<T> {
	success: boolean;
	data?: T;
	error?: string;
}

// 创建一个 axios 实例
const instance = axios.create({
	// 配置你的基本 URL、超时等
	// baseURL: "https://blog.verivista.cn/api/",
	timeout: 10000,
	withCredentials: true,
});

// 请求拦截器
instance.interceptors.request.use(
	(config) => {
		// 在请求发送前可以做一些处理
		config.headers["Content-Type"] = "application/json";

		// // 获取名为 "token" 的 Cookie
		// const tokenCookie = document.cookie
		// 	.split("; ")
		// 	.find((cookie) => cookie.startsWith("token="));

		// // 提取 token 的值
		// const tokenValue = tokenCookie ? tokenCookie.split("=")[1] : null;

		// // 如果存在 token，则设置到请求头中
		// if (tokenValue) {
		// 	if (isTokenExpired(tokenValue)) {
		// 		config.headers["Authorization"] = `Bearer ${tokenValue}`;
		// 	}
		// }

		config.params = {
			...config.params,
			t: new Date().getTime(),
		};
		return config;
	},
	(error) => {
		// 处理请求错误
		return Promise.reject(error);
	}
);

// 响应拦截器
instance.interceptors.response.use(
	(response) => {
		// 在响应返回后可以做一些处理
		return response;
	},
	(error) => {
		// 处理响应错误
		// handleErrorResponse(error);
		return Promise.reject(error);
	}
);

// 封装 GET 请求
export const get = async <T>(
	url: string,
	config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
	try {
		const response = await instance.get<T>(url, config);
		return { success: true, data: response.data };
	} catch (error: any) {
		return { success: false, error: error.message || "Request failed" };
	}
};

// 封装 POST 请求
export const post = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
	try {
		const response = await instance.post<T>(url, data, config);
		return { success: true, data: response.data };
	} catch (error: any) {
		return { success: false, error: error.message || "Request failed" };
	}
};

// 封装 PUT 请求
export const put = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
	try {
		const response = await instance.put<T>(url, data, config);
		return { success: true, data: response.data };
	} catch (error: any) {
		return { success: false, error: error.message || "Request failed" };
	}
};

// 封装 DELETE 请求
export const del = async <T>(
	url: string,
	config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
	try {
		const response = await instance.delete<T>(url, config);
		return { success: true, data: response.data };
	} catch (error: any) {
		return { success: false, error: error.message || "Request failed" };
	}
};

// // 处理响应错误的函数
// const handleErrorResponse = (error: any) => {
// 	// 检查是否是 token 过期的错误，根据实际情况修改
// 	if (error.response && error.response.status === 401) {
// 		console.log("Token expired or invalid! Redirecting to login page...");
// 		// 清除 token
// 		document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// 		// 可以跳转到登录页
// 		// router.push('/login');
// 	}
// };

// // 判断 Token 是否过期的函数，根据实际情况修改
// const isTokenExpired = (token: string | null): boolean => {
// 	// 实际情况中，可能需要解码 token 并检查是否过期
// 	// 返回 true 表示过期，返回 false 表示未过期
// 	return false;
// };
