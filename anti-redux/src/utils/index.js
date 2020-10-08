import moment from 'moment';
import GLOBAL from './config/global';
import 'moment/locale/ko';

const deployType = process.env.REACT_APP_DEPLOY_TYPE
  ? process.env.REACT_APP_DEPLOY_TYPE
  : process.env.NODE_ENV;

export const envType = deployType;

// base url 주소
export const base_url = GLOBAL[deployType]['base_url'];

// APIManager
export { default as ApiManager } from './ApiManager';

// Message
export { default as MessageAlert } from './MessageAlert';

//Notification
export { default as Notification } from './Notification';

//DateManager
export { default as DateManager } from './DateManager';

// 글자수 자르기(Default 5)
export const cutString = (str, len = 5) => {
  const returnStr = String(str).substr(0, len);
  return returnStr;
};

/**
 * @title stringToMoneyFormat
 * @description 금액 포맷터
 * @param (v:Number, unit:String)
 */
export const stringToMoneyFormat = (v = 0, unit = '') => {
  // const value = String(isNull(v) ? 0 : v)
  const value = String(v ? v : 0)
    .split('')
    .reverse()
    .join('');
  const valueLength = value.length;
  let result = '';
  for (let ii in value) {
    result += String(value[ii]);
    if ((ii + 1) % 3 === 0 && ii < valueLength - 1) {
      result += ',';
    }
  }
  return `${result.split('').reverse().join('')}${unit}`;
};

/**
 * @title getCookie
 * @description 쿠키찾기
 * @param name:String
 */
export const getCookie = (name, options = null) => {
  const value = window.document.cookie.match(
    '(^|;) ?' + name + '=([^;]*)(;|$)'
  );
  return value ? value[2] : null;
};

/**
 * @title setCookie
 * @description 쿠키저장
 * @param (name:String, value:String, callback:Func)
 */
export const setCookie = (name, value, callback = false) => {
  window.document.cookie = `${name}=${value}; path=/`;
  if (callback) callback();
};

/**
 * @title deleteCookie
 * @description 쿠키삭제
 * @param (name:String, option:Object (path:String, domain:String))
 */
export const deleteCookie = (name, { path, domain }) => {
  if (getCookie(name)) {
    window.document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};

/**
 * @title setSession
 * @description 세션 저장
 * @param (key:String, value:Object)
 * @return Success => true
 * @return Failure => false
 */
export const setSession = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
  if (getSession(key) !== null) {
    return true;
  }
  return false;
};

/**
 * @title getSession
 * @description 세션 불러오기
 * @param key:String
 * @return Success => Object
 * @return Failure => null
 */
export const getSession = (key) => {
  const session = window.sessionStorage.getItem(key);
  return JSON.parse(session);
};

/**
 * @title clearSession
 * @description 세션 초기화
 */
export const clearSession = () => {
  window.sessionStorage.clear();
};

/**
 * @title getAddress
 * @description 주소 나누기
 * @return String{  }
 */
export const getAddress = (addr) => {
  const [num, addr1, addr2] = addr.split('|');
  return `${addr1} ${addr2}(${num})`;
};

/**
 * @title getDays
 * @description 일수 계산
 * @param (start:Date, end:Date)
 */
export const getDays = (start, end) => {
  if (!start && !end) {
    return;
  }
  const start_date = moment(start);
  const end_date = moment(end);
  return Math.ceil(
    (moment().millisecond(end_date) - moment().millisecond(start_date)) /
      (1000 * 3600 * 24)
  );
};
