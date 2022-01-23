import { config } from '../config';

/* 
This is the frontend making a call to the backend node server (which will in turn make
the actual api call). We keep the two separate for security and for modularity. We should
do as much of the request/response processing as we can here.
*/
export async function testBackend() {
    console.log("In frontend api handler.")
    var requestUrl = new URL(config.HOST + config.networking.BACKEND_PORT + '/test');
    let response : any = await fetch(requestUrl.href, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      console.log("Something went wrong with request to node server!")
    }else{
      console.log("Returned from node server.")
    }

    return response.json();
}