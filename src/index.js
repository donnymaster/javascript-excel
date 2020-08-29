import './scss/index.scss'


async function start() {
    return await new Promise((res, rej) => {
        setTimeout(() => {
            res('working async')
        }, 3000)
    });
}

start()
	.then((data) => console.log(data))
