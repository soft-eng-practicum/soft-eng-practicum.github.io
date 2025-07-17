const title = document.title;
let res = title.replace(/<[^\/>][^>]*>(.*?)<\/[^>]+>/g, '').trim();
document.title = res;
