// Public imports
import axios from 'axios';
import { del, get, post, put } from './http';
import { getVerifyValues } from '../auth/auth';
const pidBaseURL = process.env.NEXT_PUBLIC_PID_BASE_URL;
const countryBaseURL = process.env.NEXT_PUBLIC_COUNTRY_BASE_URL;

// Import types
import { initialState } from '@/redux/features/auth/auth-slice';
import { InsertAddressTypes } from '@/types/types';


//* GetById requests
export const getProfile = async () => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/profile';
    return await get(url, authValue.token);
  } else {
    return null;
  }
};

export const getUser = async () => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/user/' + authValue.userId;
    return await get(url, authValue.token);
  } else {
    return null;
  }
};

export const getPersonalInfo = async () => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/personal/user/' + authValue.userId;
    try {
      return await get(url, authValue.token);
    } catch (err) {
      const { status } = err as { status: number };
      if (status === 404) {
        return {};
      }
    }
  } else {
    return null;
  }
};

export const getProvincesByCountry = async (countryId: number) => {
  const url = countryBaseURL + 'api/province/country/' + countryId;
  try {
    return await axios.get(url).then((res) => res.data);
  } catch (err) {
    return null;
  }
};

export const getCityByProvince = async (provinceId: number) => {
  const url = countryBaseURL + 'api/city/province/' + provinceId;
  try {
    return await axios.get(url).then((res) => res.data);
  } catch (err) {
    return null;
  }
};

export const getBoroughByCity = async (cityId: number) => {
  const url = countryBaseURL + 'api/borough/city/' + cityId;
  try {
    return await axios.get(url).then((res) => res.data);
  } catch (err) {
    return null;
  }
};

//* Get all requests
export const getUserAddresses = async () => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/address/user/' + authValue.userId;
    return await get(url, authValue.token);
  } else {
    return null;
  }
};

export const getAllSessions = async () => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/session';
    const res = await get(url, authValue.token);
    return {
      sessions: res,
      activeToken: authValue.token,
    };
  } else {
    return null;
  }
};

export const getAllSitesUser = async () => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/userSite/user/' + authValue.userId;
    return await get(url, authValue.token);
  } else {
    return null;
  }
};

export const getAllCountries = async () => {
  const url = countryBaseURL + 'api/country';
  try {
    const countries = await axios.get(url);
    return countries.data;
  } catch {
    return null;
  }
};

export const getProvincesOfCountry = async (provinceId: string) => {
  const url = countryBaseURL + 'api/province/country/' + provinceId;
  try {
    const countries = await axios.get(url);
    return countries.data;
  } catch {
    return null;
  }
};

//* Add requests
export const createUser = async (body: createUserBodyTypes) => {
  const url = pidBaseURL + 'api/user';
  return await axios.post(url, body).then((data) => data.data);
};

export const createPersonal = async (body: unknown) => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/personal';
    return await post(url, body, authValue.token);
  } else {
    throw new Error('Invalid token');
  }
};

export const insertAddress = async (body: InsertAddressTypes) => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/address';
    return await post(url, { ...body, userId: authValue.userId }, authValue.token);
  } else {
    throw new Error('Invalid token');
  }
};

//* Put requests
export const updateUser = async (body: unknown) => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = `${pidBaseURL}api/user/${authValue.userId}`;
    return await put(url, body, authValue.token);
  } else {
    throw new Error('Invalid token');
  }
};

export const updateUserPersonal = async (body: unknown) => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = `${pidBaseURL}api/personal/user/${authValue.userId}`;
    return await put(url, body, authValue.token);
  } else {
    throw new Error('Invalid token');
  }
};

export const updateAddress = async (body: unknown, addressId: number) => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = `${pidBaseURL}api/address/${addressId}`;
    return await put(url, body, authValue.token);
  } else {
    throw new Error('Invalid token');
  }
};

//* Delete requests
export const removeSession = async (id: string) => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = `${pidBaseURL}api/session/${id}`;
    return await del(url, authValue.token);
  } else {
    throw new Error('Invalid token');
  }
};

// ------ Other
//* Generate OTP
export const generateOtp = async (phoneNumber: string) => {
  const url = `${pidBaseURL}api/user/generateOtp/${phoneNumber}`;
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch(() => null);
};

export const generateOtpWhatsapp = async (phoneNumber: string) => {
  const url = `${pidBaseURL}api/user/generateWhatsappOtp/${phoneNumber}`;
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch(() => null);
};
