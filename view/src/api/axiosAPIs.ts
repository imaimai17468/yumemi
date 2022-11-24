import axios from "axios";

export const prefecturesAPI = axios.create({
    baseURL: "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
    },
});

export const populationAPI = (prefCode: number) => axios.create({
    baseURL: "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=" + prefCode,
    headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
    },
});