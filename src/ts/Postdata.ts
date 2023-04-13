import PostData from "../../crawler/data/PostData";

type SinglePostData = {
    path:string;
    title:string;
    ctime:string;
    mtime:string;
    category:string;
};

function getAllPostList(): SinglePostData[] {
    const posts:SinglePostData[] = [];
    
    PostData.forEach(dirItem => {
        dirItem.posts.forEach(item => {
            posts.push(item);
        })
    });

    function cmp(a:SinglePostData, b:SinglePostData) {
        const dateA = new Date(a.ctime).getTime();
        const dateB = new Date(b.ctime).getTime();
        return dateA < dateB ? -1 : 1;
    }
    
    posts.sort(cmp);

    return posts;
}

function getCategoryTitle() {
    return PostData.map(value => {
        return {
            title:value.dirName,
            postCount:value.posts.length,
        }
    });
}
// function getAllDirList() {
// }
// function getPostDataByUrl(url:string) {
// }
export { getAllPostList, getCategoryTitle };
export type { SinglePostData };
