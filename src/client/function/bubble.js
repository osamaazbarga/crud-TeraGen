import Api from '../components/API/MainApi'

export async function createBubble(sub) {
    console.log(sub);
    const req = await Api.post(`/addbubble`,sub.value)
    return req
}

export async function getBubbles() {
    const req = await Api.get(`/getbubbles`)
    return req
}