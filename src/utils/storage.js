export function setSessionStorage(key , value){
  window.sessionStorage.setItem(key , JSON.stringify(value));
}

export function getSessionStorage(key){
  return JSON.parse(window.sessionStorage.getItem(key));
}

export function setLocalStorage(key , value){
  window.localStorage.setItem(key , JSON.stringify(value));
}

export function getLocalStorage(key){
  let result = window.localStorage.getItem(key);
  if(!result || result === 'undefined'){
    return undefined;
  }
  return JSON.parse(result);
}

export function getTokenLocalStorage(key){
  return window.localStorage.getItem(key);
}

export function removeLocalStorage(key){
  window.localStorage.removeItem(key);
}

export function clearStorage(){
  window.localStorage.clear();
  window.sessionStorage.clear();
}


export function setTokenStorage(key , value){
  window.localStorage.setItem(key , value)
}
