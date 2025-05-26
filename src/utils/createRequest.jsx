import { StaticPage } from "../pages/StaticPage/StaticPage";
import { NotFound } from "../pages/StaticPage/Notfound";

const baseURL = 'http://localhost:7070/api/';

// создание и обработка запроса к серверу
export function createRequest(url, stopLoading, options) {

    return new Promise((resolve, reject) => {
        fetch(baseURL + url, {
            ...options,
        })
            .then((response) => {
                switch (response.status) {
                    case 200:
                        return response.json();
                    case 204:
                        resolve();
                        break;
                    case 400:
                        return response.text();
                    case 404:
                        reject(<StaticPage header="Страница не найдена"><NotFound /></StaticPage>);
                        break;
                    default:
                        throw response.statusText;
                }
            })
            .then((data) => {
                if (Array.isArray(data) && !data.length) {
                    const isOffsetQuery = url.split('=')
                        .slice(0, -1)
                        .pop()
                        .endsWith('offset');

                    if (isOffsetQuery) {
                        resolve([]);
                    } else {
                        resolve('Нет данных для просмотра');
                    }
                } else if (typeof data === 'string') {
                    reject(data);
                } else {
                    resolve(data);
                }
            })
            .catch((error) => {
                reject(
                    `${error.message || error}`,
                );
            })
            .finally(stopLoading);
    });
}
