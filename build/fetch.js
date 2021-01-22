(function (){
    async function compilingPostsData() {
        let usersPosts;

        const urls = [
            'https://jsonplaceholder.typicode.com/users',
            'https://jsonplaceholder.typicode.com/posts',
        ];

        try {
            const requests = urls.map(url => fetch(url));

            const responses = await Promise.all(requests);

            let [responseNames, responsePosts] = responses;

            const allNames = await responseNames.json();

            const allPosts = await responsePosts.json();

            usersPosts = allNames.reduce((obj, next) => {
                obj[next.id] = [next.name];
                return obj;
            }, []);

            for (let user of allPosts) {
                if (usersPosts[user.id]) {
                    usersPosts[user.id].push(user.title);
                    usersPosts[user.id].push(user.body);
                }
            }

            return usersPosts;
        } catch (e) {
            console.log(`ОШИБКА ${e}`);
        }

    }

    compilingPostsData().then(data => {
        const table = document.createElement('table');
        table.style.width = 600 + 'px';

        const tHead = table.createTHead();
        const tHeadRow = tHead.insertRow()
        const tHeadName = tHeadRow.insertCell();
        const tHeadTitle = tHeadRow.insertCell();
        const tHeadPost = tHeadRow.insertCell();
        let tBody = table.createTBody();

        tHeadName.textContent = "Name";
        tHeadTitle.textContent = "Title";
        tHeadPost.textContent = "Post";

        data.reduce((prev, next) => {
            const tBodyRow = prev.insertRow();
            const tBodyName = tBodyRow.insertCell();
            const tBodyTitle = tBodyRow.insertCell();
            const tBodyPost = tBodyRow.insertCell();
            tBodyName.textContent = next[0];
            tBodyTitle.textContent = next[1];
            tBodyPost.textContent = next[2];
            return prev;
        }, tBody)

        document.body.append(table);
    }).catch(console.log);

}())