(function (){
// async function ff(){
//     let usersPosts;
//
//     try {
//         let responseName = await fetch(
//             'https://jsonplaceholder.typicode.com/users/');
//         let users = await responseName.json();
//
//         usersPosts = users.reduce((obj,next) =>{
//             obj[next.id] = [next.name];
//             return obj;
//         },[])
//
//         // console.log(usersPosts)
//     } catch (e) {
//         console.log("Ошибка HTTP: " + e)
//     }
//
//     let responseTitle = await fetch(
//         'https://jsonplaceholder.typicode.com/posts');
//
//     let posts = await responseTitle.json();
//
//     posts.reduce((prev, next) =>{
//         if (usersPosts[next.id]){
//             usersPosts[next.id].push(next.title);
//             usersPosts[next.id].push(next.body);
//         }
//     })
//
//     return usersPosts;
// }
//
// ff().then(data => {
//     const table = document.createElement('table');
//     const tHead = table.createTHead();
//     const tHeadRow = tHead.insertRow()
//     const tHeadName = tHeadRow.insertCell();
//     const tHeadTitle = tHeadRow.insertCell();
//     const tHeadPost = tHeadRow.insertCell();
//     let tBody = table.createTBody();
//
//     tHeadName.textContent = "Name";
//     tHeadTitle.textContent = "Title";
//     tHeadPost.textContent = "Post";
//
//     tBody = data.reduce((prev, next) =>{
//         const tBodyRow =  prev.insertRow();
//         const tBodyName = tBodyRow.insertCell()
//         const tBodyTitle = tBodyRow.insertCell()
//         const tBodyPost = tBodyRow.insertCell()
//         tBodyName.textContent = next[0];
//         tBodyTitle.textContent = next[1];
//         tBodyPost.textContent = next[2];
//         return prev;
//     },tBody)
//
//     document.body.append(table)
// })

    async function ff(){
        let usersPosts;

        const urls = [
            'https://jsonplaceholder.typicode.com/users',
            'https://jsonplaceholder.typicode.com/posts',
        ]

        const requests = urls.map(url => fetch(url));

        Promise.all(requests).then(async data => {
            let [responseNames, responsePosts] = data;

            const users = await responseNames.json();
            console.log(users)

            usersPosts = users.reduce((obj, next) => {
                obj[next.id] = [next.name];
                return obj;
            }, []);

            let posts = await responsePosts.json();

            posts.reduce((prev, next) => {
                if (usersPosts[next.id]) {
                    usersPosts[next.id].push(next.title);
                    usersPosts[next.id].push(next.body);
                }
            })
            console.log(usersPosts)
        })/*.then(d => {
            return usersPosts
        })*/

        // return usersPosts;
    }

    ff().then(data => {console.log(data)
        // const table = document.createElement('table');
        // const tHead = table.createTHead();
        // const tHeadRow = tHead.insertRow()
        // const tHeadName = tHeadRow.insertCell();
        // const tHeadTitle = tHeadRow.insertCell();
        // const tHeadPost = tHeadRow.insertCell();
        // let tBody = table.createTBody();
        //
        // tHeadName.textContent = "Name";
        // tHeadTitle.textContent = "Title";
        // tHeadPost.textContent = "Post";
        //
        // data.reduce((prev, next) =>{
        //     const tBodyRow =  prev.insertRow();
        //     const tBodyName = tBodyRow.insertCell()
        //     const tBodyTitle = tBodyRow.insertCell()
        //     const tBodyPost = tBodyRow.insertCell()
        //     tBodyName.textContent = next[0];
        //     tBodyTitle.textContent = next[1];
        //     tBodyPost.textContent = next[2];
        //     return prev;
        // },tBody)
        //
        // document.body.append(table)
    })

}())