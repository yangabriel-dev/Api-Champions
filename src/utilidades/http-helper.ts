interface HttpReponse {
    statusCode: number;
    body: any;
}

export const ok = async(data:any): Promise<HttpReponse> =>{
    return{
        statusCode: 200,
        body: data
    }
}