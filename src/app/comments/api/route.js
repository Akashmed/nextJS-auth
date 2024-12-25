export async function GET() {
    return Response.json(comments, {
        headers:{
            'set-cookie': "token=hga83hf383gja334"
        }
    })
}

const comments = [
    {
        id: 1,
        msg: 'first'
    },
    {
        id: 2,
        msg: 'second'
    },
    {
        id: 3,
        msg: 'third'
    },
]