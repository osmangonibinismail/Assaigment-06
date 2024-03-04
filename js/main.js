let allPosts = [];
const getAllPost = () =>{
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    .then((res)=>res.json())
    .then((data)=>{
        allPosts = data.posts;
        // console.log(allPosts);
        handleCardContainer(allPosts)
    })
}
const cardContainer = document.getElementById('card-container');
const handleCardContainer = (allPosts) => {
allPosts.forEach(post => {
    const div = document.createElement('div');
    const icon = post.isActive ? 'badge-accent' : 'badge-error';
    div.innerHTML = `
    <div class="flex gap-5">
              <div class="indicator">
                <span class="indicator-item badge ${icon}"></span>
                <div class="grid w-32 h-32 bg-base-300 place-items-center rounded-2xl">
                    <img src="${post.image}" alt="Images" class="">
                </div>
              </div>
              <div>
                  <div class="flex gap-5">
                    <h1 class=""># ${post.category}</h1>
                    <h1>Author: ${post.author.name}</h1>
                  </div>
                  <h3 class="text-[#12132D] text-xl font-bold">${post.title}</h3>
                  <p class="text-[#12132D] text-opacity-60 text-base font-normal leading-relaxed">${post.description}</p>
                  <hr class="my-5">
                  <div class="flex justify-between item-center">
                      <div class="flex gap-5">
                          <div class="flex gap-1 item-center">
                              <p>
                                <i class="fa-regular fa-envelope mr-1"></i>${post.comment_count}
                              </p>
                          </div>
                          <div class="flex  gap-1 item-center">
                            <p>
                              <i class="fa-regular fa-eye mr-1"></i>${post.view_count}
                            </p>
                          </div>
                          <div class="flex gap-1">
                            <p>
                              <i class="fa-regular fa-clock text-none mr-1"></i>${post.posted_time} min
                            </p>
                          </div>
                      </div>
                      <div>
                          <button class="" type="button" >
                            <button class="btn btn-ghost btn-circle border-zinc-300 bg-green-400">
                            <i class="fa-regular fa-envelope-open border-white"></i>
                            </button>
                          </button>
                      </div>
                  </div>
              </div>
            </div>
    `
    cardContainer.appendChild(div);
});
}
// 
const getAllLatestPost = () =>{
    fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    .then((res)=>res.json())
    .then((data)=>{
        handleLatestCardContainer(data);
    });
};
const latestCardContainer = document.getElementById('latest-card-container');
const handleLatestCardContainer = (data) => {
    data.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="container mx-auto max-w-[90%] lg:max-w-[80%] p-5 flex bg-inherit">
            <div class="card w-96 bg-base-100 shadow-xl rounded-3xl">
            <figure class="p-5 bg-cover bg-center rounded-3xl">
                <img src="${post.cover_image}" alt="Shoes" />
            </figure>
            <div class="card-body justify-start">
                <div class="flex gap-2">
                <i class="fas fa-stopwatch"></i>
                <p>${post?.author?.posted_date || 'No Publish Date'}</p>
                </div>
                <h2 class="card-title">
                ${post.title}
                </h2>
                <div class="flex gap-5">
                    <img src="${post.profile_image}" alt="profile_image" class="w-12 border-zinc-300 btn-circle">
                    <div>
                        <h3 class="text-[#12132D] text-base font-bold">${post.author.name}</h3>
                        <p>${post?.author?.designation || 'Unknown'}</p>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
        `
        latestCardContainer.appendChild(div);
    });
}
getAllPost();
getAllLatestPost();
