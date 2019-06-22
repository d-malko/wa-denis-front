export class ApiRequest {
    constructor(domain) {
        this.domain = domain;
    }

    _createRequest(METHOD, resourceUrl, onSuccess, onError) {
        const xhr = new XMLHttpRequest();

        xhr.open(METHOD, this.domain + resourceUrl);
        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
                console.log(xhr);
                if (xhr.status >= 500 || xhr.status >= 400) {
                    console.log(typeof xhr.response);
                    onError(xhr.error);
                } else if(xhr.status >= 300 || xhr.status=== 200){
                    console.log(typeof xhr.response);
                    onSuccess(xhr.response);
                }
            }
        });
    }

    get(resourceUrl, onSuccess, onError) {
        this._createRequest('GET', resourceUrl, onSuccess, onError);
    }

    delete(resourceUrl, onSuccess, onError) {
        this._createRequest('DELETE', resourceUrl, onSuccess, onError);
    }

    post(resourceUrl, body, onSuccess, onError) {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', this.domain + resourceUrl);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
                console.log(xhr);
                if (xhr.status >= 500 || xhr.status >= 400) {
                    console.log(typeof xhr.response);
                    onError(xhr.error);
                } else if(xhr.status >= 300 || xhr.status=== 200){
                    console.log(typeof xhr.response);
                    onSuccess(xhr.response);
                }
            }
        });
    }
}