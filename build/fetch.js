(function () {
    async function showPosts() {
        const urls = [
            'https://jsonplaceholder.typicode.com/users',
            'https://jsonplaceholder.typicode.com/posts',
        ];

        try {
            let usersPosts = {};
            const requests = urls.map(url => fetch(url));
            const responses = await Promise.all(requests);
            const [responseNames, responsePosts] = responses;
            // Возможно объеденить сразу оба, суть в том, что тебе не нужно ждать завершения одного,
            // чтобы начать преобразовывать другой ( они не зависимы друг от друга )
            const allNames = await responseNames.json();
            const allPosts = await responsePosts.json();

            usersPosts = allPosts.reduce((obj, next) => {
                obj[next.id] = {};
                obj[next.id].post = next.body;
                obj[next.id].title = next.title;
                return obj;
            }, {});

            for (let user of allNames) {
                if (usersPosts[user.id]) {
                    usersPosts[user.id].name = user.name;
                }
            }

            const table = document.createElement('table');
            table.style.width = 600 + 'px';

            const tHead = table.createTHead();
            const tHeadRow = tHead.insertRow()
            const tHeadName = tHeadRow.insertCell();
            const tHeadTitle = tHeadRow.insertCell();
            const tHeadPost = tHeadRow.insertCell();
            const tBody = table.createTBody();

            tHeadName.textContent = 'Name';
            tHeadTitle.textContent = 'Title';
            tHeadPost.textContent = 'Post';

            for (let user in usersPosts) {
                if (usersPosts[user].name) {
                    const tBodyRow = tBody.insertRow();
                    const tBodyName = tBodyRow.insertCell();
                    const tBodyTitle = tBodyRow.insertCell();
                    const tBodyPost = tBodyRow.insertCell();
                    tBodyName.textContent = usersPosts[user].name;
                    tBodyTitle.textContent = usersPosts[user].title;
                    tBodyPost.textContent = usersPosts[user].post;
                }
            }
            document.body.append(table);
        } catch (e) {
            console.log(`ОШИБКА ${e}`);
        }
    }

    showPosts()
}());
