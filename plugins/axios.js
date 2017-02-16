/**
 * Created by evgeniy on 07.02.17.
 */
import axios from 'axios'
export default axios.create({
    baseURL: process.env.baseUrl
})