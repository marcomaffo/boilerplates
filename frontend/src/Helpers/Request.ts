async function responseHandler(response: Response) {
  const returnText = await response.text();
  let returnValue: any;
  try {
    returnValue = JSON.parse(returnText);
  } catch (e) {}
  if (response.status >= 400) {
    throw new Error(returnValue)
  }
  return returnValue;
}

async function bodyRequest(method: string, url: string, parameters?: any): Promise<any> {
  const options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: parameters && JSON.stringify(parameters),
  };
  const response = await fetch(url, options);
  return responseHandler(response);
}

async function urlRequest(method: string, url: string, parameters?: {[key: string]: string}) {
  const options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  };
  const _url = new URL(url);
  if (parameters) {
    for (const key of Object.keys(parameters)) {
      if (parameters.hasOwnProperty(key)) {
        const value = parameters[key];
        _url.searchParams.append(key, value);
      }
    }
  }
  const response = await fetch(_url.href, options)
  return responseHandler(response);
}

export default class Request {
  static get(url: string, parameters?: {[key: string]: string}) {
    return urlRequest('GET', url, parameters);
  }
  static delete(url: string, parameters?: {[key: string]: string}) {
    return urlRequest('DELETE', url, parameters);
  }
  static post(url: string, parameters?: any) {
    return bodyRequest('POST', url, parameters);
  }
  static put(url: string, parameters?: any) {
    return bodyRequest('PUT', url, parameters);
  }
}