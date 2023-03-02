const loadAllNews = () =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => showCategories(data.data))
}

const showCategories = (data) =>{
    // console.log(data);
    const categoryContainer = document.getElementById('category-container');
    data.news_category.forEach((categoryIndex) => {
        // console.log(categoryIndex.category_name);
        const itemConatiner = document.createElement('p');
        itemConatiner.innerHTML = 
        `
        <a onClick="fetchCategoryNews('${categoryIndex.category_id}','${categoryIndex.category_name}')">${categoryIndex.category_name}</a>
        `;
        categoryContainer.appendChild(itemConatiner);
    });
}

const fetchCategoryNews = (category_id,category_name) =>{
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data,category_name))
}

const showAllNews = (data,category_name) =>{
    // console.log(data,category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category_name').innerText = category_name;
    const allNews = document.getElementById('all-news');
    allNews.innerHTML = "";
    data.forEach((singleNews) =>{
        const {_id,image_url,title,details,author} = singleNews;
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card lg:card-side bg-base-100 shadow-xl mt-5">
                <figure><img src="${image_url}" alt="Album"/></figure>
                <div class="card-body">
                  <h2 class="card-title">${title}</h2>
                  <p>${details}</p>
                    <div class="flex gap-7 items-center justify-between">
                          <div class="flex gap-7 items-center">
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                  <img src="${author.img}" />
                                </div>
                              </div>
                              <div>
                                <p>${author.name}</p>
                                <p><span>${author.published_date}</span></p>
                              </div>
                          </div>
                          <a href="#my-modal" onClick="fetchNewsDetails('${_id}')" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        `;
        allNews.appendChild(card);
    });
}

const fetchNewsDetails = (news_id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showNewsDetails(data.data[0]))
}

const showNewsDetails = (newsDetail) =>{
    console.log(newsDetail);
    const {image_url,title,details} = newsDetail;
    document.getElementById('my-modal').innerHTML =
    `
    <div class="modal-box">
    <img class="w-full h-25" src="${image_url}" alt="">
    <h3 class="font-bold text-lg">${title}</h3>
    <p class="py-4">${details}</p>
    <div class="modal-action">
        <a href="#" class="btn btn-info">Save</a>
    </div>
    </div>
    `;
}

loadAllNews()