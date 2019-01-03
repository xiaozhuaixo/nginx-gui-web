import { setTokenStorage , getTokenLocalStorage , removeLocalStorage } from './storage'

const TokenKey = 'X-Auth-Token';

export function getToken() {
  return getTokenLocalStorage(TokenKey);
}

export function setToken(token) {
  return setTokenStorage(TokenKey, token)
}

export function removeToken() {
  return removeLocalStorage(TokenKey)
}
