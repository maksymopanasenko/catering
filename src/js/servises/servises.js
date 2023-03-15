const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};


const getResource = async (url) => {
    // try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    // } catch(e) {
    //     const parent = document.querySelector('.menu__field .container');
    //     const errorMessageBlock = document.createElement('div');
    //     errorMessageBlock.style.cssText = `
    //         margin: 0 auto;
    //         color: red;
    //     `;
    //     errorMessageBlock.innerHTML = 'Please, run json-server in order to correct work of backend servises';
    //     parent.append(errorMessageBlock);

    //     console.log("Please, run json-server in order to correct work of backend servises");
    // }
    
};



export {postData, getResource};