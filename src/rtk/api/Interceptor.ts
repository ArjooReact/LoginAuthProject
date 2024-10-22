const getInterceptor = (url: string, params: any, token?: string | undefined) => {
    return {
        url,
       // method: 'post',
        params,
        method: 'POST',
       headers: { 'Content-Type': 'application/json' },
    }
}

export default getInterceptor