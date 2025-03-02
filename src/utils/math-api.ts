import { TMatch } from './types';

const URL = process.env.API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
  ok: boolean;
} & T;

export type TMatchesResponse = TServerResponse<{
  data: {
    matches: TMatch[];
  };
}>;

export const fetchWithRefresh = async <T>(
  url: RequestInfo,
  options: RequestInit
) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse<T>(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getMatches = () =>
  fetchWithRefresh<TMatchesResponse>(`${URL}/fronttemp`, {
    method: 'GET'
  }).then((data) => {
    if (data?.ok) return data.data.matches;
    return Promise.reject(data);
  });
