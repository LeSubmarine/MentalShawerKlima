import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


interface IFan {
    "sensorID": number,
    "roomID": string,
    "temperature": number,
    "humidity": number,
    "cO2": number,
    "pressure": number
}

//localhost temporary
let baseUrl = 'https://apimentalshowerindoor.azurewebsites.net/api/indoorclimate';

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        fans: [],
        fan: {}
    },
    methods: {
        async getAllFans() {
            let response = await this.getAllFansAsync();
            this.fans = response.data;
            this.fan = response.data[response.data.length - 1];
        },
        async getAllFansAsync() {
            try { return axios.get<IFan[]>(baseUrl, {headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS","Access-Control-Allow-Credentials": "true"} } ) }
            catch (error: AxiosError) {
                this.message = error.message;
                alert(error.message)
            }
        }
    }
    // ,
    // computed:{
    //     fan : function() {
    //         return this.getAllToDos()[0];
    //     }
    // }
})


